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

const blackBtn = document.createElement('button');
blackBtn.innerText = 'Black';
blackBtn.classList.add('btn');
btnCont.appendChild(blackBtn);

const rainbow = document.createElement('button');
rainbow.innerText = "Rainbow";
rainbow.classList.add('btn');
btnCont.appendChild(rainbow);












function getColor(){
    let btns = document.querySelectorAll('btn');

    btns.forEach(btn => {
        btn.addEventListener('click', )
    })
}



mainDiv.addEventListener("mousehover", draw(column));




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
                box.style.backgroundColor = ;              // then'mousedown' allows to clik n paint
        });       
        box.addEventListener('mouseover', () => {               // is the mouse is still down then
            if(isDrawing)                                       // this is still true
                box.style.backgroundColor = ;              // hence 'mouseover allows to click n paint' rather than hover n paint
        });
    });

    document.addEventListener('mouseup', stopDrawing);          //very imp when mouseup isDrawing is set to false so 'mouseover' alone dosent cause the to paint in canvas 
}















