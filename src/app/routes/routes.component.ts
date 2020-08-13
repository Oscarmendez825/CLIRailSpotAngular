import { Component, OnInit } from '@angular/core';
import * as dracula from 'graphdracula';
import {Rutas} from "./model/rutas";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
/***
 * Routes class
 * @author: Oscar Méndez
 * @author: Keyner Gómez
 * @author: Hansel Hampton
 */
export class RoutesComponent implements OnInit {
  rutas:Rutas[]=[];
  graph: dracula.Graph;
  renderer: dracula.Renderer.Raphael;
  layout: dracula.Layout.Spring;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    //this.getRoutes();
    const Graph = dracula.Graph;
    const Renderer = dracula.Renderer.Raphael;
    const Layout = dracula.Layout.Spring;
    this.graph = new Graph();
    //this.agregarNodo();
    this.graph.addNode("Paraiso");
    this.graph.addNode("Cartago");
    this.graph.addNode("Tres Rios");
    this.graph.addNode("Sabanilla");
    this.graph.addNode("Curridabat");
    this.graph.addNode("Zapote");
    this.graph.addNode("San Jose");
    this.graph.addNode("San Pedro");
    this.graph.addNode("Guadalupe");
    this.graph.addNode("Moravia");
    this.graph.addNode("Tibas");
    this.graph.addNode("Santo Domingo");
    this.graph.addNode("Heredia");
    this.addConnection("Paraiso","Cartago",6);
    this.addConnection("Cartago","Tres Rios",11);
    this.addConnection("Tres Rios","Curridabat",7);
    this.addConnection("Tres Rios","Zapote",9);
    this.addConnection("Tres Rios","Sabanilla",10);
    this.addConnection("Sabanilla","San Jose",6);
    this.addConnection("Sabanilla","San Pedro",3);
    this.addConnection("Sabanilla","Guadalupe",3);
    this.addConnection("Curridabat","San Pedro",4);
    this.addConnection("Santo Domingo","Heredia",5);
    this.addConnection("San Jose","San Pedro",5);
    this.addConnection("San Jose","Tibas",5);
    this.addConnection("San Pedro","Guadalupe",3);
    this.addConnection("Guadalupe","Moravia",22);
    this.addConnection("Moravia","Tibas",12);
    this.addConnection("Tibas","Santo Domingo",3);


    this.renderer = new Renderer('#grafo',this.graph,1000,1000);
    this.layout = new Layout(this.graph);
    this.renderer.draw();

  }

  /***
   * method that request all te train routes
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

  /***
   * method that add nodes into the graph
   */
  agregarNodo(){
    for (var i = 0; i < this.rutas.length;i++){
      var name = this.rutas[i].name;
      this.graph.addNode(name);
    }
    for(var j = 0; j < this.rutas.length;j++){
      var name = this.rutas[j].name;
      var a = this.rutas[j].a;
      var peso = parseInt(this.rutas[j].peso);
      this.addConnection(name,a,peso);
    }

  }

  /***
   * method that add the connections into the graph
   * @param from
   * @param to
   * @param weight
   */
  addConnection(from, to, weight){
    const edgeData = {
      "weight": weight,
      "label": weight,
      "stoke": "#56f",
      "front-size":"20px"
    }
    this.graph.addEdge(from,to,edgeData);
  }
}

/***
 * Routes interface
 */
export interface Routes {
  name:string;
  a:string;
  peso:string;

}
