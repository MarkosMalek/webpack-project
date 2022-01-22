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
        if (result.language_list[0].name == "Undetermined") {
          alert("not valid input");
        }
        const unixTime = Math.round(Date.now() / 1000).toString();
        const date = new Date(unixTime * 1000);
        document.getElementById("date").innerHTML = date;
      })
    )
    .catch((error) => console.log("error", error));
}
