
var line1=document.getElementById("l1");
var line2=document.getElementById("l2");
var line3=document.getElementById("l3");

var msg1=document.getElementById("msg1");
var msg2=document.getElementById("msg2");
var msg3=document.getElementById("msg3");

data={
    "line1":1,
    "line2":0,
    "line3":1
}

const getColor=(d)=>{
    if(d==1) return "green";
    return "red";
}

const getMsg=(d)=>{
    if(d==1) return "HEALTHY LINE";
    return "OVERLOAD";
}

const setData=()=>{
    line1.style.backgroundColor=getColor(data["line1"]);
    msg1.innerText=getMsg(data["line1"]);
    msg1.style.color=getColor(data["line1"]);

    line2.style.backgroundColor=getColor(data["line2"]);
    msg2.innerText=getMsg(data["line2"]);
    msg2.style.color=getColor(data["line2"]);

    line3.style.backgroundColor=getColor(data["line3"]);
    msg3.innerText=getMsg(data["line3"]);
    msg3.style.color=getColor(data["line3"]);
}
