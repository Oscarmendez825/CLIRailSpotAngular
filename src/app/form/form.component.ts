import { Component, OnInit,Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ApiService} from "../shared/api.service";
import {Rutas} from "../routes/model/rutas";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
/***
 * Form class
 * @author: Oscar Méndez
 * @author: Keyner Gómez
 * @author: Hansel Hampton
 */
export class FormComponent implements OnInit {
  rutas:Rutas[]=[];
  public tiquete:Ticket = {
    name:'',
    apellido:'',
    email:'',
    cantidad:'',
    de:'',
    a:''
  };

  constructor(private http: HttpClient,private router: Router,private apiService:ApiService) { }

  ngOnInit(): void {
    this.getRoutes();
  }

  /***
   * method that sends the information required for buy a ticket
   */
  sendForm():void{
    let url = "http://localhost:8080/api/usuario/ticket";
    this.http.post(url,this.tiquete).subscribe(
      res =>{
        this.router.navigate(['/confirmar']);
      },
      error => {
        alert("An error has occurred while sending data");
      }
    );
  }

  /***
   * method that request the routes of the train
   */
  public getRoutes(){
    let url = "http://localhost:8080/api/usuario/getGraph";
    this.apiService.getAllRoutes().subscribe(
      res => {
        this.rutas = res;

      },
      err => {
        alert("An error has ocurred ")
      }

    );
  }
}

/***
 * ticket interface
 */
export interface Ticket {
  name:string;
  apellido:string;
  email:string;
  cantidad:string;
  de:string;
  a:string;

}
