import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Registro} from "./model/registro";
import {ApiService} from "../shared/api.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registros:Registro[] = [];
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getRegister();
  }
  public getRegister(){
    let url = "http://localhost:8080/api/usuario/getRegister";
    this.apiService.getRegister().subscribe(
      res => {
          this.registros = res;

      },
      err => {
        alert("An error has ocurred ")
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
