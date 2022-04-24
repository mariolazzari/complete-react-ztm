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
  .then(result => result + "!")
  .then(result => console.log(result))
  .catch(error => console.log(error));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(json => console.log(json));

// error
fetch("https://jsonplaceholder.typicode.com/todossss/1")
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error("Fetch error:", error));

// async/await
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    const firstUser = users[0];
    console.log("First user:", firstUser);

    return fetch(
      `https://jsonplaceholder.typicode.com/posts/?userId=${firstUser.id}`
    );
  })
  .then(res => res.json())
  .then(posts => console.log("Posts:", posts))
  .catch(error => console.error(error));

// async version
const asyncFetch = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    const firstUser = users[0];

    res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?userId=${firstUser.id}`
    );
    const posts = await res.json();
    console.log("First user (async):", firstUser);
    console.log("Posts (async):", posts);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
asyncFetch();
