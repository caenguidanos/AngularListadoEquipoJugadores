## AngularListadoEquipoJugadores

### 1. Run `db`

```bash
# from root dir
docker run -v "$(pwd)/db:/data/db" -d -p 27017:27017 mongo:latest
```

### 2. Run `backend`

- PORT: 3000

```bash
cd backend && \
    npm i && \
    npm run start:dev
```

### 3. Run `frontend`

- PORT: 4200

```bash
cd frontend && \
    npm i && \
    npm start
```

### 4. Credentials

| username  |       email       | password |
| :-------: | :---------------: | :------: |
| jmourinho | jose@mourinho.com |  261963  |
|  zzidane  |   z@zidane.com    |  231972  |
