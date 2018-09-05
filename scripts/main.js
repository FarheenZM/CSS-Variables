document.addEventListener("DOMContentLoaded", function() {

  const inputs = document.querySelectorAll('input');

  function handleUpdate(){
    const suffix = this.dataset.sizing || ''; //this refers to the <input> property data-sizing
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

});
