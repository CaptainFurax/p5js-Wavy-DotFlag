//vp => View Position
let vp; let sf = []; let ang = 0;
//
function preload(){}
//
function setup()
{
  //rectMode(CENTER);
  angleMode(DEGREES);
  frameRate(30);
  //
  let cvs = createCanvas(800, 600 );
  cvs.parent("#myCvs");
  setVP(0, 0);
  //
}
//
function draw()
{ 
  clear();
  background(0);
  // Starfield
  for ( let i = 0; i < 1; i++ )
  {
    //sf.push( new Star( createVector(random((width/2)-25, (width/2)+25), random((height/2)-25, (height/2)+25)) ) );
    sf.push( new Star( createVector(random(width), random(height))) );
  }
  // /!\ Vortex /!\
  if ( mouseIsPressed )
  {
    rotX = cos( frameCount ) * 300;
    rotY = sin( frameCount ) * 300;
    setVP(rotX, 0);
    for ( let j = 0; j < 14; j++ )
    {
      let x, y, angle;
      angle = random( 0,359 );
      x = width / 2 + cos( angle ) * 20;
      y = height /2 + sin( angle ) * 20;
      sf.push( new Star( createVector(x,y), true ) );
    }
  } else 
  {
    frameRate(30);
    setVP( 0,0 );
  }
    // Rendering & Compute
    for (  let i in sf )
    {
      if ( sf[i].finalFrontier() )
      {
        sf.splice( i,1 );
      } else 
      {
        sf[i].update();
        sf[i].render();
      }
    }
    select("#out").html( ang );
}
//
function setVP( x, y )
{
  vp = createVector( map(x, 0, width, 0, 15), map(y, 0, height, 0, 15) );
}