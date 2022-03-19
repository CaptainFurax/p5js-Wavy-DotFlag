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
  ellipseMode(CENTER);
  //
  cvs = createCanvas(800,600);
  cvs.parent( "#myCvs" );
  //
  dim = [];
  // B+J
  clr = [ [1,91,187,255], [254,213,1,255] ];
  //
  nbi = 54; nbj = nbi/1.5; rayon = 3; step = rayon * 3; alp = 0;
  flagSize = createVector((nbi-1)*step, (nbj-1)*step);
  // #1
  for ( let j = 0; j < nbj; j++ )
  {
    for( let i = 0; i < nbi; i++ )
    {
     v = createVector( (width-flagSize.x)/2+(i*step), (height-flagSize.y)/2 + j*step, 0 );
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
  alp = Math.min( 255, alp += 1.6 );
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
        let fc = millis()/7;
        let z = cos( (this.v.y + this.v.x + fc) ) * 4.8;
        let x = this.v.x + cos( -this.v.y - this.v.x*1.6 + fc ) * 21;
        let y = this.v.y + sin( -this.v.x - z*1.6 + fc ) * 9;
        fill( this.c ); 
        circle( x, y, this.r )
    }
}

