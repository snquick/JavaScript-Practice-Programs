function getDateTime() {
    // iniitalizing variables
    var now = new Date(); 
    var year = now.getFullYear();
    var month = now.getMonth() +1; 
    var day = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds(); 

    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(min.toString().length == 1) {
        min = '0'+min;
    }
    if(sec.toString().length == 1) {
        sec = '0'+sec;
    }
       
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+min+':'+sec;   
     return dateTime;
}

setInterval(function() {
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);