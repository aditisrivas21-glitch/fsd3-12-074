import http from "http";

import {
  addUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "./users.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getAllUsers()));
  } else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const user = JSON.parse(body);
      const userCreated = addUser(user);
      res.end(JSON.stringify({ msg: "user added", userCreated }));
    });
  } else if (req.url.startsWith("/api/users/") && req.method === "GET") {
    const userId = Number(req.url.split("/").pop());
    const userFound = getUserById(userId);
    if (!userFound) {
      res.end(JSON.stringify({ msg: "User not found" }));
    } else res.end(JSON.stringify(userFound));
  } else if (req.url.startsWith("/api/users/") && req.method === "PUT") {
    const userId = Number(req.url.split("/").pop());
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const user = JSON.parse(body);
      const userUpdated = udpateUser(userId, user);
      if (!userUpdated) {
        res.end(JSON.stringify({ msg: "User not found" }));
      } else res.end(JSON.stringify(userUpdated));
    });
  } else if (req.url.startsWith("/api/users/") && req.method === "DELETE") {
    const userId = Number(req.url.split("/").pop());
    const isDeleted = deleteUser(userId);
    if (!isDeleted) {
      res.end(JSON.stringify({ msg: "User not found" }));
    } else res.end(JSON.stringify({ msg: "user deleted" }));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => console.log("prg7 is running"));
