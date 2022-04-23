function creatTime() {

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    
      
if (hh > 12) {
    session = "PM";
}
    

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;

document.getElementById("hours").innerHTML = hh;
document.getElementById("min").innerHTML = mm;
document.getElementById("sec").innerHTML = ss;
document.getElementById("section").innerHTML = session;
 

    

      var t = setTimeout(function() {
        creatTime()
    }, 1000);

};


creatTime();

