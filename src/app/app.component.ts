import { Component } from '@angular/core';
//add imports
import {UserService} from './user.service';
import { FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  usuarios: Array<any> = [];
  constructor(public service: UserService){
    this.service.GetAll()
     .subscribe((data)=>{
        this.usuarios = data;
        console.log(this.usuarios);
     });

     this.service.selectedUser = {
       "name": '',
       "email": '',
       "senha": ''
     };
  }


  public onSubmit(form: FormGroup){
    console.log(form.value);

    if(form.value._id == null){
      this.service.Create(form.value)
      .subscribe((resp)=> {
        console.log(resp);
        if(resp["status"]== 201){
          this.service.GetAll()
            .subscribe((data)=>this.usuarios=data);
        }
        else{
          alert(`Já existe uma conta com este email. Insira outro por favor.`);
        }
      });
    }
  }
}
