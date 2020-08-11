import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Registro} from "../register/model/registro";
import {Observable} from "rxjs";
import {Ticket} from "../register/register.component";
import {Rutas} from "../routes/model/rutas";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:8080/api/usuario";
  private getAllRegister = `${this.baseUrl}\\getRegister`;
  private getRoutes = `${this.baseUrl}\\getGraph`;
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
}
