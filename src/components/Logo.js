import React, { Component } from 'react';
import { observable, action, decorate} from 'mobx';
import { observer } from 'mobx-react';
import './Logo.css';


class Logo extends Component{

     logo =['L1','L2','L3'];
     i = 0;
     
     
    inc =() =>{   
        this.i++;
        if(this.i ==3){
            this.i = 0
        }
          
           
     };

    dec =() => {
        this.i--
        if(this.i == -1){
            this.i = 2
        }
        
           
     }
     
     
     render(){
        
        
    return(
        
        <div className={this.logo[this.i]}>
           
            <button onClick={this.dec}>←</button>
            <button onClick={this.inc}>→</button>
           
            
        </div>
    )
     }
    //1,2,3 클릭시 변수를 클래스 네임에 넣고 버튼누르면 변수가 바뀌어서 클래스 네임도 바뀌게 되는 클래스 네임에 따라
    //백그라운드 사진이 달라짐

}

decorate(Logo, {
    i: observable,
    inc: action,
    dec: action
  });

export default observer(Logo);