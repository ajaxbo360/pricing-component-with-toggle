const toggle = document.querySelector(".our-pricing__toggle__mode");
const toggleBtn = document.querySelector(".our-pricing__toggle__mode__btn");
const priceChanged1 = document.querySelector("#isChanged-1");
const priceChanged2 = document.querySelector("#isChanged-2");
const priceChanged3 = document.querySelector("#isChanged-3");
const before = window.getComputedStyle(priceChanged, "::before");



function AnimatedToggle() {
    if (toggle.classList.contains("isToggled")) {
        toggle.classList.remove("isToggled");

        toggleBtn.classList.remove("isSwitched");
        priceChanged1.style.setProperty("--value", "13px");
        priceChanged1.innerHTML = "199.99";
        priceChanged2.style.setProperty("--value", "7px");
        priceChanged2.innerHTML = "249.99";
        priceChanged3.style.setProperty("--value", "7px");
        priceChanged3.innerHTML = "399.99";
        
       
    } else {
        toggle.classList.add("isToggled");
        toggleBtn.classList.add("isSwitched");
        priceChanged1.innerHTML = "19.99";
        priceChanged1.style.setProperty("--value", "30px");
        priceChanged2.innerHTML = "24.99";
        priceChanged2.style.setProperty("--value", "22px");
        priceChanged3.innerHTML = "39.99";
        priceChanged3.style.setProperty("--value", "22px");
    }
    
    
}