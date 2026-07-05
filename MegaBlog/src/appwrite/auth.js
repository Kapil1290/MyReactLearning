import config from '../config.js';
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
                
            }else{
                throw new Error('Account creation failed')
            }
        }catch(error){
            throw error
        }   
    }

    async login({email, password}){
        try{
            await this.account.creat
        }catch(error){
            throw error
        }
    }
}
const authService = new AuthService()
export default authService