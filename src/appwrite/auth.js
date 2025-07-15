import config from '../config/config';
import { Client, Account ,ID} from 'appwrite';

export class AuthService{     // class
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint('config.appwriteURL')
        .setProject('config.appwriteProjectID'); // Replace with your project ID
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // return user or directly usko login karwado 

            }
        } catch (error) {
            return error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();  
        } catch (error) {
            
        }
    }
}

// class ka object bnake direct ise hi return kardo then agar kisi ko call karna hai toh useraccount.method (method can be login signup logout etc)se call kar lega 
const authService = new AuthService();    

export default authService;  