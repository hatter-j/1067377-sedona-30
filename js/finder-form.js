const finderButton = document.querySelector(".hotel-finder-button");
const formContainer = document.querySelector(".form-container");
const searchForm = document.querySelector(".hotel-search-form");
const arrivalDate = searchForm.querySelector("[name=date-of-arrival]");
const departureDate = searchForm.querySelector("[name=date-of-departure]");
const adultsNumber = searchForm.querySelector("[name=number-of-adults]");
const childrenNumber = searchForm.querySelector("[name=number-of-children]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adultsNumber");
  storage = localStorage.getItem("childrenNumber");
} catch (err) {
  isStorageSupport = false;
};

finderButton.addEventListener("click", function (evt) {
  formContainer.classList.toggle("form-container-hidden");
  formContainer.classList.toggle("form-container-show");

  if (storage) {
    adultsNumber.value = storage;
    childrenNumber.value = storage;
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
}
  if (!adultsNumber.value) {
    evt.preventDefault();
}
  if (!childrenNumber.value) {
    evt.preventDefault();
} else {
  if (isStorageSupport) {
    localStorage.setItem("adultsNumber", adultsNumber.value);
    localStorage.setItem("childrenNumber", childrenNumber.value);
  }
}
});
