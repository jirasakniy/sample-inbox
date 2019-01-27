import * as React from "react";
import {IContact } from "../models/email";


export interface IUserDisplayProp{
    contact: IContact
}

export interface IUserDisplayState{    
}


export default class UserDisplay extends React.Component<IUserDisplayProp,IUserDisplayState>{

    constructor(props:IUserDisplayProp){
        super(props);
        {
        }
    }
    getColor(name:string):string{
        let color = ["red","green","blue","yellow","purple","orange"]

        let char = this.getChar(name)
        let colorIndex =  char.charCodeAt(0)
        return color[colorIndex % 6]
    }
    getChar(name:string):string{
        let strList = name.split(" ");      
        let result = strList.length > 1? strList[0].charAt(0) + strList[1].charAt(0):strList[0].charAt(0);       
        return result;
    }

    render():JSX.Element{
        return <div className={"circle-display color-"+this.getColor(this.props.contact.name?this.props.contact.name:this.props.contact.email)}>
            <span className="center">{this.getChar(this.props.contact.name?this.props.contact.name:this.props.contact.email)}</span>
        </div>
    }
}
