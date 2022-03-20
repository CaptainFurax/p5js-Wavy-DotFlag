p5.disableFriendlyErrors = true;
const D2R = Math.PI / 180;
//
function preload(){}
//
function setup()
{
  frameRate(25);
  //
  angleMode(DEGREES);
  ellipseMode(CENTER);
  //
  cvs = createCanvas(800,600).id( "mainCanvas" );
  //
  dim = [];
  cpt = 0;
  // B+J
  clr = [ [1,91,187,255], [254,213,1,255] ];
  //
  nbi = 48; nbj = nbi/1.5; rayon = 3; step = rayon * 3;
  alp = 0; fc = 0; rp = false; txt = "Hit the SpaceBar -> Rendu : ";
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
  background(0);
  for ( let i = 0; i < dim.length; i++ )
  {
    dim[i].c[3] = alp;
    dim[i].render();
  }
  fc = millis()/6;
  alp = round(192 - Math.cos(fc/8 * D2R ) * 64);
  //
  select( "#out" ).html( (rp) ? txt + "Point()":txt + "Circle()" );
}
function keyPressed()
{
  if ( keyIsDown(32) )
    rp = !rp;
  if ( keyIsDown(ENTER) )
    saveCanvas( "WavyFlag", "jpg");
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
    render()
    {
        let z = Math.cos( (this.v.y + this.v.x + fc) *D2R ) * 4.8;
        let x = this.v.x + Math.cos( (-this.v.y - this.v.x*1.6 + fc) * D2R ) * 21;
        let y = this.v.y + Math.sin( (-this.v.x - z*1.6 + fc ) * D2R ) * 9;
        push();
          strokeWeight( this.r )
          stroke( this.c );
          ( rp ) ? point( x, y ) : circle( x, y, 1 );
        pop();
    }
}

