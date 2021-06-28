const http = require("http"); // accessing Node's built-in "http" module
const server = http.createServer(requestHandler); // Request handler function is passed as an argument!;
const port = 5000;
const host = "localhost";
const composersArr = require("./composer-data");

// INSTRUCTING THE SERVER ON HOW TO LISTEN - creating a Request Handler function:
function requestHandler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  if (request.url) {
    response.writeHead(200);
    for (const composer of composersArr) {
      if (composer["name"] === request.url.slice(1)) {
        let body = composer;
      }
    }
  }
  response.send(body);
  // For BROWSER - we need to use "JSON.stringify() on body
}

// STARTING THE SERVER:
server.listen(port, host, () =>
  console.log(`Server listening on ${host}:${port}`)
);

// module.exports = server; // Exporting this function so we can initiate our server elsewhere (separation of concerns)
