const URL = `https://reqres.in/api/users?`;

async function getData(URL) {
  const pages = [1, 2, 3, 4, 5];
  const promises = await Promise.all(pages.map((page) => fetchData(page, URL)));
  return promises;
}

async function fetchData(page, URL) {
  const url = URL + `page=${page}`;
  console.log(url);
  return fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse);
      return jsonResponse;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

getData(URL)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    throw new Error(error);
  });
