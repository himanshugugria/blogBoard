import config from '../config/config.js';
import { Client, Account ,ID} from 'appwrite';

export class AuthService{     // class
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectID) // Replace with your project ID
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            console.log("account created",userAccount);
            
            if(userAccount){
                // return user or directly usko login karwado 
                const session = await this.login({email,password});
                console.log("session created",session);
                
                return session;
            }
        } catch (error) {
            console.log("appwrite auth issue");
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
            return await this.account.get();
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