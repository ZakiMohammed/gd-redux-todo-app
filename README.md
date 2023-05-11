# React Redux Getting Started

GD App Architecture Communities Call - (React Redux Toolkit).

## Initial Setup

```
npm create vite@latest

cd gd-redux-todo-app
npm i
npm run dev
```

## Run App

```
npm run dev
npm run server
```

## JSON Server

Install `json-server` globally:

```
npm install -g json-server
```

Read about json-server from here https://www.npmjs.com/package/json-server.

```
{
  "todos": [
    {
      "_id": "64326916cc99aa92789117d0",
      "title": "Ma. Francisco"
    }
  ]
}
```

Create `routes` file:

```
{
  "/api/*": "/$1"
}
```

Create `json-server` config file:

```
{
  "port": 3000,
  "routes": "server/routes.json",
  "watch": true,
  "id": "_id"
}
```

Add npm script in package.json file:

```
"scripts": {
  "server": "json-server server/db.json --config server/json-server.json"
}
```

## Add Dependencies

```
npm i react-icons
npm i react-router-dom
npm i axios
```

## Add Redux Toolkit

```
npm i @reduxjs/toolkit
npm i react-redux
```# gd-redux-todo-app
