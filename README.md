# Numbers - Microservicios

# Instalaciones

Se necesita tener NPM y docker previamente instalados.

Ir a la capeta ./number-validator
ejecutar

```bash
$ npm install
```

Luego ir a la capeta ./db-connector
ejecutar

```bash
$ npm install
```

volver a la capeta raiz
crear el archivo .env

```

#MONGO
MONGO_IP=mongo
MONGO_PORT=27017
MONGO_USER=admin
MONGO_PASSWORD=admin
MONGO_DB=Numbers

# APIS
VALIDATOR_API_URL=http://validator:3000
CONNECTOR_API_URL=http://connector:3001

# NATS
NATS_URL=nats://nats:4222

#NAME_EVENTS
EVEN_EVENT = send_number_even
ODD_EVENT = send_number_odd

# QUEUES
CONNECTOR_NAME=NUMBER.DB.CONNECTOR

#PARAMS
MAX_RECORDS = 10
BATCH_LENGTH = 10
```

luego ejecutar

```bash
$ docker-compose up
```

por ultimo importar la collecion de postman para realizar las pruebas de los endpoints
