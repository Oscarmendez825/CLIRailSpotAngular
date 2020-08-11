import { Component, OnInit } from '@angular/core';
import * as dracula from 'graphdracula';
import {Rutas} from "./model/rutas";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  rutas:Rutas[]=[];
  graph: dracula.Graph;
  renderer: dracula.Renderer.Raphael;
  layout: dracula.Layout.Spring;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getRoutes();
    const Graph = dracula.Graph;
    const Renderer = dracula.Renderer.Raphael;
    const Layout = dracula.Layout.Spring;
    this.graph = new Graph();
    this.renderer = new Renderer('#paper',this.graph,1200,600);
    this.layout = new Layout();
    this.agregarNodo();
  }
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
  agregarNodo(){
    for (var i = 0; i < this.rutas.length;i++){
      this.graph.addNode(this.rutas[i].name);
    }
    for(var j = 0; j < this.rutas.length;j++){
      this.addConnection(this.rutas[j].name,this.rutas[j].a,parseInt(this.rutas[j].peso));
    }
    this.renderer.draw();
  }
  addConnection(from, to, weight){
    const edgeData ={
      "weight" : weight,
      "label": weight,
      "stoke": "#56f",
      "front-size":"14px"
    }
    this.graph.addEdge(from,to,edgeData);
  }
}
export interface Routes {
  name:string;
  a:string;
  peso:string;

}
