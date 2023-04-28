import { Component, OnInit } from '@angular/core';

import config from "@arcgis/core/config";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import RouteParameters from "@arcgis/core/rest/support/RouteParameters";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";

import Map from "@arcgis/core/Map";
import SceneView from '@arcgis/core/views/SceneView';

import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";


@Component({
  selector: 'app-paintperfilruta',
  templateUrl: './paintperfilruta.component.html',
  styleUrls: ['./paintperfilruta.component.css']
})
export class PaintperfilrutaComponent implements OnInit {

  routeGeo:any; 

  constructor() { }

  ngOnInit(): void {

    // Apuntamos a un servicio de rutas básico 
    const routeUrl =
    "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";
    
    // Capa donde se van a almacenar el resultado de la ruta y los puntos inicio y fin
    const routeLayer = new GraphicsLayer();
    
    // api key de mi cuenta de desarrolador
    const apiKey = "AAPK59956559bc0d47e49dbbc176a9bb7647VqsZSYS9n11Qa-XVwfTItdMrMXAWgLt27tYSbA7fKG_O9f_U9B7bHOtopfqPcAxk";
    config.apiKey = "AAPK59956559bc0d47e49dbbc176a9bb7647VqsZSYS9n11Qa-XVwfTItdMrMXAWgLt27tYSbA7fKG_O9f_U9B7bHOtopfqPcAxk";    
    
    // Definimos los parametros de la ruta
    const routeParams = new RouteParameters({
      apiKey: apiKey,
      stops: new FeatureSet()
    }); 


    const map = new Map({
      basemap: "streets-night-vector",
      layers: [routeLayer],
      ground: "world-elevation"
    });    
    const view = new SceneView({
      map: map,
      container: "viewDiv",
      center: [-3.74922, 40.463667],
      zoom: 7
    }); 


    //Creamos el BasemapToggle
    const basemapToggle = new BasemapToggle({
      view: view,  // The view that provides access to the map's "streets-vector" basemap
      nextBasemap: "arcgis-streets-relief"  // Allows for toggling to the "hybrid" basemap
    });
    // Lo añadimos a la vista de mapa
    view.ui.add(basemapToggle, "bottom-right");  
    
    
    // Definimos la simbología del punto inicial y final
    const stopSymbol = {
      type: "simple-marker", 
      style: "cross",
      size: 15,
      outline: {
        width: 4
      }
    };

    // Definimos la simbología de la ruta
    const routeSymbol = {
      type: "simple-line", 
      color: [46, 204, 13, 0.5],
      width: 5
    };

   
    
    

  }

}
