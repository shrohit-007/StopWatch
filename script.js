let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');
let cnt=0;
let hr=0,mn=0,sec=0;
let timerflag=false;
let startcheck=false;
start.addEventListener('click',function(){
    timerflag=true;
    if(!startcheck)
    stopwatch();
    startcheck=true;

});
stop.addEventListener('click',function(){
    startcheck=false;
    timerflag=false;
});
reset.addEventListener('click',function(){
    startcheck=false;
    timerflag=false;
    document.getElementById('hour').innerHTML="00";
    document.getElementById('minute').innerHTML="00";
    document.getElementById('second').innerHTML="00";
    document.getElementById('miliseconds').innerHTML="00";
    hr=0,mn=0,sec=0,cnt=0;
});
function stopwatch()
{
    //console.log(timerflag);
    if(timerflag==true)
    {
        cnt++;
        if(cnt==100)
        {
            sec++;
            cnt=0;
        }
        if(sec==60)
        {
            sec=0;
            mn++;
        }
        if(mn==60)
        {
            hr++;
            mn=0;
        }
        var hrstring=hr,mnstring=mn,secstring=sec,cntstring=cnt;
        if(hr<10)
        hrstring="0"+hr;
        else
        hrstring=hr;
        if(mn<10)
        mnstring="0"+mn;
        else
        mnstring=mn;
        if(sec<10)
        secstring="0"+sec;
        else
        secstring=sec;
        if(cnt<10)
        cntstring="0"+cnt;
        else
        cntstring=cnt;
        document.getElementById('hour').innerHTML=hrstring;
        document.getElementById('minute').innerHTML=mnstring;
        document.getElementById('second').innerHTML=secstring;
        document.getElementById('miliseconds').innerHTML=cntstring;
        setTimeout("stopwatch()",10);
    }
}
