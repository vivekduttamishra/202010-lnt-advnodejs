const http = require("http");
const heapdump = require("heapdump");

const heapProfile = require('heap-profile');
 
heapProfile.start();
 
// Write a snapshot to disk every hour
setInterval(() => {
  heapProfile.write((err, filename) => {
    console.log(`heapProfile.write. err: ${err} filename: ${filename}`);
  });
},  20 * 1000).unref();

const requestLogs = [];
const server = http.createServer((req, res) => {
  if (req.url === "/heapdump") {
    heapdump.writeSnapshot((err, filename) => {
      console.log("Heap dump written to", filename);
    });
  }
  requestLogs.push({ url: req.url, date: new Date() });
  res.end(JSON.stringify(requestLogs));
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");
console.log(
  `Heapdump enabled. Run "kill -USR2 ${
    process.pid
  }" or send a request to "/heapdump" to generate a heapdump.`
);