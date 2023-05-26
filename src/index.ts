import * as http from "http";
import * as dotenv from "dotenv";
import * as fs from "fs";
dotenv.config();

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Max-Age", 2592000); // 30 days
  if (
    (req.url === "/api/todos") &&
    req.method === "GET"
  ) {
    res.end(
      JSON.stringify([
        {
          userId: 1,
          id: 1,
          title: "data test 1",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "data test 2",
          completed: false,
        },
      ])
    );
  } else if (req.url === "/tcs" && req.method === "GET") {
    res.end("HI TSC");
  } else {
    res.statusCode = 404;
    res.end("404: Not Found");
  }
});

server.listen(port, function () {
  console.log("Server running at http://127.0.0.1" + ":" + port + "/");
});

// list method GET 5 first
// create method POST
