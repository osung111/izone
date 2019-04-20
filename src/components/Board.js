import React, { Component } from 'react';
import {observable, decorate,action} from 'mobx';
import { observer } from 'mobx-react';
import './Board.css';
import Members from './Members';



class Board extends Component{
    Mode = false;
    
    changeMode =() =>{
        this.Mode = !this.Mode ;
    }

    render() {
        return(
            <div className="Board" >
                <Members />
            </div>
        )
    }
}

decorate(Board,{
    Mode:observable,
    changeMode: action
    }
)

export default observer(Board);