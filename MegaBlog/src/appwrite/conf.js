import {Databases, Client, ID, Query, Buckets} from 'appwrite';
import config from '../config/config';

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Buckets(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log("Appwrite error :: service :: createPost error", error)
            throw error
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }catch(error){
            console.log("Appwrite error :: service :: updatePost error", error)
            throw error
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                config.databaseId,
                congig.collectionId,
                slug
            )
            return true;
        }catch(error){
            console.log("Appwrite error :: service :: deletePost error", error)
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                config.databaseId,
                config.collectionId,
                slug
            )  
        }catch(error){
            console.log("Appwrite error :: service :: getPost error", error)
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                config.databaseId,
                config.collectionId,
                queries
           
            )
        }catch(err){
            console.log("Appwrite error :: service :: getPosts error", error)
            return false;
        }
    }


    // file upload service

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                config.bucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("Appwrite error :: service :: uploadFile error", error)
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                config.bucketId,
                fileId
            )
            return true;
        }catch(err){
            console.log("Appwrite error :: service :: deleteFile error", error)
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.bucketId,
            fileId
        )
    }
}

const service = new Service();
export default Service;