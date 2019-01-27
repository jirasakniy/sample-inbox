import * as React from "react";
import { IEmail } from "../models/email";
import EmailBox from "./emailBox";
import EmailService from "../services/emailService";
import Dropdown from 'react-dropdown';
const filterOption = ["None", "Today", "Unread", "Read"];
export interface IInboxxProp {
}

export interface IInboxState {
    emails: IEmail[];
    filter: string;

}

export default class Inbox extends React.Component<IInboxxProp, IInboxState>{
    private client = new EmailService()

    constructor(props: IInboxxProp) {
        super(props);
        {
            this.state = {
                emails: [],
                filter: "None"
            }
            this.client.getEmailList(10,1).then(emailList => {this.setState({emails:emailList})})
            .catch(e=>
                alert(e.message)
            )
        }
        this.renderList = this.renderList.bind(this);
        this.getFilterList = this.getFilterList.bind(this);
        this.read = this.read.bind(this);
    }
    renderList(): JSX.Element {
        return <div className="col-xs-12 nopadding mail-list">
            {this.getFilterList().map((mail,i) => <EmailBox mail={mail} index={i} read={this.read}/>)}
        </div>
    }
    getFilterList(): IEmail[] {
        if(this.state.filter == filterOption[1]){
            let today = new Date();
            return this.state.emails.filter(mail=>today.toDateString() == mail.recievedDate.toDateString())
        }
        if(this.state.filter == filterOption[2]){
            return this.state.emails.filter(mail=>!mail.isRead)
        }
        if(this.state.filter == filterOption[3]){
            return this.state.emails.filter(mail=>mail.isRead)
        }
        return this.state.emails;        
    }
    loadMore() {

    }
    
    read(index: number) 
    {   
        let newList = this.state.emails
        newList[index].isRead = true; 
        this.setState({emails:newList});
    }


    render(): JSX.Element {
        return this.state ? <div className="inbox row">
            <div className="inbox-header col-xs-12">
                <div className="col-xs-3 no-padding center">Inbox</div>
                <div className="col-xs-2 no-padding filter">
                    <div className="col-xs-6 no-padding">Filter</div>
                    <div className="col-xs-6 no-padding"><Dropdown className="filter-dropdown" options={filterOption} onChange={(e)=>this.setState({ filter:e.value })} value={filterOption[0]} placeholder="None" /></div>               
                </div>
            </div>
            {this.renderList()}
        </div> : <div />
    }
}
