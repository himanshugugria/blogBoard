import { Client,ID,Databases,Storage,Query,Permission,Role } from "appwrite";
import config from "../config/config";

export class Service{
    client = new Client();
    databases;
    buckets;

    constructor(){
        this.client
        .setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectID); // Replace with your project ID
        this.databases = new Databases(this.client);
        this.buckets = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }

            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost({slug}){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true;
        } catch (error) {
            throw error;   
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }


    // file upload services

    async uploadFile(file){
        try {
            return await this.buckets.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file,
                // [Permission.read(Role.any())]     // to set permision while uploading the file to read by all users, then only can we render images in Post and Postcard.
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.buckets.deleteFile(
                config.appwriteBucketID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.buckets.getFileView(config.appwriteBucketID, fileId)
    }
}

const service = new Service();

export default service;