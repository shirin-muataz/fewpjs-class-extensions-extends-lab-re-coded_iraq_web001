// Your code here

class Polygon {
    constructor (intArr){
        this.intArr=intArr;
    } 
    get countSides()
    { return this.intArr.length;}
    
    get perimeter()
    {
      return (this.intArr.reduce((x,y)=>{ return x+y;}))
    }
  
}

class Triangle extends Polygon {
get isValid (){
  
}
}