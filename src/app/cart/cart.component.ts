import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
data1:any;
Total_Price=0
item_price:any;
count:any[] = [];
price:any[] = [];
CartId:any[] = [];
  constructor(private service: UserService,private router:Router) { }

  ngOnInit() {

     var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
     
      this.router.navigate(['/login']);
    }
    console.log("restaurantComponent Loaded")
    let resultstate=this.service.ViewCart(id);
    resultstate.subscribe((data)=>{
    console.log(data);
    console.log(data['Data'][0].Price)
    this.data1=data['Data'];

    this.data1.forEach(element => {
    this.count.push(element.Quantity)
 });

 this.data1.forEach(element => {
  this.price.push(element.Price)
});

this.data1.forEach(element => {
  this.CartId.push(element.CartId)
});

 console.log(this.count);
 console.log(this.price);
 console.log(this.CartId);

 this.price.forEach(element => {
  this.Total_Price = this.Total_Price + element;
  
});
console.log("price",this.Total_Price);


});
}


minus(j)
{
  console.log("in minus",j);
  console.log(this.count[j])
    this.item_price = this.price[j]/this.count[j];
    console.log(this.item_price);
    this.count[j] = this.count[j] - 1;
    this.price[j]=this.price[j]-this.item_price;
    this.Total_Price = this.Total_Price - this.item_price;
    if(this.count[j]==0)
    {
    let resultstate=this.service.deleteCartRecord(this.CartId[j]);
    resultstate.subscribe((data)=>{
    if(data['Status'] == 'Success')
    {
      alert("item removed from cart")
    }
    });
    }
 
  
}

plus(j)
{
 
  console.log("in plus",j);
  this.item_price = this.price[j]/this.count[j];
  this.count[j] = this.count[j] + 1;
  this.price[j]=this.price[j]+this.item_price;
  this.Total_Price = this.Total_Price + this.item_price;
}




}
