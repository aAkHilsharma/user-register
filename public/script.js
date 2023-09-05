const button = document.getElementById("button");
const resultContainer = document.getElementById("data");
const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");

function displayError(message) {
  resultContainer.innerHTML = `<p>${message}</p>`;
}

function resetForm() {
  button.disabled = false;
  button.innerHTML = "Register";
  nameInput.value = "";
  addressInput.value = "";
}

button.addEventListener("click", async () => {
  const name = nameInput.value;
  const address = addressInput.value;

  if (!name || !address) {
    displayError("Name and address are required.");
    return;
  }

  const userData = {
    name,
    address,
  };

  button.disabled = true;
  button.innerHTML = "Registering...";

  try {
    const response = await fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (data.success) {
      const { name, address } = data.payload;
      resultContainer.innerHTML = `<p>User registered successfully:<br>Name: ${name}<br>Address: ${address}</p>`;
    } else {
      displayError(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error registering user:", error);
    displayError("An error occurred during registration.");
  } finally {
    resetForm();
  }
});
