import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  RestaurantId:any;
  data1:any;
  UserId:any;
  buttons = Array(10).fill(false);
  count1 = Array(10).fill(0);
  cartenable:boolean;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {

    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
     
      this.router.navigate(['/login']);
    }
    let resultstate1=this.service.clearCart(id);
    resultstate1.subscribe((data)=>{
      console.log(data);
     
    });
 

  this.RestaurantId =  sessionStorage.getItem("RestoId");
  console.log(this.RestaurantId);

  let resultstate=this.service.MenuList(this.RestaurantId);
  resultstate.subscribe((data)=>{
 console.log(data['Data']);
 this.data1 = data['Data'];

 
   
  });

    
  }

minus(j)
{
  console.log("in minus");


  if(this.count1[j] !=0)
  {
    this.count1[j] = this.count1[j] - 1;
  }
  else{
    alert("please add the quantity");
  }
  
  
}

plus(j)
{
  console.log("in plus",j);
  this.count1[j] = this.count1[j] + 1;

}


  CartData(MenuHotelId,quantity)
  {
    if(quantity !=0)
    {
      console.log(quantity);
      // this.buttons[j]=true;
       console.log("CartData Method");
       console.log(MenuHotelId);
       this.UserId = sessionStorage.getItem("UserId");
       let resultstate=this.service.CartData(this.UserId,MenuHotelId,quantity);
       resultstate.subscribe((data)=>{
       console.log(data);
      if(data['Status'] == 'Success')
      {
        this.cartenable = true;
        alert("Menu added to cart !!");

      }
      else
      {
        alert("something wrong !!");
      }
        
       });
   

    }
    else{
      alert("Please select the quantity of menu")
    }
  
  }



}
