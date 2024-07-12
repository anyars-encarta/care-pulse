import * as sdk from 'node-appwrite';

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
const PATIENT_COLLECTION_ID = process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID;
const DOCTOR_COLLECTION_ID = process.env.NEXT_PUBLIC_DOCTOR_COLLECTION_ID;
const APPOINTMENT_COLLECTION_ID = process.env.NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID;
const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

const client = new sdk.Client();

client
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);