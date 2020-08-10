import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoutesComponent} from "../routes/routes.component";
import {global} from "@angular/compiler/src/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   user:User = {
    name:'',
    psw:'',
    email:''
  };

  constructor(private http: HttpClient,private router: Router) {
  }

  ngOnInit(): void {
  }
  sendUser():void{
    let url = "http://localhost:8080/api/usuario/newUser";
    this.http.post(url,this.user).subscribe(
      res =>{
        this.router.navigate(['/routes'])


      },
      error => {
        alert("An error has occurred while sending data");
      }
    );
  }
}
export interface User {
  name:string;
  psw:string;
  email:string;

}
