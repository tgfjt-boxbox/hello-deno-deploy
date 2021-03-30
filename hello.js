function handleRequest(_) {
  return new Response(
    `<body
      style="font-family: Avenir, sans-serif; font-size: 3rem;"
    >
      <h1>Hello</h1>
    </body>`,
    {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    },
  );
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});