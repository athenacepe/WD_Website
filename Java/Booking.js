//-------- JavaScript function to check if the date entered by the user is valid or not ---------------


function validDateCheck(start1, end1) {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	today = yyyy + '-' + mm + '-' + dd;
	if (end1 == "") {
		if (start1 < today) {
			return false;
		}
		return true;
	}
	if (start1 < today || end1 == today || end1 == start1 || start1 > end1) {
		return false;
	}
	else {
		return true;
            }
}

// --------------JavaScript function to make Estimated Time of Arrival Visible---------------------

function dateInput() {
		var start1 = document.getElementById("start1").value;
		var end1 = document.getElementById("end1").value;
		var ETA = document.getElementById("ETA");
		var time = document.getElementById("time");

		if (start1 != "") {
			var validDate = validDateCheck(start1, end1);
            
			if (!validDate) {
				document.getElementById("invalid").style.display = "block";
				ETA.style.opacity = "0";
				time.style.opacity = "0";
			}
			else {
				document.getElementById("invalid").style.display = "none";
			}

			if (end1 != "") {
				validDate = validDateCheck(start1, end1);
				if (validDate) {
                    document.getElementById("invalid").style.display = "none";
					ETA.style.opacity = "100";
					time.style.opacity = "100";
				}
                
				else {
                    document.getElementById("invalid").style.display = "block";
					ETA.style.opacity = "0";
					time.style.opacity = "0";
             }
         }
    }
}


// ------------------------------JavaScript function to update the price -------------------------------------

//Price
function updatePrice() {
	var RT1 = document.getElementById("RT1").value;
	var NumRoom = document.getElementById("NumRoom").value;
	var start1 = document.getElementById("start1").value;
	var end1 = document.getElementById("end1").value;
	var NA1 = document.getElementById("NA1").value;
	var NC1 = document.getElementById("NC1").value;
	var bf = document.getElementById("bf").checked;
	var Price = 0;
	var breakfastPrice = 35;

	//if there is no input
	if(start1 == "" || end1 == "" || RT1 == ""){
		return;
	}

	//get days inbetween 2 dates code:
	start1 = new Date(start1);
	end1 = new Date(end1);

	//calculate how many nights they are staying
	var dayDiff = end1.getTime() - start1.getTime();
	dayDiff /= 1000;
	dayDiff /= 60;
	dayDiff /= 60;
	dayDiff /= 24;

	//get room price
	Price = RT1;

	//get number of rooms price
	Price*=parseInt(NumRoom);

    //get breakfast price
    var tmpPrice = Price;
	var totalBreakfastPrice = 0;
    
		if(bf) {
			totalBreakfastPrice = breakfastPrice*parseInt(NA1);
			totalBreakfastPrice = breakfastPrice*parseInt(NC1);
			Price += totalBreakfastPrice;
        }
		else {
			Price = tmpPrice;
		}

		Price *= dayDiff;
		document.getElementById("Price").textContent = '$' + Price.toString();
}
    
// ------------------------ JavaScript function to reset form to its initial values -------------------------

function resetInfo() {
    if(confirm("Are you sure you want to reset all information?")) {
        document.getElementById("start1").value = "";
        document.getElementById("end1").value = "";
        document.getElementById("ETA").style.opacity = "0";
        document.getElementById("ETA").value = "14:00:00";
        document.getElementById("time").style.opacity = "0";
        document.getElementById("invalid").style.display = "none";
        document.getElementById("RT1").value = "";
        document.getElementById("NumRoom").value = "0";
        document.getElementById("NA1").value = "0";
        document.getElementById("NC1").value = "0";
        document.getElementById("bf").checked = false;
        document.getElementById("Price").textContent = '$';
        document.getElementById("titleBox").value = "";
    }
        var i;
        var textboxes = document.getElementsByClassName("guestDetails");
        for(i = 0; i < textboxes.length; i++) {
	       textboxes[i].value = "";
        }  
    }

function startForm() {
        document.getElementById("start1").value = "";
        document.getElementById("end1").value = "";
        document.getElementById("ETA").style.opacity = "0";
        document.getElementById("ETA").value = "12:00:00";
        document.getElementById("time").style.opacity = "0";
        document.getElementById("invalid").style.display = "none";
        document.getElementById("RT1").value = "";
        document.getElementById("NumRoom").value = "";
        document.getElementById("NA1").value = "0";
        document.getElementById("NC1").value = "0";
        document.getElementById("bf").checked = false;
        document.getElementById("Price").textContent = '$';
        document.getElementById("titleBox").value = "";
        var i;
        var textboxes = document.getElementsByClassName("guestDetails");
        for(i = 0; i < textboxes.length; i++) {
           textboxes[i].value = "";
        }
    }