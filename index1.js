"use strict";
function convert(){
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    var fromValue=document.getElementById("frominput").value;
    // document.getElementById("frominput").addEventListener("keypress",(e)=>{
    //     if(e<from && e>=0){   
    //     }
    //     else{
    //         alert(`enter value less than ${from}`);
    //         document.getElementById("frominput").value=fromValue.slice(0,-1);
    //     }        
    // });
    var toValue = (fromValue,from,to)=>{
    return parseInt(fromValue,from).toString(to);
}
    document.getElementById("toinput").innerHTML=toValue(fromValue,from,to);
    document.getElementById("result").style.display="block";
    
}
function swap(){
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    let temp=from;
    from=to;
    to=temp;
    document.getElementById("from").value=from;
    document.getElementById("to").value=to;
}
// document.getElementById("frominput").addEventListener("keypress",(e)=>{
//     if(e.key<from && e.key>=0){   
//     }
//     else{
//         alert(`enter value less than ${from}`);
//         document.getElementById("frominput").value=fromValue.slice(0,-1);
//     }        
// });


