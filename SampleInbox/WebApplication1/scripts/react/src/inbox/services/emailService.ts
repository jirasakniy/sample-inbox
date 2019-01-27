import { IEmail } from "../models/email";
import { IContact} from "../models/email";

export default class EmailService {

   
    getMockEmailList() {
        let result:IEmail[]=[this.getMockEmails(),this.getMockEmails(),this.getMockEmails(),this.getMockEmails(),this.getMockEmails(),this.getMockEmails(),this.getMockEmails(),this.getMockEmails()]
        return result;
    }

    getMockEmails() {
        let result:IEmail={
            from:  this.getMockContact(),
            subject: "mock contentLorem Ipsum is simply dummy text of the",
            body: "mock contentLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            recievedDate: new Date(12,12,12)   
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