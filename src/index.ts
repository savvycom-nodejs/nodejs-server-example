import "dotenv/config";
import cors from "cors";
import express from "express";

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/todos", (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;

  // handle data with pagination here
  console.log(page, limit);

  res.json([
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
  ]);
});

app.post("/api/todos", (req, res) => {
  const userId = req.body.userId;
  const title = req.body.title;
  const completed = req.body.completed;

  // handle create new task here
  console.log(userId, title, completed)

  res.send({data: true});
});

app.listen(port, function () {
  console.log("Server running at http://127.0.0.1" + ":" + port + "/");
});
