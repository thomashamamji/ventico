const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const cors = require('cors');
const fs = require('fs');

// No user session
// MongoDB later

var server = express();

server.use(cors());

server.use(logger('dev'));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use(session({ secret: 'our new secret'}));

server.get('/ac/on', (req, res) => {
  console.log(`Recepeted ON from mobile`);

  fs.writeFile("gpio.txt", "1", (err) => {
    if (err)
    console.log(err);
    else {
       console.log("File written successfully\n");
       console.log("The written has the following contents:");
       console.log(fs.readFileSync("gpio.txt", "utf8"));
    }
  });

  res.json({ success : true });
});

server.get('/ac/off', (req, res) => {
  console.log(`Recepeted OFF from mobile`);
  
  fs.writeFile("gpio.txt", "0", (err) => {
    if (err)
    console.log(err);
    else {
       console.log("File written successfully\n");
       console.log("The written has the following contents:");
       console.log(fs.readFileSync("gpio.txt", "utf8"));
    }
  });

    res.json({ success : true });
});

// 1 && 2

server.get('/ac1/on', (req, res) => {
  console.log(`Recepeted ON from mobile`);

  fs.writeFile("gpio23.txt", "1", (err) => {
    if (err)
    console.log(err);
    else {
       console.log(fs.readFileSync("gpio23.txt", "utf8"));
    }
  });

  res.json({ success : true });
});

server.get('/ac1/off', (req, res) => {
  console.log(`Recepeted OFF from mobile`);
  
  fs.writeFile("gpio23.txt", "0", (err) => {
    if (err)
    console.log(err);
    else {
       console.log(fs.readFileSync("gpio23.txt", "utf8"));
    }
  });

    res.json({ success : true });
});

server.get('/ac2/on', (req, res) => {
  console.log(`Recepeted ON from mobile`);

  fs.writeFile("gpio24.txt", "1", (err) => {
    if (err)
    console.log(err);
    else {
       console.log(fs.readFileSync("gpio24.txt", "utf8"));
    }
  });

  res.json({ success : true });
});

server.get('/ac2/off', (req, res) => {
  console.log(`Recepeted OFF from mobile`);
  
  fs.writeFile("gpio24.txt", "0", (err) => {
    if (err)
    console.log(err);
    else {
       console.log(fs.readFileSync("gpio24.txt", "utf8"));
    }
  });

    res.json({ success : true });
});

// catch 404 and forward to error handler
server.use(function(req, res, next) {
    res.status(404).json({ msg : "No such route" });
});

// error handler
server.use(function(err, req, res, next) {
// render the error page
res.status(err.status || 500);

if (req.user) {
    res.json({ msg : err.message });
    console.log(err.message);
} else {
    res.json({ msg : err.message });
    console.log(err.message);
}
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on port ${port}`));
