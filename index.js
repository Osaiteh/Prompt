
var input = prompt(
    "1. Airtime-self \n 2. Airtime-Others \n 3. Data \n 4. Transfer"
);
if ((input == 1)) {
    var amount = prompt(
        "Select amount: \n 1. 100 \n  2. 200 \n 3. 500 \n 4. 1000 \n 5. 5000"
    );
    // alert("Recharge Successful!");
    if ((amount == 1)) {
        alert("You have successfully recharged " + 100 + " naira.");
    } else if ((amount == 2)) {
        alert("You have successfully recharged " + 200 + " naira.");
    } else if ((amount == 3)) {
        alert("You have successfully recharged " + 500 + " naira.");
    } else if ((amount == 4)) {
        alert("You have successfully recharged " + 1000 + " naira.");
    } else if ((amount == 5)) {
        alert("You have successfully recharged " + 5000 + " naira.");
    } else alert("Your input is invalid. Try again.");
} else if ((input == 2)) {
    var number = prompt("input phone number");
    var otheramount = prompt(
        "Select amount: \n 1. 100 \n  2. 200 \n 3. 500 \n 4. 1000 \n 5. 5000 \n 6. Others"
    );
    // alert("You have successfully recharged " + number + " successfully");
    if ((otheramount == 6)) {
        newamount = prompt("How much do you want to send?");
    } else if ((otheramount == 1)) {
       newamount = 100;
    } else if ((otheramount == 2)) {
        newamount = 200;
    } else if ((otheramount == 3)) {
        newamount = 500;
    } else if ((otheramount == 4)) {
        newamount = 1000;
    } else if ((otheramount == 5)) {
        newamount = 5000;
    } else alert("Your input is invalid. Try again.");
    var confirm = prompt("Are you sure you want to transfer " + newamount + " to " + number + "? \n 1. YES \n 2. NO");
    if (confirm == 1) {
       alert("You have successfully recharged " + number + " with " + newamount + " naira."); 
    } else if (confirm == 2) {
        alert("Transaction has been cancelled.")
    } else alert("Invalid Input.")
} else if ((input == 3)) {
    var dataamount = prompt(
        "Select amount: \n 1. 100MB \n  2. 200MB \n 3. 500MB \n 4. 1GB \n 5. 5GB"
    );
    var confirm = prompt("Are you sure you want to subscribe to " + dataamount + "? \n 1. YES \n 2. NO");
    if (confirm == 1) {
        // alert("Data bought Successfully!");
        if ((dataamount == 1)) {
            dataamount = "100MB";
            alert("You have successfully subscribed to " + dataamount);
        } else if ((dataamount == 2)) {
            dataamount = "200MB";
            alert("You have successfully subscribed to " + dataamount);
        } else if ((dataamount == 3)) {
            dataamount = "500MB";
            alert("You have successfully subscribed to " + dataamount);
        } else if ((amount == 4)) {
            dataamount = "1GB";
            alert("You have successfully subscribed to " + dataamount);
        } else if ((dataamount == 5)) {
            dataamount = "5GB";
            alert("You have successfully subscribed to " + dataamount);
        } else alert("Your input is invalid. Try again.");
    } else if (confirm == 2) {
        alert("Transaction has been cancelled.")
    } else alert("Invalid Input.")
} else if ((input == 4)) {
    var name = prompt("input account number");
    transferamount = prompt(
        "Select amount: \n 1. 1000 \n  2. 2000 \n 3. 5000 \n 4. 10000 \n 5. 50000 \n 6. Others"
    );
    // alert("You have successfully sent money to" + name);
    if ((transferamount == 6)) {
        transferamount = prompt("Input amount:");
    } else if ((transferamount == 1)) {
        transferamount = 1000;
    } else if ((transferamount == 2)) {
        transferamount = 2000;
    } else if ((transferamount == 3)) {
        transferamount = 5000;
    } else if ((transferamount == 4)) {
        transferamount = 10000;
    } else if ((transferamount == 5)) {
        transferamount = 50000;
    } else alert("Your input is invalid. Try again.");
    var confirm = prompt("Are you sure you want to transfer " + transferamount + " to " + name + "? \n 1. YES \n 2. NO");
    if (confirm == 1) {
       alert("You have successfully sent "+ transferamount +" naira to " + name); 
    } else if (confirm == 2) {
        alert("Transaction has been cancelled.")
    } else alert("Invalid Input.")
} else alert("Your input is invalid!");
