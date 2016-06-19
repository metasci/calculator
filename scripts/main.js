

var $eq = $('.eq');
var $CE = $('.ce');
var $AC = $('.ac');
var $numBtn = $('.num');
var $display = $('.display');
var dispInst = '';
var ansArr;

$CE.on('click', function(){
    dispInst = dispInst[dispInst.length-1] === ' ' ? dispInst.slice(0, -2) : dispInst.slice(0, -1);
    $display.html(dispInst);    
    //keep current roll over value
});

$AC.on('click', function(){
    $display.html('');  
    dispInst = '';
    //also delete current roll over value
});


$numBtn.on('click', function(){
    dispInst += $(this).hasClass('opr') ? ' '+this.innerHTML+' ': this.innerHTML; 
    $display.html(dispInst);
});

$eq.on('click', function(){  
    $display.html(eval(dispInst));
});