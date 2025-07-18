// this is a file to use env variables 
// a better method to use env variables in production 

const config = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default config;