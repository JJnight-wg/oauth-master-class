window.onload = () => {
  document.getElementById("button").onclick = () => {
   window.onload = () => {
    document.getElementById("suggest").onclick = () => {
        YaAuthSuggest.init(
            {
                client_id: "y0__xCHy8KUBhjEpjUgq8u7xhUw38yBuQgBARdyXUzQzK6Jb3sCRTN24kwWHw",
                response_type: "token",
                redirect_uri: "https://oauth-master-class-cofk.vercel.app//token.html",
            },
            "https://oauth-master-class-cofk.vercel.app/"
        )
        .then(({ handler }) => handler())
        .then(async (data) => {
            const result = await fetchYandexData(data.access_token);

            authorize(result);

            console.log(result, data);
        })
        .catch((error) => console.log("Что-то пошло не так: ", error));
    };
};
