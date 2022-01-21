export function checkForLang(inputText, apikey) {
  const formdata = new FormData();
  formdata.append("key", apikey);
  formdata.append("txt", inputText);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
    .then((response) => ({
      body: response.json(),
    }))
    .then(({ body }) =>
      body.then((result) => {
        document.getElementById("results").innerHTML =
          result.language_list[0].name;
      })
    )

    .catch((error) => console.log("error", error));
}
