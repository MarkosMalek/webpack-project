export function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  if (!formText) {
    alert("Please enter a text first");
  }
  fetch("http://localhost:8082/apiKey")
    .then((response) => ({
      body: response.text(),
    }))
    .then(({ body }) =>
      body.then((key) => {
        Client.checkForLang(formText, key);
      })
    )

    .catch((error) => console.log("error", error));
}
