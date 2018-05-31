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

import Map from "ol/map"
import View from "ol/view"
import TileLayer from 'ol/layer/tile';
import OSM from 'ol/source/osm';
import Stamen from 'ol/source/stamen';
(<any>window).Map = Map;
(<any>window).View = View;
(<any>window).TileLayer = TileLayer;
(<any>window).OSM = OSM;
(<any>window).Stamen = Stamen;

declare function require(name:string):any;
const proj = (<any>require('ol/proj')).default;
(<any>window).proj = proj;

