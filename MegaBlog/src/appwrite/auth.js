import config from '../config/config.js';
import { Client, Account } from 'appwrite';


export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.projectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method
                return await this.login({email, password});
            }else{
                throw new Error('Account creation failed')
            }
        }catch(error){
            throw error
        }   
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password);
        }catch(error){
            throw error
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("errored here", error)
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            console.log("Error during logout-------------", error)
        }
    }

}
const authService = new AuthService()
export default authService