const billStringElement = document.querySelector(".billString");
// do this for all the DOM elements
const calculateBtnElement = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");

// add event listener
function calculateBtnClicked(){
    // logic goes here
   
        // get the string entered in the textArea
        var billString = billStringElement.value;
        //split the string
        var billItems = billString.split(",");
        // a variable for the total phone bill.
        var billTotal = 0;
        //loop over all the bill items
        for (var i=0;i<billItems.length;i++){
            var billItem = billItems[i].trim();
            if (billItem === "call"){
                billTotal += 2.75;
            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
        }
        
        //round to two decimals
        var roundedBillTotal = billTotal.toFixed(2);
        billTotalElement.innerHTML = roundedBillTotal;
    }


calculateBtn.addEventListener('click', calculateBtnClicked);
