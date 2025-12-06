window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "y0__xCHy8KUBhjEpjUgq8u7xhUw38yBuQgBARdyXUzQzK6Jb3sCRTN24kwWHw",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-cofk.vercel.app/token.html",
      },
      "https://examplesite.com",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };
};
