const http = require("http"); // accessing Node's built-in "http" module
const server = http.createServer(requestHandler); // Request handler function is passed as an argument!;
const port = 5000;
const host = "localhost";
const composersArr = require("./composer-data");

// INSTRUCTING THE SERVER ON HOW TO LISTEN - creating a Request Handler function:
function requestHandler(request, response) {
  let body;
  response.setHeader("Access-Control-Allow-Origin", "*");

  if (request.url) {

    var regex = /[?&]([^=#]+)=([^&#]*)/g,
    url = request.url,
    params = {},
    match;
    while(match = regex.exec(url)) {
        params[match[1]] = match[2];
    }

    response.writeHead(200);
    for (const composer of composersArr) {
      if (composer.name.toLowerCase() === params.name) {
        body = composer;
      }
    }
  }
  response.end(`${JSON.stringify(body)}`);
  // For BROWSER - we need to use "JSON.stringify() on body
}

// STARTING THE SERVER:
server.listen(port, host, () =>
  console.log(`Server listening on ${host}:${port}`)
);

// module.exports = server; // Exporting this function so we can initiate our server elsewhere (separation of concerns)
