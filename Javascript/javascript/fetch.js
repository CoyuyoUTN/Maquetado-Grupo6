const URL_USERS = "https://jsonplaceholder.typicode.com/todos";
fetch(URL_USERS) // Infiere en que el pedido es un GET
  .then((response) => response.json())
  .then((data) => showData(data)); //Nested Promises

function showData(data) {
  console.log("Data", data);
  let body = ``;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    body += `
    <div class="test animate__animated animate__fadeInLeft">
        
            <h1 class="title ">${data[i].title}</h1>
        <ol>
            <li><h3>id: ${data[i].id}</h3></li>
            <li><p>userId: ${data[i].userId}</p></li>
            <li><p>Status: ${data[i].completed}</p></li>
        </ol>
    </div>

        `;
  }
  document.getElementById("fetch-petition").innerHTML = body;
}
