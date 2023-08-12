let amount = document.querySelector("#amount")
let tip = document.querySelector("#tip")
let alert_sect = document.querySelector(".alert")
let alert = document.querySelector("#alert")
let close = document.querySelector(".close")
let btn = document.querySelector("#btn")
let tip_value = document.querySelector("#tip_value")
let amount_value = document.querySelector("#total_value")


btn.addEventListener("click", (e) => {
	if(amount.value == "" || tip.value == "") {
		alert.innerText = "Enter your bill or tip value"
		alert_sect.style.display = "flex"
	 } 
	 else {
		if(amount.value < 500) {
			alert.innerText = "Please enter bill amount greater than 500"
			alert_sect.style.display = "flex"
		} else if (tip.value < 5) {
			alert.innerText = "Please enter tip percentage greater than 5"
			alert_sect.style.display = "flex"
		} else {
			alert_sect.style.display = "none"
		}
	}
	if (alert_sect.style.display == "none") {
		let result = (tip.value / 100) * amount.value
		tip_value.innerText = result;
		amount_value.innerText = Number(amount.value) + Number(result)
	}

});

close.addEventListener("click", () => {
	alert_sect.style.display = "none"
})
