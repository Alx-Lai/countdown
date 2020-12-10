var countdown= function(due){
    var now = new Date();
    var rest = due.getTime()-now.getTime();
    rest = Math.floor(rest);
    var sec = Math.floor((rest/1000));
    var min = Math.floor((sec/60));
    var hour = Math.floor((min/60));
    var days = Math.floor(hour/24);
    sec%=60;
    min%=60;
    hour%=24;
    var count = [days,hour,min,sec];
    refresh();
    return count;
}
var realc = function(){
    var counter = countdown(goal);
    document.getElementById('time').textContent=counter[0]+'天'+counter[1]+'時'+counter[2]+'分'+counter[3]+'秒';
    refresh();
}
var refresh = function(){
    setTimeout(realc,1000);
}
var goal = new Date();
document.getElementById('form').onsubmit = function(){
    var source = document.getElementById('form');
    goal.setFullYear(source.year.value);
    goal.setMonth(source.month.value-1);
    goal.setDate(source.day.value);
    goal.setHours(source.hour.value);
    goal.setMinutes(source.minute.value);
    goal.setSeconds(source.second.value);
    realc();
    return false;
}