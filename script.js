// Refresh Dashboard Function

function refreshData(){

    // Generate Random Dashboard Data

    let users =
    Math.floor(Math.random()*5000)+10000;

    let revenue =
    Math.floor(Math.random()*50000)+50000;

    let orders =
    Math.floor(Math.random()*1000)+1000;

    let visitors =
    Math.floor(Math.random()*5000)+7000;


    // Update Dashboard Values

    document
    .getElementById("users")
    .innerText = users;


    document
    .getElementById("revenue")
    .innerText = "₹" + revenue;


    document
    .getElementById("orders")
    .innerText = orders;


    document
    .getElementById("visitors")
    .innerText = visitors;


    // Alert Message

    alert("Dashboard Updated Successfully!");

}