var currentdate = new Date();
var cdDay = currentdate.getDate()
var cdMonth = currentdate.getMonth() + 1
var cdYear = currentdate.getFullYear()
var cdHour = currentdate.getHours()
var cdMinutes = currentdate.getMinutes()
document.getElementById("lead").innerHTML="The current date is: " + cdMonth + "/" + cdDay + "/" + cdYear;
document.getElementById("timeblock1").value = getSavedValue("timeblock1"); 
document.getElementById("timeblock2").value = getSavedValue("timeblock2"); 
document.getElementById("timeblock3").value = getSavedValue("timeblock3");
document.getElementById("timeblock4").value = getSavedValue("timeblock4"); 
document.getElementById("timeblock5").value = getSavedValue("timeblock5"); 
document.getElementById("timeblock6").value = getSavedValue("timeblock6"); 
document.getElementById("timeblock7").value = getSavedValue("timeblock7");
document.getElementById("timeblock8").value = getSavedValue("timeblock8");
document.getElementById("timeblock9").value = getSavedValue("timeblock9"); 
document.getElementById("timeblock10").value = getSavedValue("timeblock10"); 
document.getElementById("timeblock11").value = getSavedValue("timeblock11");
document.getElementById("timeblock12").value = getSavedValue("timeblock12");
document.getElementById("timeblock13").value = getSavedValue("timeblock13"); 
document.getElementById("timeblock14").value = getSavedValue("timeblock14"); 
document.getElementById("timeblock15").value = getSavedValue("timeblock15");
document.getElementById("timeblock16").value = getSavedValue("timeblock16"); 
function saveValue(e){
    var id = e.id; 
    var val = e.value; 
    localStorage.setItem(id, val);
}
function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}
if (cdHour == 9 && cdMinutes < 30) {
    document.getElementById("timeblock1").style = "background-color: gainsboro;"
    }
else if (cdHour == 9 && cdMinutes >= 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: gainsboro;"
    
    }
else if (cdHour == 10 && cdMinutes < 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: gainsboro;"
         }
else if (cdHour == 10 && cdMinutes >= 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: gainsboro;"
         }
else if (cdHour == 11 && cdMinutes < 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: gainsboro;"
         }
else if (cdHour == 11 && cdMinutes >= 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: gainsboro;"
         }
else if (cdHour == 12 && cdMinutes < 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: gainsboro;"
         }
else if (cdHour == 12 && cdMinutes >= 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: gainsboro;"
         }
else if (cdHour == 13 && cdMinutes < 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: orange;"
    document.getElementById("timeblock9").style = "background-color: gainsboro;"
         }
else if (cdHour == 13 && cdMinutes >= 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: orange;"
    document.getElementById("timeblock9").style = "background-color: orange;"
    document.getElementById("timeblock10").style = "background-color: gainsboro;"
         }
else if (cdHour == 14 && cdMinutes < 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: orange;"
    document.getElementById("timeblock9").style = "background-color: orange;"
    document.getElementById("timeblock10").style = "background-color: orange;"
    document.getElementById("timeblock11").style = "background-color: gainsboro;"
         }
else if (cdHour == 14 && cdMinutes >= 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: orange;"
    document.getElementById("timeblock9").style = "background-color: orange;"
    document.getElementById("timeblock10").style = "background-color: orange;"
    document.getElementById("timeblock11").style = "background-color: orange;"
    document.getElementById("timeblock12").style = "background-color: gainsboro;"
         }
else if (cdHour == 15 && cdMinutes < 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: orange;"
    document.getElementById("timeblock9").style = "background-color: orange;"
    document.getElementById("timeblock10").style = "background-color: orange;"
    document.getElementById("timeblock11").style = "background-color: orange;"
    document.getElementById("timeblock12").style = "background-color: orange;"
    document.getElementById("timeblock13").style = "background-color: gainsboro;"
         }
else if (cdHour == 15 && cdMinutes >= 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: orange;"
    document.getElementById("timeblock9").style = "background-color: orange;"
    document.getElementById("timeblock10").style = "background-color: orange;"
    document.getElementById("timeblock11").style = "background-color: orange;"
    document.getElementById("timeblock12").style = "background-color: orange;"
    document.getElementById("timeblock13").style = "background-color: orange;"
    document.getElementById("timeblock14").style = "background-color: gainsboro;"
         }
else if (cdHour == 16 && cdMinutes < 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: orange;"
    document.getElementById("timeblock9").style = "background-color: orange;"
    document.getElementById("timeblock10").style = "background-color: orange;"
    document.getElementById("timeblock11").style = "background-color: orange;"
    document.getElementById("timeblock12").style = "background-color: orange;"
    document.getElementById("timeblock13").style = "background-color: orange;"
    document.getElementById("timeblock14").style = "background-color: orange;"
    document.getElementById("timeblock15").style = "background-color: gainsboro;"
         }
else if (cdHour == 16 && cdMinutes >= 30) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: orange;"
    document.getElementById("timeblock9").style = "background-color: orange;"
    document.getElementById("timeblock10").style = "background-color: orange;"
    document.getElementById("timeblock11").style = "background-color: orange;"
    document.getElementById("timeblock12").style = "background-color: orange;"
    document.getElementById("timeblock13").style = "background-color: orange;"
    document.getElementById("timeblock14").style = "background-color: orange;"
    document.getElementById("timeblock15").style = "background-color: orange;"
    document.getElementById("timeblock16").style = "background-color: gainsboro;"
         }
else if (cdHour >= 17) {
    document.getElementById("timeblock1").style = "background-color: orange;"
    document.getElementById("timeblock2").style = "background-color: orange;"
    document.getElementById("timeblock3").style = "background-color: orange;"
    document.getElementById("timeblock4").style = "background-color: orange;"
    document.getElementById("timeblock5").style = "background-color: orange;"
    document.getElementById("timeblock6").style = "background-color: orange;"
    document.getElementById("timeblock7").style = "background-color: orange;"
    document.getElementById("timeblock8").style = "background-color: orange;"
    document.getElementById("timeblock9").style = "background-color: orange;"
    document.getElementById("timeblock10").style = "background-color: orange;"
    document.getElementById("timeblock11").style = "background-color: orange;"
    document.getElementById("timeblock12").style = "background-color: orange;"
    document.getElementById("timeblock13").style = "background-color: orange;"
    document.getElementById("timeblock14").style = "background-color: orange;"
    document.getElementById("timeblock15").style = "background-color: orange;"
    document.getElementById("timeblock16").style = "background-color: orange;"
         }
else {
    document.getElementById("timeblock1").style = "background-color: skyblue;"
    document.getElementById("timeblock2").style = "background-color: skyblue;"
    document.getElementById("timeblock3").style = "background-color: skyblue;"
    document.getElementById("timeblock4").style = "background-color: skyblue;"
    document.getElementById("timeblock5").style = "background-color: skyblue;"
    document.getElementById("timeblock6").style = "background-color: skyblue;"
    document.getElementById("timeblock7").style = "background-color: skyblue;"
    document.getElementById("timeblock8").style = "background-color: skyblue;"
    document.getElementById("timeblock9").style = "background-color: skyblue;"
    document.getElementById("timeblock10").style = "background-color: skyblue;"
    document.getElementById("timeblock11").style = "background-color: skyblue;"
    document.getElementById("timeblock12").style = "background-color: skyblue;"
    document.getElementById("timeblock13").style = "background-color: skyblue;"
    document.getElementById("timeblock14").style = "background-color: skyblue;"
    document.getElementById("timeblock15").style = "background-color: skyblue;"
    document.getElementById("timeblock16").style = "background-color: skyblue;" 
}