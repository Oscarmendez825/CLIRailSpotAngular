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
export class ApiService {
  private baseUrl = "http://localhost:8080/api/usuario";
  private getAllRegister = `${this.baseUrl}\\getRegister`;
  private getRoutes = `${this.baseUrl}\\getGraph`;
  private getPrecioTotal = `${this.baseUrl}\\getPrecio`;
  constructor(private http: HttpClient) {

  }

  getRegister():Observable<Registro[]>{
    return this.http.get<Registro[]>(this.getAllRegister);

  }
  postRegister(register:Ticket):Observable<any>{
    return null;
  }
  getAllRoutes():Observable<Rutas[]>{
    return this.http.get<Rutas[]>(this.getRoutes);

  }
  getTotal():Observable<Confirmar>{
    return this.http.get<Confirmar>(this.getPrecioTotal);

  }
}
