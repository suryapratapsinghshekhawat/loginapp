import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  constructor(private userService:UserService){}
  

getUser(){
this.userService.getUser().subscribe(
  user=>{
         console.log(user);
          
  },
  error=>{
   console.log(error);
   
  }
)
}

}
