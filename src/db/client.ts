export const runtime = 'nodejs';

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI!;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;
