function dateInput() {
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var ETA = document.getElementById("ETA");
    var ETALabel = document.getElementById("ETALabel");

if(startDate != "") {
    var validDate = validDateCheck(startDate, endDate);
    if(!validDate) {
    document.getElementById("errorMessage").style.display = "block";
    ETA.style.opacity = "0";
    ETALabel.style.opacity = "0";
}
else{
    document.getElementById("errorMessage").style.display = "none";
}

if(endDate != "") {
    var validDate = validDateCheck(startDate, endDate);
    if(validDate) {
        document.getElementById("errorMessage").style.display = "none";
        ETA.style.opacity = "100";
        ETALabel.style.opacity = "100";
}
    else {
    document.getElementById("errorMessage").style.display = "block";
    ETA.style.opacity = "0";
    ETALabel.style.opacity = "0";
}
}
}
}