import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-delete-route',
  templateUrl: './delete-route.component.html',
  styleUrls: ['./delete-route.component.css']
})
/***
 * DeleteRoute class
 * @author: Oscar Méndez
 * @author: Keyner Gómez
 * @author: Hansel Hampton
 */
export class DeleteRouteComponent implements OnInit {
  public borrarRuta:string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  /***
   * method that send the information to delete a vertex into the server
   */
  borrar():void{
    let url = "http://localhost:8080/api/usuario/delete";
    this.http.post(url,this.borrar).subscribe(
      res =>{
        location.reload();

      },
      error => {
        alert("An error has occurred while sending data");
      }
    );
  }
}
