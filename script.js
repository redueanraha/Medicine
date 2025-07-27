let selectedMedicine = "";

function OrderNow(medicine) {
  selectedMedicine = medicine;
  document.getElementById("orderForm").classList.remove("hidden");
  document.getElementById("medicine").value = medicine;
}

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const medicine = document.getElementById("medicine").value;

  const message = `নাম: ${name}%0Aফোন: ${phon
