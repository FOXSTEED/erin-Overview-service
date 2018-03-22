const MongoClient = require('mongodb').MongoClient;
const _ = require('ramda');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const dataObj = require('./attraction');

const base = parseInt(10000000 / numCPUs);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers and give them starting ID's.
  for (let i = 0; i < numCPUs; i++) {
    const baseID = base * i;
    const worker = cluster.fork();
    worker.send(baseID);
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} finished`);
  });
} else {
  process.on('message', (id) => {
    seedDB(id);
    console.log(`Worker ${process.pid} started`);
  });
}


function seedDB(baseID) {
  MongoClient.connect('mongodb://localhost/').then((client) => {
    const db = client.db('overview');
    const collection = db.collection('attractions');

    const size = 1000;
    let indexStart = baseID;
    async function insertBulkArray(numBulkArryCalls) {
      try {
        const ops = _.range(0, size).map((id) => {
          return { insertOne: { document: { ...dataObj, id: indexStart + id } } };
        });
        await collection.bulkWrite(ops, { ordered: false });
        numBulkArryCalls -= size;
        indexStart += size;
        if (numBulkArryCalls > 0) {
          insertBulkArray();
        } else {
          // close mongodb connection
          client.close();
          // close worker session
          process.exit();
        }
      } catch (err) {
        console.log('Seed Error: ', err);
      }
    }
    insertBulkArray(base);
  });
}

