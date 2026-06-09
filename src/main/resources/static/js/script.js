function openSurprise() {
	

    const name = document.getElementById("name").value;
    const passcode = document.getElementById("passcode").value;

    if (name === "" || passcode === "") {

        alert("Enter Name and Date of Birth 💖");
        return;
    }

    // DATE FORMAT => YYYY-MM-DD
    if (passcode === "11062005") {

        alert("Welcome 💖");

        window.location.href = "page3.html";

    } else {

        alert("Oops! Wrong DOB ❌");
    }
	function formatName(name) {
	    return name
	        .toLowerCase()
	        .split(" ")
	        .map(word =>
	            word.charAt(0).toUpperCase() + word.slice(1)
	        )
	        .join(" ");
	}

	    let name1 = document.getElementById("name").value.trim();

	    if(name1 === ""){
	        alert("Please enter your name");
	        return;
	    }

	    // First letter capital, remaining small
	    let formattedName = formatName(name1);

	    // Save in localStorage
	    localStorage.setItem("birthdayName", formattedName);

	    // Go to page3
	    window.location.href = "page3.html";
	
}