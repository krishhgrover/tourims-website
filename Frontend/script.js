// 1. Strict Form Validation (KEEPING YOUR ORIGINAL LOGIC)
function validateBooking() {
    var name = document.getElementById("pnrName").value;
    var age = document.getElementById("pnrAge").value;
    var phone = document.getElementById("pnrPhone").value;
    var isValid = true;

    if (name == "" || name.length != 10) {
        document.getElementById("nameErr").innerHTML = "Traveler name must be exactly 10 characters long.";
        isValid = false;
    } else {
        document.getElementById("nameErr").innerHTML = "";
    }

    if (age <= 20 || age >= 90 || isNaN(age)) {
        document.getElementById("ageErr").innerHTML = "Traveler age must be between 21 and 89.";
        isValid = false;
    } else {
        document.getElementById("ageErr").innerHTML = "";
    }

    if (phone.length != 10 || isNaN(phone)) {
        document.getElementById("phoneErr").innerHTML = "Mobile number must be exactly 10 digits.";
        isValid = false;
    } else {
        document.getElementById("phoneErr").innerHTML = "";
    }

    if (isValid) {
        alert("Payment Successful! Generating PNR...");
    }
    return isValid;
}

// 2. AI Recommender (EXPANDED WITH MANY MORE OPTIONS)
function recommend() {
    let budget = document.getElementById("budget").value;
    let type = document.getElementById("type").value;
    let vibe = document.getElementById("vibe").value;
    let resultBox = document.getElementById("result");

    if (!budget || !type || !vibe) {
        alert("Please select all options!");
        return;
    }

    resultBox.style.display = "block";
    let rec = "";

    // Detailed logic paths for more options
    if (type === "mountain") {
        if (vibe === "adventure") rec = "🏔️ <b>Leh-Ladakh Expedition:</b> High-altitude biking and camping.";
        else rec = "🚠 <b>Gulmarg, Kashmir:</b> Premium skiing and relaxed gondola rides.";
    } 
    else if (type === "beach") {
        if (vibe === "relaxed") rec = "🏝️ <b>Maldives Private Villa:</b> Crystal clear waters and luxury.";
        else rec = "🏄 <b>North Goa:</b> Vibrant beaches and water sports adventure.";
    } 
    else if (type === "city") {
        if (vibe === "adventure") rec = "🗼 <b>Tokyo, Japan:</b> Fast-paced urban exploration and neon nightlife.";
        else rec = "🏛️ <b>Rome, Italy:</b> Relaxed walks through historic ruins and cafes.";
    } 
    else if (type === "desert") {
        rec = "🏜️ <b>Dubai Safari:</b> Dune bashing and luxury desert starlight dinners.";
    } 
    else if (type === "jungle") {
        rec = "🐾 <b>Amazon Rainforest:</b> Deep wilderness trekking and wildlife spotting.";
    }
    else {
        rec = "✨ <b>Incredible India Tour:</b> A custom mix of all terrains and vibes!";
    }

    resultBox.innerHTML = "<h3>Our Recommendation:</h3><p>" + rec + "</p><p><i>Tailored for a " + budget + " budget.</i></p>";
}

// 3. Global Trip Hover (KEEPING YOUR ORIGINAL LOGIC)
function revealGlobalTrip() {
    const globalTrips = [
        { title: "🏔️ Swiss Alps Adventure", desc: "Ride through snowy peaks! Flat 20% OFF." },
        { title: "🌋 Iceland Ring Road", desc: "Experience waterfalls and volcanoes! Flat 15% OFF." },
        { title: "🏜️ Sahara Desert Safari", desc: "A thrilling dune bashing experience! Flat 25% OFF." },
        { title: "🛤️ Great Ocean Road", desc: "Ride down the edge of Australia. Flat 15% OFF." }
    ];

    const randomIndex = Math.floor(Math.random() * globalTrips.length);
    const selectedTrip = globalTrips[randomIndex];

    document.getElementById("globalTitle").innerHTML = selectedTrip.title;
    document.getElementById("globalText").innerHTML = "<b>" + selectedTrip.desc + "</b><br><br><span style='color: #065af3; font-weight: bold;'>Deal Unlocked At: " + Date() + "</span>";
    
    document.getElementById("globalBox").style.backgroundColor = "#e8f4fd";
    document.getElementById("globalBox").style.transform = "scale(1.02)";
}

function hideGlobalTrip() {
    document.getElementById("globalTitle").innerHTML = "🌍 Hover to Discover a New Global Expedition!";
    document.getElementById("globalText").innerHTML = "Move your mouse here to spin the globe and reveal a randomly selected world tour.";
    document.getElementById("globalBox").style.backgroundColor = "#f2f6fa";
    document.getElementById("globalBox").style.transform = "scale(1)";
}

// 4. Utilities (KEEPING YOUR ORIGINAL LOGIC)
function formatTicketName() {
    var f = document.getElementById("fName").value;
    var l = document.getElementById("lName").value;
    document.getElementById("ticketNameResult").value = (f + " " + l).toUpperCase();
}

function verifyEmail() {
    var email = document.getElementById("loginEmail").value;
    var pos = email.indexOf("@");
    if (pos == -1) alert("Invalid Email: '@' missing!");
    else alert("'@' found at position: " + (pos + 1));
}

function checkVisa() {
    var c = prompt("Enter Citizenship:");
    if (c && c.toLowerCase() == "india") alert("Eligible for instant e-Visa!");
    else alert("Please contact embassy.");
}

function showServerTime() {
    document.getElementById("dateDisplay").innerHTML = "Current Server Time: " + Date();
}