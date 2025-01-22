# Rest API

This is our first Rest Api we have practiced to create in node. It provides CRUD operations on a resource, which is defined in the datastorage module.

## Overview

this server uses Express for routing and CORS to handle cross-origin requests. You can use variable sources: employees and computers.

## Route

http://localhost:3000/api/computers

## This API works for both endpoints: computers and employees

inside the storageLayer.js: you need to uncomment line 11-13 and comment line 7-9
to change the route to

http://localhost:3000/api/employees

## Running the Server

1. Clone this repo to your local machine.
2. Install dependencies:

```shell
npm install
```

3. Start the server:

```shell
node restServer.js
```

## UI

4. you can run this program also in your browser with the provided UI: just drag and drop the html file inside the folder: restTester to your browserwindow and put in the endpoint: "computers"
