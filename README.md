## Voltbras challenge
Challenge using the GraphQl to find planets using the [Arcsecond] API

### Running the application

The application is built with Node.js and already has all environment configured with docker. To start the application you will need `docker` and `docker-compose` installed on the machine. Having that you may run:

```shell
docker-compose up -d
```

And then the application and database will be started:

```shell
nginx-proxy-voltbras is up-to-date
voltbras-challenge_postgres_1 is up-to-date
voltbras-challenge_node_1 is up-to-date
voltbras-challenge_adminer_1 is up-to-date
```

The application will be available on [http://voltbras-challenge.localhost](http://voltbras-challenge.localhost) by default.

## Running the tests

To run the test locally on your machine, you can run:

```bash
docker-compose run node yarn test
```

## Built With

* [ApolloGraphQl](https://www.apollographql.com/docs/apollo-server/) - Apec-compliant GraphQL server
* [PostgreSQL](https://www.postgresql.org/) - SQL database
* [Typescript](https://www.typescriptlang.org/) - Typed superset of JavaScript
* [Jest](https://jestjs.io/) - Delightful JavaScript Testing Framework
* [Nginx-Proxy](https://github.com/nginx-proxy/nginx-proxy) - Reverse proxy docker container to localhost

[Arcsecond]: https://api.arcsecond.io/swagger/
