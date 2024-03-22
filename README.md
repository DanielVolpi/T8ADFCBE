<p align="center">
  <img src="https://github.com/DanielVolpi/T8ADFCBE/assets/21015934/0d88ca34-c919-4e28-b6e1-31a47bc9a242" alt="T8ADEV_Front_ChallengeBackEnd">
</p>

# T8A Dev Front Challenge (BackEnd)

This repository contains the API routes used by T8A Dev Front Challenge (FrontEnd) to operate.

## Installing and Running

To run this project locally you just need to:
* Clone the repository
* Install the Packages
* Create an .env file in the root of the project
* Add the needed keys to the .env file
* Run the project

Here is how to do it:

1) In your terminal:
```shell
git clone https://github.com/DanielVolpi/T8ADFCBE.git
cd T8ADFCBE
npm install
```

2) Inside the .env file:
```plaintext
PORT=<your desired port to host your instance - for example: 4000>
DATABASE_URI=<the URI of the MongoDB - you will need to provide your own or ask me for mine, sorry>
```

3) Again in your terminal:
```shell
npm run devStart
```

## Features

You have 2 possible routes to use:
* /specialists
* /users

Both support GET, POST and DELETE requests.

### Samples

Let's assume you are running your BackEnd at port 4000 (Do you remember it? The one from the .env under the PORT key).

For both GET operations you will have to run "http://localhost:4000/specialists" and "http://localhost:4000/users".

For the DELETE ones, it is basically the same jist "http://localhost:4000/specialists/:id" and "http://localhost:4000/users/:id".

You can get the value to put in the ":id" from the "_id" field in the GET response. (You see? All is coming together nicely.)

For the POST operations the endpoints are the same ones as the GET, but on the body you will have to use "raw" and "JSON" and the data to provide is as follows:

* for specialists:
```shell
   {
    "firstname": <string>,
    "lastname": <string>,
    "position": <string>
  }
```
* for users:
```shell
   {
    "firstname": <string>,
    "lastname": <string>,
    "email": <string>,
    "country": <string>,
    "phoneNumber": <string>,
    "position": <string>
  }
```

## Special Thanks

If you read this README to this point, thanks to you. ✨
