let balance=document.querySelector("#Balance")
let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let inpt=document.querySelector("#inpt")
let btn3=document.querySelector("#btn3")
let table=document.querySelector("#table1")




const Bank={

    Balance:0,
    Artirmag:function(value){

        if(value<=0||value==undefined||value.length==0){
            return alert("düzgün qeyd olunmayib")
        }

    this.Balance = this.Balance+(+value)

   const history={
        type:"",
        amount:"",
        time: "",

    }


    history.type="Cash"
    history.amount=value
    history.time=`${this.date.getDate()<10?"0"+this.date.getDate():+this.date.getDate()}.${this.date.getMonth()+1}.${this.date.getFullYear()}   ${this.date.getHours()}:${this.date.getMinutes()<10?"0"+this.date.getMinutes():this.date.getMinutes()}`
    this.hesabat.push(history)

    },
    Cixartmag:function(value){
        if(this.Balance-value<=0||value==undefined||value.length==0){
            return alert ("balansda geyd olunan mebleg yoxdur")

        }
        const history={
            type:"",
            amount:"",
            time: "",
    
        }
        this.Balance = this.Balance-(+value)
        history.type="Withdraw"   
        history.amount=value
        history.time=`${this.date.getDate()<10?"0"+this.date.getDate():+this.date.getDate()}.${this.date.getMonth()+1}.${this.date.getFullYear()}   ${this.date.getHours()}:${this.date.getMinutes()<10?"0"+this.date.getMinutes():this.date.getMinutes()}`
        this.hesabat.push(history)
    },
    hesabat:[],
    date:new Date(),

   
    


 }


 btn1.addEventListener("click",function(){

    Bank.Artirmag(inpt.value)
    balance.innerHTML=`${Bank.Balance}`
    inpt.value=""
    

  

 })
 
 btn2.addEventListener("click",function(){

    Bank.Cixartmag(inpt.value)
    balance.innerHTML=`${Bank.Balance}`
    inpt.value=""
  
    

 })


 btn3.addEventListener("click",function(){
    let arr1=Bank.hesabat.map(function(item,index){

        return  `
        
        <tr>
          <th scope="row">${index}</th>
          <td class="${item.type=="Cash"?"text-success":"text-danger"}"  >${item.type}</td>
          <td>${item.type=="Cash"?`+${item.amount}` :`-${item.amount}`} </td>
          <td>${item.time}</td>
        </tr>
        
       `


 
      
  
     }).join("")

     table.innerHTML=arr1

     

 })

 

