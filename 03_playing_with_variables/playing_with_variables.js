const inputs = document.querySelectorAll('.controls input');

function hadnleUpdate() {
  console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', hadnleUpdate));

console.log(inputs);
