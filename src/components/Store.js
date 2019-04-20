import { observable, action, computed, decorate} from 'mobx';


export default class Store {
       List = [
        {
            name:"ChaeWon",
            age:20
        },
        {
            name:"ChaeYeon",
            age:20
        },
        {
            name:"EunBi",
            age:25
        },
        {
            name:"WonYung",
            age:16
        },
        {
            name:"HyeWon",
            age:21
        },
        {
            name:"NaKo",
            age:19
        },
        {
            name:"SaKuRa",
            age:22
        },
        {
            name:"HiToMi",
            age:19
        },
        {
            name:"YeNa",
            age:21
        },
        {
            name:"MinJu",
            age:19
        },
        {
            name:"YuJin",
            age:17
        },
        {
            name:"YuRi",
            age:19
        },
    ]

        Member = {name:"",age:0}
        mode = true;

          ChangeMode =() => {
            this.mode = !this.mode;
            
        }

          GetInfo =(name,age) => {
            this.Member.name =name;
            this.Member.age =age;
        
        }

        get AlertMan() {
               if(this.Member.name != "") 
                alert(this.Member.name);
        }
}

decorate(Store,{
    
    Member:observable,
    mode:observable,
    ChangeMode:action,
    GetInfo:action,
    AlertMan:computed
})