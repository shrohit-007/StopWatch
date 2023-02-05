let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');
let cnt=0;
let hr=0,mn=0,sec=0;
let timerflag=false;
start.addEventListener('click',function(){
    timerflag=true;
    stopwatch();
});
stop.addEventListener('click',function(){
    timerflag=false;
});
reset.addEventListener('click',function(){
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
        if(hr>0)
        document.getElementById('hour').innerHTML=hr;
        if(mn>0)
        document.getElementById('minute').innerHTML=mn;
        if(sec>0)
        document.getElementById('second').innerHTML=sec;
        document.getElementById('miliseconds').innerHTML=cnt;
        setTimeout("stopwatch()",10);
    }
}
