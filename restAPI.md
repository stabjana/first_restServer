# Web APIs - REST server

## first steps

```shell
npm init -y
npm i express cors
```

## Cors

cors is for fetching data from somewhere else - you need cors
access data directly from the source
allowing access to data from a webpage that is not launched from the same server.

## API

GET http:localhost:3000/api/computers HTTP/1.1 (gives back an array bzw. a collection of data)
`computers` = endpoint (getting all computers)
`computers/2`= endpoint 2 (getting one computer out of computers)

method what to do with the endpoint number

PUT can update and add data

## Methods

- GET
- POST
- PUT
- DELETE

- OPTIONS
- HEAD

- PATCH
- TRACE
- CONNECT

#### object

```js
const computerObject={
    id:1,
    name:"Big Machine",
    price:30000
},
{
    id:2,
    name:"Computer",
      price:35000
}
```

## Usage with fetch

Lets assume cors situation

### GET

```js
const options = {
  method: "GET",
  mode: "cors",
};

const data = await fetch(urlToEndpoint, options);
const jsonData = await data.json();
```

GET is default, so you can just do the fetch

```js
const data = await fetch(urlToEndpoint, { mode: "cors" });
const jsonData = await data.json();
```

all computers:

```js
fetch("http:localhost:3000/api/computers", { mode: "cors" });
```

one computer:

```js
fetch("http:localhost:3000/api/computers/2", { mode: "cors" });
```

### DELETE

```js
const options = {
  method: "DELETE",
  mode: "cors",
};

const data = await fetch(urlToEndpoint, options);
const jsonData = await data.json();
```

#### Delete one computer (id=2)

```js
fetch("http:localhost:3000/api/computers/2", options);
```

### POST and PUT

#### POST

### `POST`

```js
const options = {
  method: "POST",
  mode: "cors",
  body: JSON.stringify(computerObject),
  headers: { "Content-Type": "application/json" },
};

const data = await fetch(urlToEndpoint, options);
const jsonData = await data.json();
```

```js
fetch("http://localhost:3000/api/computers", options);
```

```js
const options = {
  method: "PUT",
  mode: "cors",
  body: JSON.stringify(conmputerObject),
  headers: { "Content-Type": "application/json" },
};

const data = await fetch(urlToEndpoint, options);
const jsonData = await data.json();
```

```js
fetch("http:localhost:3000/api/computers", options);
```

#### PUT

```js
const options = {
  method: "POST",
  mode: "cors",
  body: JSON.stringify(conmputerObject),
  headers: { "Content-Type": "application/json" },
};

const data = await fetch(urlToEndpoint, options);
const jsonData = await data.json();
```

```js
fetch("http:localhost:3000/api/computers/2", options);
```
