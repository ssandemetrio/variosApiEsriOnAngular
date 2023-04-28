import { Component, OnInit } from '@angular/core';

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

import Map from "@arcgis/core/Map";
import SceneView from '@arcgis/core/views/SceneView';
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

@Component({
  selector: 'app-servicios2',
  templateUrl: './servicios2.component.html',
  styleUrls: ['./servicios2.component.css']
})
export class Servicios2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const map = new Map({
      basemap: "streets-night-vector",
      //layers: [routeLayer],
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

    // const layer = new FeatureLayer({
    //   // URL to the service
    //   url: "https://services9.arcgis.com/05hEScoMhVGODhp2/arcgis/rest/services/GovernmentServicesMadrid/FeatureServer"
    // });



  }

}
