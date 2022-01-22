export function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  if (!formText) {
    alert("Please enter a text first");
  } else Client.checkForLang(formText);
}
