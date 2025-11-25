function makeProject(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`Project ${num} completed successfully.`);
      } else {
        reject(`Project ${num} failed.`);
      }
    }, 3000);
  });
}

function doTasks() {
  let date = new Date();
  let num = date.getSeconds();
  makeProject(num);
  let projectPromise = makeProject(num);
  projectPromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
}
