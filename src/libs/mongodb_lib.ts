// mongodb_lib.ts
import { FindOptions, ObjectId } from 'mongodb';
import { MongoClientSingleton } from '@/database/MongoClientSingleton';

const clientSingleton = MongoClientSingleton.getInstance();
const client = clientSingleton.getClient();

interface MonitorRecord {
  _id: ObjectId;
  date: Date;
  monitor: number;
  public_address: string;
  url: string;
}

async function check_connection() {
  // Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db('admin').command({ ping: 1 });
  console.log('Pinged your deployment. You successfully connected to MongoDB!');
}

async function read_record() {
  try {
    await client.connect();

    const database = client.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION || '');

    const query = { monitor: 1 };
    const monitor = await collection.findOne(query);
    const sortCriteria = { date: -1 };
    const options: any = {
      sort: sortCriteria,
    };

    const lastRecord = await collection.findOne(query, options);

    if (lastRecord) {
      console.log('Monitor Found:', monitor);
      return lastRecord;
    } else {
      console.log("No monitor found with the index 'one'");
      return undefined;
    }
  } catch (err) {
    console.log('failed to read mongodb');
    console.error(err);
  }
}

async function update_record(url: string) {
  try {
    await client.connect();

    const database = client.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION || '');

    const query = { monitor: 1 };
    const update = {
      $set: {
        url: url,
      },
    };

    const result = await collection.updateOne(query, update);

    console.log(`Updated the document with the field ${url}`);
  } catch (err) {
    console.log('failed to update mongodb');
    console.error(err);
  }
}

async function insert_record(newRecord: MonitorRecord) {
  await client.connect();

  try {
    const database = client.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION || '');
    const result = await collection.insertOne(newRecord);
    console.log(`Inserted metadata record with _id: ${result.insertedId}`);
    return result.insertedId;
  } catch (error) {
    console.error('Error inserting record:', error);
    throw error; // Rethrow the error to handle it at a higher level if needed.
  }
}

export { check_connection, read_record, update_record, insert_record };

export type { MonitorRecord };
