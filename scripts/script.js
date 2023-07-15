const mainDiv = document.querySelector('.container');   //contains grid
mainDiv.style.cssText = "user-select: none";
let ui = 4;


const btnCont = document.querySelector('.btn-container'); //contains buttons

btnCont.style.cssText = "display:flex; justify-content: center; align-items: center;";


//creates boxes using flexboxs by making rows and the column inside them
function createBox(n)
{
    let s;
    if(typeof n != 'number' || n<=0 || n>=101 || n == "")
        s = 10;
    else
        s = n;
    console.log("n "+typeof n);
    console.log(s);

    for(let i=0; i<s;i++)
    {
        row = document.createElement('div');
        row.classList.add('row');
        mainDiv.appendChild(row);
        for(let j=0; j<s; j++)
        {
            column = document.createElement('div');
            column.classList.add('column');
          //  column.innerText = `${i} ${j}`
            row.appendChild(column);
        }
    }
}

/*function defaultBox()
{
    for(let i=0; i<10; i++)
    {
        let row = document.createElement('div');
        row.classList.add('row');
        mainDiv.appendChild(row);
        for(let j=0; j<10; j++)
        {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
}*/




const sliderContainer = document.createElement('div');   //containes silder and value
sliderContainer.style.cssText = 'align-items:center;';
sliderContainer.classList.add('slidercontainer');

const slider = document.createElement('input'); //slider itself
slider.type = 'range';
slider.min = '1';
slider.max = '100';
slider.value = '10';
slider.classList.add('slider');

sliderContainer.appendChild(slider);

const sliderValue = document.createElement('p');  //slider value
sliderValue.style.cssText = "";
sliderValue.innerText = 10;

createBox();
let exists = true;
let gridSize = 10;

const slidervalCont = document.createElement('div'); // contains slider value
slidervalCont.style.cssText = "font-size: 1.5rem; color:rgb(105, 62, 102)";
slidervalCont.appendChild(sliderValue);

sliderContainer.appendChild(slidervalCont);



btnCont.appendChild(sliderContainer);


slider.addEventListener("input", sliderval);


// takes slider value and changes the text and also called createbox using it to 
// change dimensions
function sliderval(){
    sliderValue.innerText = slider.value;
    mainDiv.innerHTML = '';
    createBox(parseInt(slider.value));
    draw();
}










//Black button
const blackBtn = document.createElement('input');  
const blackTxt = document.createElement('label');  

const blackDiv = document.createElement('div');
blackDiv.style.cssText = "display: inline-flex; flex-direction: column; gap: 0.3rem";


blackBtn.type = "radio";
blackBtn.classList.add('btn');
blackBtn.value = "black";

blackTxt.innerText = "Black";
blackTxt.classList.add('btn');


blackDiv.appendChild(blackBtn);
blackDiv.appendChild(blackTxt);

btnCont.appendChild(blackDiv);



//Raindbow button
const rainBtn = document.createElement('input');  
const rainTxt = document.createElement('label');  

const rainDiv = document.createElement('div');
rainDiv.style.cssText = "display: inline-flex; flex-direction: column; gap: 0.3rem";


rainBtn.type = "radio";
rainBtn.classList.add('btn');
rainBtn.value = "green";

rainTxt.innerHTML = "Rainbow";
rainTxt.classList.add('btn');

rainDiv.appendChild(rainBtn);
rainDiv.appendChild(rainTxt);

btnCont.appendChild(rainDiv);




//eraser button
const eraBtn = document.createElement('input');  
const eraTxt = document.createElement('label');  

const eraDiv = document.createElement('div');
eraDiv.style.cssText = "display: inline-flex; flex-direction: column; gap: 0.3rem";


eraBtn.type = "radio";
eraBtn.classList.add('btn');
eraBtn.value = "pink";

eraTxt.innerHTML = "Eraser";
eraTxt.classList.add('btn');

eraDiv.appendChild(eraBtn);
eraDiv.appendChild(eraTxt);

btnCont.appendChild(eraDiv);


