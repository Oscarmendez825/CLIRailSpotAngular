import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.cargarGraph();
  }
  cargarGraph():void{
    let url = "http://localhost:8080/api/usuario/cargarGraph";
    this.http.post(url,null).subscribe(
      res =>{

      },
      error => {
        alert("An error has occurred while sending data");
      }
    );
  }
}
