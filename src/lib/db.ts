import mongoose, { Mongoose } from 'mongoose'

const MONGO_URI = process.env.MONGO_DB_URL as string

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local')
}

interface MongooseCache {
  conn: Mongoose | null
  promise: Promise<Mongoose> | null
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined
}

const cached = globalThis.mongoose || { conn: null, promise: null }

if (!globalThis.mongoose) {
  globalThis.mongoose = cached
}

export async function connectToDatabase (): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose)
  }

  cached.conn = await cached.promise
  return cached.conn
}
