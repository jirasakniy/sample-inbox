import * as React from "react";
import { IEmail } from "../models/email";
import UserDisplay from "./userDisplay";

export interface IEmailBoxProp{
    mail: IEmail;
}

export interface IEmailBoxState{
    isCollapse : boolean
}

export default class EmailBox extends React.Component<IEmailBoxProp,IEmailBoxState>{
    constructor(props:IEmailBoxProp){
        super(props);
        this.state = {
            isCollapse:true
        }
        this.mailClick = this.mailClick.bind(this);
    }

    mailClick(){
        this.setState({isCollapse : !this.state.isCollapse})
    }
    
    showDateTime(date:Date):string{
        let today = new Date();
        let isToday = (today.toDateString() == date.toDateString());
        let result = isToday? date.getHours()+":"+date.getMinutes() : date.toLocaleDateString('en-us');
        return result;
    }

    render():JSX.Element{
        return <div className="row email-box">
            <div className="col-xs-3 center">
                <UserDisplay contact={this.props.mail.from}/>
            </div>
        <div className="col-xs-9 no-padding pointer" onClick={e=>this.mailClick()}>
                <div className="col-xs-12">
                    {this.props.mail.from.name}
                </div>
                <div className={"col-xs-10 mail-subject " + (this.state.isCollapse?"mail-collapse":"")}>
                    {this.props.mail.subject}
                </div>
                
                <div className="col-xs-2 date-from">
                    {this.showDateTime(this.props.mail.recievedDate)}
                </div>
                <div className={"col-xs-12 mail-body " + (this.state.isCollapse?"mail-collapse":"")}>
                    {this.props.mail.body}
                </div>
            </div>
        </div>
    }
}
