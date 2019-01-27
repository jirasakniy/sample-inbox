import * as React from "react";
import { IEmail } from "../models/email";
import EmailBox from "./emailBox";
import EmailService from "../services/emailService";

export interface IInboxxProp{
}

export interface IInboxState{
    emails:IEmail[];
    
}

export default class Inbox extends React.Component<IInboxxProp,IInboxState>{
    private client = new EmailService()

    constructor(props:IInboxxProp){
        super(props);
        {
            this.state = {
                emails: this.client.getMockEmailList()
            }
        }
    }

    render():JSX.Element{
        return this.state?<div>
            {this.state.emails.map((mail) => <EmailBox mail={mail}/>)}
            <EmailBox mail={this.state.emails[0]} />
        </div>:<div/>
    }
}
