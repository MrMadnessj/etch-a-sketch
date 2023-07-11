const mainDiv = document.querySelector('.container');
const confirm = document.querySelector('.confirm-btn');
let ui = 4;

function createBox(n)
{
    for(let i=0; i<n;i++)
    {
        let row = document.createElement('div');
        row.style.cssText =  "border:1px solid magenta; display:flex; flex:1;";
        mainDiv.appendChild(row);
        for(let j=0; j<n; j++)
        {
            let column = document.createElement('div');
            column.style.cssText = "border:1px solid green; flex:1; font-size: 5px";
          //  column.innerText = `${i} ${j}`
            row.appendChild(column)
        }
    }
}


confirm.onclick = () => createBox(100);


