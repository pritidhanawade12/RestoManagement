import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MywebComponent } from './myweb/myweb.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MywebComponent,
    ContactUsComponent,
    RegisterComponent,
    UserhomeComponent,
    AdminhomeComponent,
    RestaurantComponent,
    MenuComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {path:"login",component:LoginComponent},
        {path:"restaurants",component:RestaurantComponent},
        {path:"contactus",component:ContactUsComponent},
        {path:"register",component:RegisterComponent},
        {path:"userhome",component:UserhomeComponent},
        {path:"adminhome",component:AdminhomeComponent},
        {path:"menu",component:MenuComponent},
        {path:"cart",component:CartComponent},
        {path:"**",component:MywebComponent}
      
      
      ]
    )
  ],
  providers: [HttpClientModule, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
