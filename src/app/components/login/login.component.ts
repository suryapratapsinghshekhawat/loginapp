import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService){}

credentials={
  username:'',
  password:''
}

onSubmit(){
  if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
              
    this.loginService.generateToken(this.credentials).subscribe(
      (response:any)=>{
               console.log(response.token);
               this.loginService.loginUser(response.token)
               window.location.href="/dashboard"
               
    },
    error=>{
            console.log(error);
            
    })
  }
  else{
    console.log("Invalid credentials!!");
    
  }
}



}
