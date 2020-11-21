import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  Login(userObject)
  {
    return this.http.post("http://localhost:51492/api/login/",userObject);
    
  }

  Register(userObject)
  {
    return this.http.post("http://localhost:51492/api/register/",userObject)
  }

  Restaurants()
  {
    console.log("hello i m in service restaurant");
   return this.http.get("http://localhost:51492/api/Restaurant");
  }
  
MenuList(RestaurantId)
{
  console.log("user serice restoId"+RestaurantId);
 return this.http.get("http://localhost:51492/api/Menu/"+RestaurantId)

}
CartData(UserId,MenuHotelId,Quantity)
{

  var userObject={
  "UserId":UserId,
  "MenuHotelId":MenuHotelId,
  "Quantity":Quantity

  }
  console.log("cart in serive",userObject);
  return this.http.post("http://localhost:51492/api/Cart/",userObject);

}

clearCart(UserId)
{
  return this.http.delete("http://localhost:51492/api/Cart/"+UserId)
}
ViewCart(UserId)
{
  console.log("hello i m in service viewcart");
 return this.http.get("http://localhost:51492/api/Cart/"+UserId);
}
deleteCartRecord(CartId)
{
console.log("cart id is",CartId);
return this.http.delete("http://localhost:51492/api/Cart/Cart1/"+CartId);
}

}
