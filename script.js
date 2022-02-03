function simpleinterest()
{
    var p = document.getElementById("principal");
    var r = document.getElementById("myRange");
    var t= document.getElementById("years");
    var interest=((r.value)*(p.value)*(t.value))/100;
    var out1=document.getElementById("outer1");
    out1.innerHTML="If you deposit "+"<span class='highlight'>"+p.value+ "</span>"+","+"<br>"+"at an interest rate of "+"<span class='highlight'>"+r.value+"%"+ "</span>"+"."+"<br>"+"You will receive an amount of "+"<span class='highlight'>"+interest+ "</span>"+","+"<br>"+"in the year "+"<span class='highlight'>"+(parseInt(new Date().getFullYear())+parseInt(t.value))+ "</span>";
    
    
    
}
function rangeslider(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value+"%";

    slider.oninput = function() {
        output.innerHTML = this.value+"%";
    }
    
}
    