import { Component, OnInit } from '@angular/core';
import {User} from "../sign-up/sign-up.component";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  tiquete:Ticket = {
    name:'',
    apellido:'',
    email:'',
    cantidad:'',
    de:'',
    a:''
  };
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  sendForm():void{
    let url = "http://localhost:8080/api/usuario/ticket";
    this.http.post(url,this.tiquete).subscribe(
      res =>{
        this.router.navigate(['/form']);
      },
      error => {
        alert("An error has occurred while sending data");
      }
    );
  }

}
export interface Ticket {
  name:string;
  apellido:string;
  email:string;
  cantidad:string;
  de:string;
  a:string;

}
