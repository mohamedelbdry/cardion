var Products = document.querySelectorAll(".menu img");
var lightBoxContainer = document.querySelector(".lightBoxContainer");
var lightBoxItem = document.querySelector('.lightBoxItem');

for (let i = 0; i < Products.length; i++) {
    Products[i].addEventListener('click', function (e) {
        let card = e.target.closest(".menu");
        let cardClone = card.cloneNode(true);
        lightBoxItem.innerHTML = '<i class="closeing fs-3 position-absolute bottom-0 end-0 m-3 fa-solid fa-circle-xmark"></i>';
        lightBoxItem.appendChild(cardClone);
        lightBoxContainer.classList.replace('d-none','d-flex');
        let newCloseBtn = lightBoxItem.querySelector('.closeing');
        newCloseBtn.addEventListener('click', function(){
            lightBoxContainer.classList.replace('d-flex','d-none');
            lightBoxItem.innerHTML = "";
        });
    });
}

document.querySelector(".Searching").addEventListener("click", function (e) {
  e.preventDefault(); 
  let input = document.querySelector("input[type='text']").value.toLowerCase().trim();
  let cars = document.querySelectorAll(".menu");
  let found = false;

cars.forEach(function(card) {
    var carName = card.querySelector("h3").textContent.toLowerCase();
    if (carName.includes(input)) {
      card.parentElement.style.display = "block";
      found = true;
    } else {
      card.parentElement.style.display = "none";
    }
  });

  if (found) {
    document.querySelector("#Selling").scrollIntoView({ behavior: "smooth" });
  }
});
















































