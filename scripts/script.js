const dropDown = document.querySelector(".hamburger-menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  const displayValue = window
    .getComputedStyle(dropDown)
    .getPropertyValue("display");

  menuBtn.classList.toggle("active");
  if (displayValue === "none") {
    dropDown.style.display = "block";
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    dropDown.style.display = "none";
    document.body.style.height = "100%";
    document.body.style.overflow = "scroll";
  }

  console.log("Confirmed");
  console.log(displayValue);
});
