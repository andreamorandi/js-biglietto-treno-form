const submitBtn = document.getElementById("submit");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const underDiscount = 20;
const overDiscount = 40;

// SUBMIT BUTTON CLICKED
submitBtn.addEventListener("click", function () {
    // DATA
    let priceKm = 0.21;
    
    // INPUT
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
    console.log(priceKm, typeof priceKm);
    price = (km * priceKm).toFixed(2);
    
    // OUTPUT
    document.getElementById("priceTxt").innerHTML = `${price} €`;

    // CLEAR INPUT
    kmInput.value = "";
    ageInput.value = "";
});