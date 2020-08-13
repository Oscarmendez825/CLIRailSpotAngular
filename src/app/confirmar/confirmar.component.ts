import { Component, OnInit } from '@angular/core';
import {Confirmar} from "./model/confirmar";
import {ApiService} from "../shared/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
/***
 * Confirmar class
 * @author: Oscar Méndez
 * @author: Keyner Gómez
 * @author: Hansel Hampton
 */
export class ConfirmarComponent implements OnInit {
  confirmar:Confirmar;
  constructor(private apiService:ApiService,private router: Router) { }

  ngOnInit(): void {
    this.getPrecio();
  }

  /***
   * method that request the price
   */
  public getPrecio(){
    let url = "http://localhost:8080/api/usuario/getPrecio";
    this.apiService.getTotal().subscribe(
      res => {
        this.confirmar = res;

      },
      err => {
        alert("An error has ocurred ")
      }

    );
  }

}
