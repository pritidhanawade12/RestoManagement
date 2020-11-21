import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
  }

  Add(DataFromUI:any)
  {
    console.log("register ts"+DataFromUI);
    let resultstate = this.service.Register(DataFromUI.form.value);
    
  
    resultstate.subscribe((data:any)=>
    {
      console.log(data);
      
      if(data.Status=='Success')
      {
  
        alert("Registration Successful !!");
        this.router.navigate(['/login']);
   

      }
      else
      {
       
        alert("something wrong");
      }
  
    });
  }


}
