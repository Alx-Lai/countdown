//default value
var start=0;
if(start==0){
    var timer = new Date();
    document.getElementById('form').year.value=timer.getFullYear();
    document.getElementById('form').month.value=timer.getMonth()+1;
    document.getElementById('form').day.value=timer.getDate();
    document.getElementById('form').hour.value=timer.getHours();
    document.getElementById('form').minute.value=timer.getMinutes();
    document.getElementById('form').second.value=timer.getSeconds();
    start=1;
}
var countdown= function(due,positive){
    var now = new Date();
    var rest = (due.getTime()-now.getTime())*positive;
    rest = Math.floor(rest);
    var sec = Math.floor((rest/1000));
    var min = Math.floor((sec/60));
    var hour = Math.floor((min/60));
    var days = Math.floor(hour/24);
    sec%=60;
    min%=60;
    hour%=24;
    var count = [days,hour,min,sec];
    return count;
}
var realc = function(){
    var counter; 
    counter = countdown(goal,1);
    if(counter[0]>=0&&counter[1]>=0&&counter[2]>=0&&counter[3]>=0){
        document.getElementById('time').textContent=counter[0]+'天'+counter[1]+'時'+counter[2]+'分'+counter[3]+'秒';
    }else{
        counter=countdown(goal,-1);
        document.getElementById('time').textContent='過了'+counter[0]+'天'+counter[1]+'時'+counter[2]+'分'+counter[3]+'秒';    
    }
    refresh();
}
var refresh = function(){
    setTimeout(realc,1000);
}
var goal = new Date();
document.getElementById('form').onsubmit = function(){
    var source = document.getElementById('form');
    var now = new Date();
    if(!isNaN(source.year.value)){
        goal.setFullYear(source.year.value);
    }else{
        goal.setFullYear(now.getFullYear());
    }
    if(!isNaN(source.month.value)){
        goal.setMonth(source.month.value-1);
    }else{
        goal.setMonth(now.getMonth());
    }
    if(!isNaN(source.day.value)){
        goal.setDate(source.day.value);
    }else{
        goal.setDate(now.getDate());
    }
    if(!isNaN(source.hour.value)){
        goal.setHours(source.hour.value);
    }else{
        goal.setHours(now.getHours());
    }
    if(!isNaN(source.minute.value)){
        goal.setMinutes(source.minute.value);
    }else{
        goal.setMinutes(now.getMinutes());
    }
    if(!isNaN(source.second.value)){
        goal.setSeconds(source.second.value);
    }else{
        goal.setSeconds(now.getSeconds());
    }
    realc();
    return false;
}