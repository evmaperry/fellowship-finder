const express = require('express');
const path = require('path');
const User = require('./routers/userRouter');
const { sequelize } = require('./db/index');

// initilize App
const app = express();

// connect App to client
const clientPath = path.resolve(__dirname, '../dist');
app.use(express.static(clientPath));

// configure App
app.use(express.json());

//ROUTERS
app.use('/api/user', User);

//ROUTERS
app.use('/api/user', User);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
});

// ADD APP ROUTERS
// app.get('/api/users', (req, res) => {
//   User.findAll()
//     .then((users) => {
//       res.status(200).send(users);
//     })
//     .catch((err) => {
//       console.error('Failed to FIND ALL users:', err);
//       res.sendStatus(500);
//     });
// });


module.exports = app;
