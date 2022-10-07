const submitBtn = document.getElementById("submit");
const cancelBtn = document.getElementById("cancel");
const fullNameInput = document.getElementById("fullName");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const underDiscount = 20;
const overDiscount = 40;

// SUBMIT BUTTON CLICKED
submitBtn.addEventListener("click", function () {
    // DATA
    let priceKm = 0.21;
    let ticketType = "Biglietto Scontato";

    // INPUT
    const fullName = fullNameInput.value;
    console.log(fullName, typeof fullName);
    const km = kmInput.value;
    console.log(km, typeof km);
    const age = ageInput.value;
    console.log(age, typeof age);

    // ELABORATION
    let price = 0;
    if (age === "minor") {
        priceKm *= 1 - (underDiscount / 100);
    } else if (age === "over65") {
        priceKm *= 1 - (overDiscount / 100);
    }
    else {
        ticketType = "Biglietto Standard";
    }
    console.log(priceKm, typeof priceKm);
    price = (km * priceKm).toFixed(2);

    const carriage = Math.floor(Math.random() * 10) + 1;
    const code = Math.floor(Math.random() * (100000 - 10000)) + 10000;
    
    // OUTPUT
    document.getElementById("priceTxt").innerHTML = `${price} €`;
    document.getElementById("fullNameTxt").innerHTML = fullName;
    document.getElementById("ticketTypeTxt").innerHTML = ticketType;
    document.getElementById("carriageTxt").innerHTML = carriage;
    document.getElementById("codeTxt").innerHTML = code;

    // CLEAR INPUT
    fullNameInput.value = "";
    kmInput.value = "";
    ageInput.value = "";
});

// CANCEL BUTTON CLICKED
cancelBtn.addEventListener("click", function () {
    fullNameInput.value = "";
    kmInput.value = "";
    ageInput.value = "";
    document.getElementById("fullNameTxt").innerHTML = "";
    document.getElementById("ticketTypeTxt").innerHTML = "";
    document.getElementById("carriageTxt").innerHTML = "";
    document.getElementById("codeTxt").innerHTML = "";
    document.getElementById("priceTxt").innerHTML = "";
});