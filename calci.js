
let disp = document.getElementById("display");
let c = document.getElementById("cal")
let i = document.getElementById("but")

function show(n)  {
    disp.value+=n;
    
    
} 

function ac()  {
    disp.value="";
}

function equal()  {
    disp.value = eval(disp.value)
}

function del()   {
    disp.value = disp.value.slice(0,-1)
}



