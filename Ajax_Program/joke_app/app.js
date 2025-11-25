let xhr = new XMLHttpRequest();

const button = document.querySelector("#get-joke-btn");

button.addEventListener("click", () => {
  xhr.onreadystatechange = processResponse;

  xhr.open("GET", "https://official-joke-api.appspot.com/random_joke", true);
  xhr.send(null);

  function processResponse() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log("Response:", xhr.responseText);
    } else {
      console.error("Error:", xhr.statusText);
    }
  }
});
