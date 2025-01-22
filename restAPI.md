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
