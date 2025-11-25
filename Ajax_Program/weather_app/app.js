const dateTimeDiv = document.querySelector("#currentdatetime");
const btn = document.querySelector("button");
const xhr = new XMLHttpRequest();
btn.addEventListener("click", () => {
  xhr.onreadystatechange = prcessresponse;
  xhr.open(
    "GET",
    "https://timeapi.io/api/time/current/zone?timeZone=Asia%2FKolkata",
    true
  );
  xhr.send(null);
});

function prcessresponse() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    dateTimeDiv.innerHTML = `Current Date and Time in India: ${response.date} ${response.time}`;
  }
}
