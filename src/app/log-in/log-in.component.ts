import { Component, OnInit } from '@angular/core';
import {User} from "../sign-up/sign-up.component";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user:User = {
    name:'',
    psw:'',
    email:''
  };
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  sendUser():void{
    let url = "http://localhost:8080/api/usuario/login";
    this.http.post(url,this.user).subscribe(
      res =>{
        location.reload();
      },
      error => {
        alert("An error has occurred while sending data");
      }
    );
  }

}

