import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:any;

  constructor(private service: UserService,private router:Router) {}

  ngOnInit() {
  }
 
  Add(DataFromUI:any)
{
  console.log("login ts"+DataFromUI);
  let resultstate = this.service.Login(DataFromUI.form.value);
  

  resultstate.subscribe((data:any)=>
  {
    console.log(data);
    
    if(data.Status=='Success')
    {
      console.log("success");
      alert("hello"+data.Data.Name+" "+"Login Successful !!");
      sessionStorage.setItem("UserEmail",data.Data.EmailId);
      sessionStorage.setItem("UserId",data.Data.UserId);
      var p =  sessionStorage.getItem("UserEmail");
      sessionStorage.setItem("Uname",data.Data.Name)
      this.id = data.Data.RoleId;
      console.log(data.Status);
      if(this.id == 1)
      {
        this.router.navigate(['/adminhome']);

      }
      else
      {
        this.router.navigate(['/userhome']);

      }
    }
    else
    {
     
      alert("Incorrect Email or Password");
    }

  });

}





}
