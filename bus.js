
        var age=11
        var time=8
       var Mprice=18
       var Eprice=22
      var jmprice=10
      var jeprice=12
       var Seniorprice=14

       if(age<18 && time<12){
        console.log("Ticket price:"+jmprice)
        }
       else if(age<18 && time>=12){
        console.log("Ticket price:"+jeprice)  
       }
       else if(age>=18 && age<60 && time<12){
        console.log("Ticket price:"+Mprice)  
       }
       else if(age>=18 && age<60 && time>=12){
        console.log("Ticket price:"+Eprice)  
       }
       
       else if(age>=60){
        console.log("Ticket price:"+Seniorprice)
        
       }
       
        
    
    