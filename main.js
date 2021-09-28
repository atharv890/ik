canvas=new fabric.Canvas("myCanvas");
 block_y=10;
 block_x=10;
image_width = 250;
image_height = 400;
var block= "";

function new_image(getimage)
{
	fabric.Image.fromURL(getimage,function (Img){
block=Img;
block.scaleToWidth(image_width);
block.scaleToHeight(image_height);
block.set({
top:block_y,
left:block_x
});
canvas.add(block);
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
	new_image("rr.jpg");	
	console.log("red");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png");	
	console.log("green");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png");	
	console.log("red");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png");	
		console.log("pink");
	}
	if(keyPressed == '66')
	{
		block_x = 600;
	new_image("br.png");	
	console.log("blue");
	}
	
}

