const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

var users = [];
fs.readFile('./user.json', 'utf-8', (error, data) => {
  if (error) {
    console.log(`Couldnt read file ${error}`);
  }
  else {
    users = JSON.parse(data);
  }

});

app.get('/', (req, res) => {
  res.send("CRUD WITH NODE-JS");
});

app.get('/api/users', (req, res) => {
  res.send(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User does not exist!");
  res.send(user);
});

app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    password: req.body.password,
    gender: req.body.gender,
    birthdate: req.body.birthdate,
    age: req.body.age,
    country: req.body.country,
    phone: req.body.phone
  }
  users.push(user);
  fs.writeFile("./user.json", JSON.stringify(users), "utf-8", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Writing file successful...");
    }
  });
  res.send(user);
});

app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User does not exist!");  
  user.name = req.body.name;
  user.password = req.body.password;
  user.gender = req.body.gender;
  user.birthdate = req.body.birthdate;
  user.age = req.body.age;
  user.country = req.body.country;
  user.phone = req.body.phone;

  fs.writeFile("./user.json", JSON.stringify(user), "utf-8", (error) => {
    if (error) {
      console.log(error);
    } else {
      res.send(user);
      console.log("Updated file successfully...");
    }
  });
});

app.delete('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User does not exist!");
  const position = users.indexOf(user);
  users.splice(position, 1);
  fs.writeFile("./user.json", JSON.stringify(users), "utf-8", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Deleted data successfully...");
    }
  });
  res.send(user);
});

app.listen(80, () => {
  console.log("RUNNING ON PORT 80");
});