import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
/***
 */
export class AddRouteComponent implements OnInit {
  newRoute:Ruta={
  name:'',
  a:'',
  peso:''
  }
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  /***
   * Method send Ruta
   * Enviar ruta
   * @author: Oscar Méndez
   * @author: Keyner Gómez
   * @author: Hansel Hampton
   */
  sendRuta():void{
    let url = "http://localhost:8080/api/usuario/addRoute";
    this.http.post(url,this.newRoute).subscribe(
      res =>{
        location.reload();

      },
      error => {
        alert("An error has occurred while sending data");
      }
    );
  }
}

/***
 * Interface Ruta
 */
export interface Ruta{
  name:string;
  a:string;
  peso:string;
}
