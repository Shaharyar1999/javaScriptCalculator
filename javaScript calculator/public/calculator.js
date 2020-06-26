

function put(num){

    var pt  = document.getElementById('inpt');
    pt.value += num;                            
    
}


function clearbtn(){

    var clr = document.getElementById('inpt');
    clr.value = "";
       
}

function ans(){

    var calcu = document.getElementById('inpt');
    calcu.value = eval(calcu.value);

}