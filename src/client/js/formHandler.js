export function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  fetch("http://localhost:8082/apiKey")
    .then((response) => ({
      body: response.text(),
    }))
    .then(({ body }) =>
      body.then((result) => {
        Client.checkForLang(formText, result);
      })
    )

    .catch((error) => console.log("error", error));
}
