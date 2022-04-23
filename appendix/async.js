const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  } else {
    reject("Failure");
  }
});

myPromise
  .then(result => result + "!!!")
  .then(result => console.log(result))
  .catch(error => console.log(error));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(json => console.log(json));

// error
fetch("https://jsonplaceholder.typicode.com/todossss/1")
  .then(response => response.json())
  .then(json => console.log(json));
