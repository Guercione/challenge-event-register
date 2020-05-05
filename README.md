# CHALLENGE EVENT REGISTER - FRONTEND AND FRONTEND

## BACKEND

### Database: Mongodb

- https://docs.mongodb.com/manual/

### Test: Jest / Supertest

- https://jestjs.io/
- https://github.com/visionmedia/supertest

## How to run

- npm install / yarn
- npm run start / yarn start
- Endpoint: http://localhost:3333
- Edit `MONGODB_URI` on `.env` with your mongodb URI

### GET - /event/:id

### POST - /event

```
body: {
	"name": "Guilherme",
	"lastName": "Vecino",
	"email": "guilherme.vecino@gmail.com",
	"eventDate": "2020-05-22T15:10:48.550Z"
}
```

### DELETE - /event/:id

#### Warning: import "postman-collection.json" to the Postman

---

## FRONTEND

### UI: Material UI

https://material-ui.com/

### Test: Jest / React Testing Library

- https://jestjs.io/
- https://testing-library.com/

## How to run

- npm install / yarn
- npm run start / yarn start
- Access: http://localhost:3000

## How to run

- npm install / yarn
- npm run start / yarn start
- Endpoint: http://localhost:3333
- Edit `REACT_APP_API_URL` on `.env` with the API URI
