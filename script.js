let start=document.getElementById('start');
let lap=document.getElementById('lap');
let reset=document.getElementById('reset');
let laps=document.getElementById('laps');
let headerlap=document.getElementById('lapheader');
// laps.style.display="none";
let laphr=0,lapmn=0,lapsec=0,lapmsec=0;
let cnt=0;
let hr=0,mn=0,sec=0,lapcnt=0;
let timerflag=false;
let startcheck=false;
var interval=10;
var expected;
start.addEventListener('click',function(){
    expected=Date.now()+interval;
    // let start1=Date.now();
    // timerflag=true;
    // stopwatch1(start1);
    // console.log(start2);
    if(!startcheck)
    {
        timerflag=true;
        document.getElementById('start').innerHTML="Resume";
        //document.getElementById('start').style.cssText="background-color:#8E44AD;  padding:20px 35px;  margin:10px;  border-radius: 70%; ";
        startcheck=true;
        setTimeout("stopwatch()",interval);
    }
    else{
        timerflag=false;
        document.getElementById('start').innerHTML="Start";
        startcheck=false;
    }

});
function lapadd()
{
  //  timerflag=false;
    let tempdiv=document.createElement('div');
    lapcnt++;
    if(lapcnt==1)
    {
        laps.appendChild(tempdiv);
    }
    else{
        let pos1=laps.firstElementChild;
        laps.insertBefore(tempdiv,pos1);
    }
        let data1=document.createElement('div');
        let data2=document.createElement('div');
        let data3=document.createElement('div');
        tempdiv.appendChild(data1);
        tempdiv.appendChild(data2);
        tempdiv.appendChild(data3);
        data1.innerHTML=lapcnt<10?"0"+lapcnt:lapcnt;
        tempdiv.style.cssText="color:#b3b6b7; font-size:3vw; font-weight:bold; padding:1vh 0.5vh;"
        data1.style.cssText="margin-left:12vw; display:inline-block;";
        data2.style.cssText="margin-left:27vw; display:inline-block;";
        data3.style.cssText="margin-left:17vw; display:inline-block;";
        var ansstring="";
        ansstring+=laphr<10?"0"+laphr:laphr;
        ansstring+=":";
        ansstring+=lapmn<10?"0"+lapmn:lapmn;
        ansstring+=":";
        ansstring+=lapsec<10?"0"+lapsec:lapsec;
        ansstring+=":";
        ansstring+=lapmsec<10?"0"+lapmsec:lapmsec;
        data2.innerHTML=ansstring;
        var overalltime="";
        overalltime+=hr<10?"0"+hr:hr;
        overalltime+=":";
        overalltime+=mn<10?"0"+mn:mn;
        overalltime+=":";
        overalltime+=sec<10?"0"+sec:sec;
        overalltime+=":";
        overalltime+=cnt<10?"0"+cnt:cnt;
        data3.innerHTML=overalltime;
        lapmsec=0,lapsec=0,lapmn=0,laphr=0;
}
lap.addEventListener('click',function(){
    //timerflag=false;
    if(lapcnt==0)
    {
        lapheader.style.display="flex";
        let ruler=document.getElementById('ruler');
        ruler.style.display="block";
        lapadd();
    }
    else
    {
        lapadd();
    }
});
reset.addEventListener('click',function(){
    startcheck=false;
    timerflag=false;
    document.getElementById('start').innerHTML="Start";
    document.getElementById('hour').innerHTML="00";
    document.getElementById('minute').innerHTML="00";
    document.getElementById('second').innerHTML="00";
    document.getElementById('miliseconds').innerHTML="00";
    lapheader.style.display="none";
    document.getElementById('ruler').style.display="none";
    laps.innerHTML="";
    lapcnt=0;
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
        lapmsec++;
        if(lapmsec==100)
        {
            lapmsec=0;
            lapsec++;
        }
        if(lapsec==60)
        {
            lapsec=0;
            lapmn++;
        }
        if(lapmn==60)
        {
            laphr++;
            lapmn=0;
        }
        var dt=Date.now()-expected;
        expected+=interval;
        setTimeout("stopwatch()",Math.max(0, interval - dt));
    }
}
