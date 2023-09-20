function validateInput(input) {
    input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
  }

  const username = document.getElementById("username");
