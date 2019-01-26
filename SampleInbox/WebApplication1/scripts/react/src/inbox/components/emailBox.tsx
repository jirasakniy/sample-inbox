import * as React from "react";
import { IEmail } from "../models/email";

export interface IEmailBoxProp{
    mail: IEmail;
}

export interface IEmailBoxState{
}

export default class EmailBox extends React.Component<IEmailBoxProp,IEmailBoxState>{
    constructor(props:IEmailBoxProp){
        super(props);
    }

    render():JSX.Element{
        return <div>
            <div className="col-xs-2">
                Pic
            </div>
            <div className="col-xs-10 toey">
                <div className="col-xs-12">
                    {this.props.mail.from.name}
                </div>
                <div className="col-xs-12">
                    {this.props.mail.subject}
                </div>
                <div className="col-xs-12">
                    {this.props.mail.body}
                </div>
            </div>
        </div>
    }
}
