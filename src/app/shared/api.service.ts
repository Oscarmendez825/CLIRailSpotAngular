import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Registro} from "../register/model/registro";
import {Observable} from "rxjs";
import {Ticket} from "../register/register.component";
import {Rutas} from "../routes/model/rutas";
import {Confirmar} from "../confirmar/model/confirmar";

@Injectable({
  providedIn: 'root'
})
/***
 * ApiService class
 * @author: Oscar Méndez
 * @author: Keyner Gómez
 * @author: Hansel Hampton
 */
export class ApiService {
  private baseUrl = "http://localhost:8080/api/usuario";
  private getAllRegister = `${this.baseUrl}\\getRegister`;
  private getRoutes = `${this.baseUrl}\\getGraph`;
  private getPrecioTotal = `${this.baseUrl}\\getPrecio`;
  constructor(private http: HttpClient) {

  }

  /***
   * get the register of the sell tickets
   */
  getRegister():Observable<Registro[]>{
    return this.http.get<Registro[]>(this.getAllRegister);

  }

  /***
   * get all the train routes
   */
  getAllRoutes():Observable<Rutas[]>{
    return this.http.get<Rutas[]>(this.getRoutes);

  }

  /***
   * get the price
   */
  getTotal():Observable<Confirmar>{
    return this.http.get<Confirmar>(this.getPrecioTotal);

  }
}
