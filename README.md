A resource endpoint that
receives a userId as query string parameter
and that returns that user’s email
address and profile picture uri

Run from a terminal window with the command:
nodemon index.js

Node.js version: v16.13.1
Express

Then go to a browser and go to one of these URLs to test it:
http://localhost:3000/api/users/1
or
http://localhost:3000/api/users/2
or
http://localhost:3000/api/users/3

A string containing the user's email address and a URL of the picture will be returned.

If an incorrect number is put as the user number, for example:
http://localhost:3000/api/users/71 (71 or any other number)
then that will result in this error message being returned:
The user with the given ID was not found.

http://localhost:3000/api/users
displays the list of users

The pictures URLs are from a public API
