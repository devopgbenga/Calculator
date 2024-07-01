
function display(val){
    document.getElementById('display').value += val;
}

function result(){
    let x = document.getElementById('display').value
    let y = eval(x)
    document.getElementById('dis-1').value = '=' + y
}

function clrscreen(){
    document.getElementById('display').value = ''
    document.getElementById('dis-1').value = ''
}

function clrentry(){
    document.getElementById('display').value = ''
}


function del(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1)
}

function perc(){
    let x = document.getElementById('display').value
    let y = x/100
    document.getElementById('dis-1').value = '=' + y
}

function invx(){
    let x = document.getElementById('display').value
    let y = 1/x
    document.getElementById('dis-1').value = '=' + y
}

function square(){
    let x = document.getElementById('display').value
    let y = x * x
    document.getElementById('dis-1').value = '=' + y
}


function squareroot(){
    let x = document.getElementById('display').value
    let y = Math.sqrt(x)
    document.getElementById('dis-1').value = '=' + y
}

function plusminus(){
    let x = document.getElementById('display').value
    let y = x * -1
    document.getElementById('dis-1').value = '=' + y
}