import axios from "axios";

async function getData(userId) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?id=" + userId
  );

  console.log("users:", user);
  console.log("posts:", post);
}

export default getData;
