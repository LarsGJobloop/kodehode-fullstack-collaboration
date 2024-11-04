import * as server from "./server.js";

console.log("Main Application Running");
const serverStatus = await server.GetServerStatus();
console.log(serverStatus);
