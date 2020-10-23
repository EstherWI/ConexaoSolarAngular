import { Component } from '@angular/core';
//add imports
import {UserService} from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  usuarios: Array<any> = [];
  constructor(private service: UserService){
    this.service.GetAll()
     .subscribe((data)=>{
        this.usuarios = data;
        console.log(this.usuarios);
     });
  }
}