//color button
const picBtn = document.createElement('input');  
const picTxt = document.createElement('label');  

const picDiv = document.createElement('div');
picDiv.style.cssText = "display: inline-flex; flex-direction: column; gap: 0.3rem";


picBtn.type = "color";
picBtn.classList.add('btn');
picBtn.value = "pink";

picTxt.innerHTML = "Select";
picTxt.classList.add('btn');
picTxt.classList.add('btn-r');


picDiv.style.cssText = "display: flex; gap:0.2rem; justify-content:center;";

picDiv.appendChild(picBtn);
picDiv.appendChild(picTxt);

btnCont.appendChild(picDiv);























/*const rainbow = document.createElement('button');
rainbow.innerText = "Rainbow";
rainbow.classList.add('btn');
btnCont.appendChild(rainbow);

const eraser = document.createElement('button');
eraser.innerText = "Eraser";
eraser.classList.add('btn');
btnCont.appendChild(eraser);*/




/*function color()
{
    let color = 'pink';
    blackBtn.addEventListener('select', function() {
        color="black";
        console.log('black');
    });
    
    eraser.addEventListener('click', function() {
        color="pink";
        console.log('oinik');
    });

    rainbow.addEventListener('click', function() {
        color="green";
        console.log('green');
    });

    return color;
} */





let color = 'yellow';
/*
function getColor(){
    let btns = document.querySelectorAll('input');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            for(const btn of btns){
                if(btn.checked == true && btn.value == "black"){
                    rainBtn.checked = false;
                    eraBtn.checked = false;
                }
                if(btn.checked == true && btn.value == "green"){
                    blackBtn.checked = false;
                    eraBtn.checked = false;
                }
                if(btn.checked == true && btn.value == "pink"){
                    blackBtn.checked = false;
                    rainBtn.checked = false;
                }
            }
        })
    })
}*/

function randomColor()
{
    let rcolor = '';
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    rcolor = `rgb(${r},${g},${b})`;
    return rcolor;
}




//enabling and disabliling buttons and changing colors
let brushColor = 'pink';                                   //color
blackBtn.addEventListener('click', () => {                 
    
    rainBtn.checked = false;
    blackBtn.checked = true;
        
    eraBtn.checked = false;
    brushColor = 'black';
})



rainBtn.addEventListener('click', () => {
    blackBtn.checked = false;
    rainBtn.checked = true;
    eraBtn.checked = false; 
    mainDiv.addEventListener('mouseover', () => {
        if(rainBtn.checked)
            brushColor = randomColor();
    })
})





eraBtn.addEventListener('click', () => {
    rainBtn.checked = false;
    blackBtn.checked = false;
    
    eraBtn.checked = true;
    brushColor = 'pink';
})

picBtn.addEventListener('click', () => {
    blackBtn.checked = false;
    rainBtn.checked = false;
    eraBtn.checked = false;
    picTxt.addEventListener('click', () => {
        brushColor = picBtn.value;
    })
})





mainDiv.addEventListener("mouseover", draw(column));


//gets each column in form of list using classname and colors then using color function
function draw(){
    let isDrawing = false;

    function startDrawing(){isDrawing = true};
    function stopDrawing(){isDrawing = false};
    
    //click and drag for color
    let columns = mainDiv.querySelectorAll('.column');
    columns.forEach(box => {
        box.addEventListener('mousedown', () => {               //selects each box
            isDrawing = true;                                   //sets it to true everytime mouseisdown 
            if(isDrawing)                                       // checks if true
                box.style.backgroundColor = brushColor;         // then'mousedown' allows to clik n paint
        });       
        box.addEventListener('mouseover', () => {               // is the mouse is still down then
            if(isDrawing)                                       // this is still true
                box.style.backgroundColor = brushColor;         // hence 'mouseover allows to click n paint' rather than hover n paint
        });
    });

    document.addEventListener('mouseup', stopDrawing);          //very imp when mouseup isDrawing is set to false so 'mouseover' alone dosent cause the to paint in canvas 
}
















