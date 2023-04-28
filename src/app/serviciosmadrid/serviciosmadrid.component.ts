import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
import Legend from "@arcgis/core/widgets/Legend.js";

import Directions from "@arcgis/core/widgets/Directions.js";
import RouteLayer from "@arcgis/core/layers/RouteLayer.js";
import Point from "@arcgis/core/geometry/Point.js";

import Map from "@arcgis/core/Map";
import SceneView from '@arcgis/core/views/SceneView';
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

@Component({
  selector: 'app-serviciosmadrid',
  templateUrl: './serviciosmadrid.component.html',
  styleUrls: ['./serviciosmadrid.component.css']
})
export class ServiciosmadridComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {

    const getDirectionsAction = {
      title: "Get Directions",
      id: "get-directions",
      //image: "Measure_Distance16.png"
    }; 

    const routeLayer = new RouteLayer();

    const templateFarmacias = {
      title: "Farmacia",
      actions:[getDirectionsAction],
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "DIRECCION",
              label: "Dirección",
            },
            {
              fieldName: "MUNICIPIO",
              label: "Municipio",
            }]
        }]    
    };

    const layerFarmacias = new FeatureLayer({
      url: "https://services9.arcgis.com/05hEScoMhVGODhp2/arcgis/rest/services/GovernmentServicesMadrid/FeatureServer/0", 
      legendEnabled: true, 
      popupEnabled: true,
      //@ts-ignore
      popupTemplate: templateFarmacias,
      title: "Farmacias",
      minScale: 6000      
    });

    const templateParkings = {
      title: "Parking",
      actions:[getDirectionsAction],
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "DIRECCION",
              label: "Dirección",
            },
            {
              fieldName: "NOMBRE",
              label: "Nombre",
            }]
        }]    
    };

    const layerParkings = new FeatureLayer({
      url: "https://services9.arcgis.com/05hEScoMhVGODhp2/arcgis/rest/services/GovernmentServicesMadrid/FeatureServer/1", 
      legendEnabled: true, 
      popupEnabled: true,
      //@ts-ignore
      popupTemplate: templateParkings,
      title: "Parkings",
      minScale: 6000        
    });  
   
    const templateCercanias = {
      title: "Cercanias: {ESTACION}",
      actions:[getDirectionsAction],
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "LINEA",
              label: "Lineas",
            },
            {
              fieldName: "MUNICIPIO",
              label: "Municipio",
            },
            {
              fieldName: "CONEXION",
              label: "Conexiones",
            }
          ]
        }]   
    };

    const layerCercanias = new FeatureLayer({
      url: "https://services9.arcgis.com/05hEScoMhVGODhp2/arcgis/rest/services/GovernmentServicesMadrid/FeatureServer/3", 
      legendEnabled: true, 
      popupEnabled: true,
      //@ts-ignore
      popupTemplate: templateCercanias,
      title: "Estaciones de Cercanías",
      minScale: 90000        
    }); 

    const templateAeropuertos = {
      title: "{BUSCA}",
      actions:[getDirectionsAction],
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "DIRECCIÓN",
              label: "Dirección",
            },
            {
              fieldName: "MUNICIPIO",
              label: "Municipio",
            }]
        }]    
    };

    const layerAeropuertos = new FeatureLayer({
      url: "https://services9.arcgis.com/05hEScoMhVGODhp2/arcgis/rest/services/GovernmentServicesMadrid/FeatureServer/4", 
      legendEnabled: true, 
      popupEnabled: true,
      //@ts-ignore
      popupTemplate: templateAeropuertos,
      title: "Aeropuertos",
      //minScale: 6000        
    });     

    const templateMuseos = {
      title: "{NOMBRE}",
      actions:[getDirectionsAction],
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "CALLE",
              label: "Dirección",
            },
            {
              fieldName: "WEB",
              label: "Web",
            }]
        }]    
    };

    const layerMuseos = new FeatureLayer({
      url: "https://services9.arcgis.com/05hEScoMhVGODhp2/arcgis/rest/services/GovernmentServicesMadrid/FeatureServer/6", 
      legendEnabled: true, 
      popupEnabled: true,
      //@ts-ignore
      popupTemplate: templateMuseos,
      title: "Museos",
      minScale: 30000        
    });  
    
    // Añadimos el api-key para que no nos pida logear
    const apiKey = "AAPK59956559bc0d47e49dbbc176a9bb7647VqsZSYS9n11Qa-XVwfTItdMrMXAWgLt27tYSbA7fKG_O9f_U9B7bHOtopfqPcAxk";   

    const map = new Map({
      basemap: "streets-night-vector",
      layers: [layerFarmacias,layerParkings, layerMuseos, layerCercanias, layerAeropuertos, routeLayer],
      //ground: "world-elevation"
    });    
    const view = new SceneView({
      map: map,
      container: "viewDiv",
      center: [-3.74922, 40.463667],
      zoom: 7
    }); 

    // Definimos la simbología de la ruta
    const routeSymbol = {
      type: "simple-line", 
      color: [46, 204, 13, 0.5],
      width: 5
    };

    // new RouteLayer must be added to Directions widget
    const directionsWidget = new Directions({
      view: view,
      layer: routeLayer,
      apiKey: apiKey,
      visibleElements: {
        saveAsButton: false,
        saveButton: false
      }
      
    });

    

    //Creamos la lista de capas y la añadimos a la vista
    let layerList = new LayerList({
      view: view
    });
    view.ui.add(layerList, "bottom-left");

    // //Creamos la leyenda y la añadimos a la vista
    // let legend = new Legend({
    //   view: view
    // });    
    // view.ui.add(legend, "bottom-left");  

    //Creamos el BasemapToggle y lo añadimos a la vista
    const basemapToggle = new BasemapToggle({
      view: view,  
      nextBasemap: "satellite"  
    });
    view.ui.add(basemapToggle, "bottom-right"); 

  // Execute each time the "Measure Length" is clicked
  async function getDirections() {
    const latitude = view.popup.location.latitude;
    console.log(view.popup)
    console.log(latitude);
    const longitude = view.popup.location.longitude;
    console.log(longitude);
    const nombre = view.popup.title
    await directionsWidget.when();
    directionsWidget.layer.stops.getItemAt(1).name = nombre;
    directionsWidget.layer.stops.getItemAt(1).geometry = new Point({ x: longitude, y: latitude });
    view.ui.add(directionsWidget, "top-right");
  }

  // Event handler that fires each time an action is clicked.
  view.popup.on("trigger-action", (event:any) => {
    // Execute the measureThis() function if the measure-this action is clicked
    if (event.action.id === "get-directions") {
      getDirections();
    }
  });
}

ngOnChanges(changes: SimpleChanges): void {
  console.log("cambios");
}



}
