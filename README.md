## Codenames

Implementación del juego Codenames en español utilizando GraphQL, Apollo Client (con subscriptions) y React.

## Uso

**Instalar dependencias de server y client**

```sh
cd client
yarn install
cd ../server
yarn install
```

**Crear base de datos**

Ejemplo con sqlite, pero puede cambiarse la conexión en `server/knexfile.js`

```
cd server
touch db.sqlite
```

**Correr las migraciones**

```
yarn run db:migrate
```

**Iniciar el servidor**

```
cd server
yarn start
```

**Iniciar el cliente**

```
cd client
yarn start
```
