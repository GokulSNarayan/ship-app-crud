# Ship App CRUD - Readme


*This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



## Getting Started - Local Development

Clone the repo and open the project folder

1. Install dependencies

```bash
pnpm install
```

`Note: You can use any package manager - npm | yarn | bun instead of pnpm`


2. Copy the `.env` file:

```sh
cp .env.example .env
```


3. Update the following values in the `.env` file:

```sh
NODE_ENV=development

DB_USER=your-value-here

DB_PASSWORD=your-value-here

DB_NAME=your-value-here
```


4. Run the database in docker

```sh
docker-compose up -d db
```

`Note: -d is to run in detached mode in docker`


5. Migrate the database schema

```sh
pnpm run db:migrate
```


6. Seed the database

```sh
pnpm run db:seed
```


8. Run dev server

```shell
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Running Production Build

1. Run

```bash
docker-compose up
```

If docker-compose is not installed ref this [link](https://docs.docker.com/compose/install/) to install the dependencies


2. Migrate the database schema

```sh
pnpm run db:migrate
```


3. Seed the database **(If Needed)**

```sh
pnpm run db:seed
```


Once the docker is up and running you can do the integration(e2e) tests.

`Note: End to end tests can also be run on the development server`

## Testing

Running end to end tests

```bash
pnpm run test:e2e
```
  

Running unit tests

```bash
pnpm run test
```
  
For all the [async server components](https://nextjs.org/docs/app/building-your-application/testing/vitest) and async actions unit test framework is not supported and hence e2e tests are used here.


## Tech Stack

- React using NextJs
- Shadcn
- Drizzle-Orm
- Tailwind-CSS
- PostgreSQL
- Tanstack Table
- Tanstack Query
- Vitest
- React Testing Library
- Playwright
- Docker

