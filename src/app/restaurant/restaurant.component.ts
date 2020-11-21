import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  data1:any;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
     
      this.router.navigate(['/login']);
    }
    delete sessionStorage["RestoId"];
    let resultstate1=this.service.clearCart(id);
    resultstate1.subscribe((data)=>{
    console.log(data);
     
    });


    
  
    console.log("restaurantComponent Loaded")
    let resultstate=this.service.Restaurants();
    resultstate.subscribe((data)=>{
      this.data1 = data;
     
    });
    console.log(this.data1);
     
  }

  Menu(RestaurantId)
  {
    sessionStorage.setItem("RestoId",RestaurantId);
  }


}
