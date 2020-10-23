import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Uri : string = "http://localhost:8000/users";

  public selectedUser = null;

  public nextUserId = null;

  constructor(private http: HttpClient) { 
    this.GetAll()
    .subscribe((data)=>{
      this.nextUserId = (data [data.length - 1].id+1);
      console.log("Próximo id disponível: " + this.nextUserId);
    });
  }

  public GetAll (){
    return this.http.get<Array<any>>(this.Uri);
  }
}
