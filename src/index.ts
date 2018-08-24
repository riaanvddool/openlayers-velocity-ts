import VelocityLayer from "./velocityLayer"
import CanvasBound from "./canvasBound";
import MapBound from "./mapBound";
import Windy from "./windy";

(<any>window).VelocityLayer = VelocityLayer;
(<any>window).CanvasBound = CanvasBound;
(<any>window).MapBound = MapBound;
(<any>window).Windy = Windy;

import TestLayer from "./testlayer"
(<any>window).TestLayer = TestLayer;

import Map from "ol/Map"
import View from "ol/View"
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';
(<any>window).Map = Map;
(<any>window).View = View;
(<any>window).TileLayer = TileLayer;
(<any>window).OSM = OSM;
(<any>window).Stamen = Stamen;

declare function require(name:string):any;
const proj = (<any>require('ol/proj')).default;
(<any>window).proj = proj;

