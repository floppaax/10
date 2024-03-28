var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
var score = 0;
var gameState = "serve";

paddle=createSprite(200,390,100,20);
paddle.shapeColor="yellow";
ball=createSprite(200,200,20,20);
ball.shapeColor="green";
createEdgeSprites();
function draw() {
  background("black");
  
  textSize(20);
  stroke("red");
  text("Puntuacion: "+score,270,20);

  
    
    if(gameState=="serve"){
      textSize(30);
    text("     Block Destroyer",50,180);
    textSize(30);
    text("Press ENTER to play",50,250);
  
    if(keyDown("enter")){
    ball.velocityX = -5;
    ball.velocityY = 5;
    gameState="play";
     }
    }
    
    if(gameState=="play"){
      
      paddle.x = World.mouseX;
      
      if(ball.isTouching(bottomEdge)|| score==16){
        
        gameState="end";
      }
    }
    if(gameState=="end"){
    
      
    }
    
    
    
    ball.bounceOff(rightEdge);
    ball.bounceOff(leftEdge);
    ball.bounceOff(topEdge);

    
    
    
    if(ball.bounceOff(paddle)){
    
      playSound("assets/category_pop/tech_bubble_pop_notification.mp3", false);
      
    }
    
    if(ball.bounceOff(box1)){
      score = score+1;
      box1.destroy()
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      
    }
      if(ball.bounceOff(box2)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box2.destroy()
    }
      if(ball.bounceOff(box3)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box3.destroy()
    }
      if(ball.bounceOff(box4)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box4.destroy()
    }
      if(ball.bounceOff(box5)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box5.destroy()
    }
      if(ball.bounceOff(box6)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box6.destroy()
    }
      if(ball.bounceOff(box7)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box7.destroy()
    }
      if(ball.bounceOff(box8)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box8.destroy()
    }
      if(ball.bounceOff(box9)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box9.destroy()
    }
      if(ball.bounceOff(box10)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box10.destroy()
    }
      if(ball.bounceOff(box11)){
      score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box11.destroy()
    }
      if(ball.bounceOff(box12)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box12.destroy()
    }
      if(ball.bounceOff(box13)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box13.destroy()
    }
      if(ball.bounceOff(box14)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box14.destroy()
    }
      if(ball.bounceOff(box15)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box15.destroy()
    }
      if(ball.bounceOff(box16)){
        score = score+1;
      playSound("assets/category_pop/puzzle_game_ui_bubble_03.mp3", false);
      box16.destroy()
    }
    
    
  

  
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
