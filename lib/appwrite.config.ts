import * as sdk from 'node-appwrite';

// export const {
//     NEXT_PUBLIC_PROJECT_ID='668d2c99000c0d355cb3',
//     NEXT_PUBLIC_API_KEY='3ff15d5a91b49d96bd5e0515c651f7106cc733901a250a3d99407037b60f448e76a561d20c9c61682fc944341ed9a78431cb7f822646b0863123d71b256220112d690a466f95c3a807897ff248d1f67eea12292b7e4346101b2e1d91f42120029082a0e83dc1b02be36965a43ff95c0d9f6acdc4dc1f3c8ca57c01a8bc75eac9',
//     NEXT_PUBLIC_DATABASE_ID: DATABASE_ID,
//     NEXT_PUBLIC_PATIENT_COLLECTION_ID: PATIENT_COLLECTION_ID,
//     NEXT_PUBLIC_DOCTOR_COLLECTION_ID: DOCTOR_COLLECTION_ID,
//     NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID: APPOINTMENT_COLLECTION_ID,
//     NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
//     NEXT_PUBLIC_ENDPOINT='https://cloud.appwrite.io/v1'
// } = process.env

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID
const PATIENT_COLLECTION_ID = process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID
const DOCTOR_COLLECTION_ID = process.env.NEXT_PUBLIC_DOCTOR_COLLECTION_ID
const APPOINTMENT_COLLECTION_ID = process.env.NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID
const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

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