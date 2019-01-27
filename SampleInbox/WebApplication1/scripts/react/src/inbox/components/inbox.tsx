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
                emails: this.client.getMockEmailList(),
                filter: "None"
            }
        }
        this.renderList = this.renderList.bind(this)
    }
    renderList(): JSX.Element {
        return <div className="col-xs-12 nopadding mail-list">
            {this.state.emails.map((mail) => <EmailBox mail={mail} />)}
        </div>
    }
    loadMore() {

    }


    render(): JSX.Element {
        return this.state ? <div className="inbox row">
            <div className="inbox-header col-xs-12">
                <div className="col-xs-3 no-padding center">Inbox</div>
                <div className="col-xs-2 no-padding filter">
                    <div className="col-xs-6 no-padding">Filter</div>
                    <div className="col-xs-6 no-padding"><Dropdown className="filter-dropdown" options={filterOption} onChange={e => this.setState({ filter: e.value })} value={filterOption[0]} placeholder="None" /></div>               
                </div>
            </div>
            {this.renderList()}
        </div> : <div />
    }
}
