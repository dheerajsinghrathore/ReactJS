let sp = document.querySelector("#result");
async function makeSmiley() {
  let pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      let n = Math.round(Math.random());
      if (n === 0) {
        reject("😢😢");
      } else {
        resolve("😁😁");
      }
    }, 3000);
  });
  return pr;
}
async function doTask() {
  try {
    let success = await makeSmiley();
    sp.innerHTML = success;
  } catch (error) {
    sp.innerHTML = error;
  }
}
