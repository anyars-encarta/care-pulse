import * as sdk from 'node-appwrite';

export const {
    NEXT_PUBLIC_PROJECT_ID: PROJECT_ID,
    NEXT_PUBLIC_API_KEY: API_KEY,
    NEXT_PUBLIC_DATABASE_ID: DATABASE_ID,
    NEXT_PUBLIC_PATIENT_COLLECTION_ID: PATIENT_COLLECTION_ID,
    NEXT_PUBLIC_DOCTOR_COLLECTION_ID: DOCTOR_COLLECTION_ID,
    NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID: APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env

console.log('The Project ID: ', PROJECT_ID)
console.log('The API Key: ', API_KEY)
console.log('The Database ID: ', DATABASE_ID)
console.log('The Patient Collection ID: ', PATIENT_COLLECTION_ID)
console.log('The Doctor Collection ID: ', DOCTOR_COLLECTION_ID)
console.log('The Appointment Collection ID: ', APPOINTMENT_COLLECTION_ID)
console.log('The Bucket ID: ', BUCKET_ID)
console.log('The Endpoint: ', ENDPOINT)

const client = new sdk.Client();

client
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);