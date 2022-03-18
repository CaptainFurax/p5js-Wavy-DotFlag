p5.disableFriendlyErrors = true;
const D2R = Math.PI / 180;
//
function preload(){}
//
function setup()
{
  frameRate(30);
  //
  angleMode(DEGREES);
  //
  cvs = createCanvas(800,600,WEBGL);
  cvs.parent( "#myCvs" );
  //
  dim = [];
  // BBR
  clr = [ [1,91,187,255], [254,213,1,255] ];
  //
  nbi = 54; nbj = nbi/1.5; rayon = 2; step = rayon * 4; alp = 0;
  tlc = createVector( nbi * step/2-rayon, nbj * step/2-rayon ); //tlc => Top Left Corner as starting point.
  // #1
  for ( let j = 0; j < nbj; j++ )
  {
    for( let i = 0; i < nbi; i++ )
    {
     v = createVector( i*step-tlc.x, j*step-tlc.y, 0 );
     dim.push( new Dot(rayon, v, clr[ floor(j/(nbj/clr.length)) ] ) );
    }
  }
}
//
function draw()
{ 
  clear();
  background( 0 );
  for ( let i = 0; i < dim.length; i++ )
  {
    dim[i].c[3] = alp;
    dim[i].render();
  }
  alp = Math.min(255, alp += 1.4)
  //
  select( "#out" ).html( floor(alp) + " - " + dim.length );
}
//
class Dot
{
    constructor ( r, v, c )
    {
        this.r = r;
        this.v = v;
        this.c = c;
    }
    //
    render( )
    {
        let fc = millis()/6;
        let z = this.v.z + Math.cos( (-this.v.y - this.v.x*1.6 + fc) * D2R ) * 48;
        let y = this.v.y + Math.sin( (-this.v.x*1.6 - this.v.z + fc) * D2R ) * 4.8;
        stroke( this.c ); 
        strokeWeight( this.r );
        point( this.v.x, y, z );
    }
}

