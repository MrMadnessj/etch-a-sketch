const mainDiv = document.querySelector('.container');
const confirm = document.querySelector('.confirm-btn');
let ui = 4;

const btnCont = document.querySelector('.btn-container');
btnCont.style.cssText = "display:flex; justify-content: center; align-items: center;";

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
        let row = document.createElement('div');
        row.classList.add('row');
        mainDiv.appendChild(row);
        for(let j=0; j<s; j++)
        {
            let column = document.createElement('div');
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




const sliderContainer = document.createElement('div');
sliderContainer.style.cssText = 'align-items:center;';
sliderContainer.classList.add('slidercontainer');

const slider = document.createElement('input');
slider.type = 'range';
slider.min = '1';
slider.max = '100';
slider.value = '10';
slider.classList.add('slider');

sliderContainer.appendChild(slider);

const sliderValue = document.createElement('p');
sliderValue.style.cssText = "";
sliderValue.innerText = 10;

createBox();
let exists = true;
let gridSize = 10;

const slidervalCont = document.createElement('div');
slidervalCont.style.cssText = "font-size: 1.5rem; color:rgb(105, 62, 102)";
slidervalCont.appendChild(sliderValue);

sliderContainer.appendChild(slidervalCont);



btnCont.appendChild(sliderContainer);


slider.addEventListener("input", sliderval);

function sliderval(){
    sliderValue.innerText = slider.value;
    mainDiv.innerHTML = '';
    createBox(parseInt(slider.value));
}













