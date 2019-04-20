import React, { Component } from 'react';
import Member from './Member'
import ViewMember from './ViewMember';
import {inject,observer} from 'mobx-react';
import './Members.css'


class Members extends Component{

    //옵서버블 트루 펄스로 모드 바꾸기

      
        GetMember=()=>  {
          const mem = this.props.IList.map((info) => {
            
          return <Member name={info.name} age={info.age} CMode={this.props.CMode} GInfo={this.props.GInfo} key={info.name}/>
        })
        
        return mem
      }
        
        render(){
         const Member = this.props.Member
         
        return( 
          <div className="Members" >
              {this.props.mode ? this.GetMember() : <ViewMember name={Member.name} age={Member.age} CMode={this.props.CMode} />}
           </div> 
          ) 
        }
}

export default inject(({izone}) => ({
    Member:izone.Member,
    IList:izone.List,
    mode:izone.mode,
    CMode:izone.ChangeMode,
    GInfo:izone.GetInfo,
    AMan:izone.AlertMan
  }))(observer(Members));