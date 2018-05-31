export default class MapBound {
    public south: number;
    public north: number;
    public east: number;
    public west: number;

    constructor (north: number, east: number, south: number, west: number) {
        this.north = north * Math.PI / 180;
        this.east = east * Math.PI / 180;
        this.south = south * Math.PI / 180;
        this.west = west * Math.PI / 180;
    }

    get width () : number {
        // return (720 + this.east - this.west) % 360;
        return ((720 + this.east * 180 / Math.PI - this.west * 180 / Math.PI) % 360) * Math.PI / 180;
    }

    get height () : number {
        // return (360 + this.north - this.south) % 180;
        return ((360 + this.north * 180 / Math.PI - this.south * 180 / Math.PI) % 180) * Math.PI / 180;
    }

    

}