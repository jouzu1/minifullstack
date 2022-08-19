There are 2 branches, backend and frontend branch

To start the server of backend = npm start, using localhost:8080

How To Access endpoint
---
- GET /get
- POST /findOne
````
Request Body
{
  "username" : "Test",
  "email"    : "Test"
}
````
- POST /create
````
Request Body
{
  "username" : "Test",
  "email"    : "Test"
}
````
- PUT /update/:username
````
Request Body
{
  "username" : "Test",
  "email"    : "Test"
}
````
- DELETE /delete/:username
