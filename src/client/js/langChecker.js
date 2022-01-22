export function checkForLang(inputText) {
  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ input: inputText }),
  };

  fetch("http://localhost:8082/answer", requestOptions)
    .then((response) => ({ body: response.text() }))
    .then(({ body }) =>
      body.then((result) => {
        document.getElementById("results").innerHTML = result;
        if (result == "Undetermined") {
          alert("not valid input");
        }
        const unixTime = Math.round(Date.now() / 1000).toString();
        const date = new Date(unixTime * 1000);
        document.getElementById("date").innerHTML = date;
      })
    )

    .catch((error) => console.log("error", error));
}
/*

   
*/
