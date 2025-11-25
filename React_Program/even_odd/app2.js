let sp1 = document.querySelector("#result");
let sp2 = document.querySelector("#icn");
function makeProject(n) {
  let pr = new Promise(function (resolve, reject) {
    //do some async task
    setTimeout(() => {
      if (n % 2 === 0) {
        resolve("Hurray! I have completed the project");
      } else {
        reject("So Sad! I could not complete the project");
      }
    }, 3000);
  });
  return pr;
}

function doTask() {
  let today = new Date();
  let n = today.getSeconds();
  sp1.innerHTML = `Number is ${n}<br>`;
  sp2.innerHTML = "";
  let pr = makeProject(n);
  pr.then((success) => {
    sp1.innerHTML = sp1.innerHTML + success;

    sp2.innerHTML = "😁😁";
  })
    .catch((error) => {
      sp1.innerHTML = sp1.innerHTML + error;

      sp2.innerHTML = "😢😢";
    })
    .finally(() => {
      sp1.innerHTML = sp1.innerHTML + "<br>Have a good day!";
    });

  console.log("Good evening");
}
