const mainDiv = document.querySelector('.container');
const confirm = document.querySelector('.confirm-btn');
let ui = 4;

const btnCont = document.querySelector('.btn-container');

function createBox(n)
{
    let s;
    if(typeof n != 'number' || n<=0 || n>=101)
        s = 10;
    else
        s = n;
    console.log(n);
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

createBox();


const sliderContainer = document.createElement('div');
sliderContainer.style.cssText = "display: flex; gap:1rem; align-items:center;";
sliderContainer.classList.add('slidercontainer');

const slider = document.createElement('input');
slider.type = 'range';
slider.min = '1';
slider.max = '100';
slider.value = '10';
slider.classList.add('slider');

sliderContainer.appendChild(slider);
btnCont.appendChild(sliderContainer);

const sliderValue = document.createElement('p');
sliderValue.innerText = '10';


sliderContainer.appendChild(sliderValue);




