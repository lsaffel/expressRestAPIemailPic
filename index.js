const express = require('express');
const app = express();

const users = [
  {
    id: 1,
    name: 'John Doberman',
    email: 'john@email.com',
    pic: 'https://images.dog.ceo/breeds/doberman/n02107142_9621.jpg',
  },
  {
    id: 2,
    name: 'Fred Brabancon',
    email: 'fred@gmail.com',
    pic: 'https://images.dog.ceo/breeds/brabancon/n02112706_1237.jpg',
  },
  {
    id: 3,
    name: 'Jane Saluki',
    email: 'jane@hotmail.com',
    pic: 'https://images.dog.ceo/breeds/saluki/n02091831_151.jpg',
  },
];

// main page, at localhost:3000
app.get('/', (req, res) => {
  res.send('This uses node and express!!');
});

// displays the list of users, at localhost:3000/api/users
app.get('/api/users', (req, res) => {
  res.send(users);
});

// takes the URL with the user id number at the end of it.
// Displays the email address and picture URL for that user,
// in the form of a concatenated string
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  // check if the user exists. If not, then return an error message and exit.
  if (!user)
    return res.status(404).send('The user with the given ID was not found.');

  // The user exists, so combine the user's email with the picture URL and return that string
  const userEmailAndPic = user.email + ',  ' + user.pic;
  res.send(userEmailAndPic); // send a string combining the email and pic url
});

app.listen(3000, () => console.log('Listening on port 3000..'));
