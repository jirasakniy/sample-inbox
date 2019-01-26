import { IEmail } from "../models/email";
import { IContact} from "../models/email";

export default class EmailService {

   

    getMockEmails() {
        let result:IEmail={
            from:  this.getMockContact(),
            subject: "test_subject",
            body: " mock content",
            recievedDate: new Date()   
        } 
        return result
    }

    getMockContact() {
        let result:IContact={
             email:  "testemail1@gmail.com",
             name: "Midoriya Izuku"
        } 
        return result
    }
}