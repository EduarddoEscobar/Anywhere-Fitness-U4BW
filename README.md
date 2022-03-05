## The Stack and Tools

1. Web server: [Node & Express](https://expressjs.com/)
2. Development database: [PostgreSQL 14](https://www.postgresql.org/download/)
3. Dev database Graphical-User Interface tool: [pgAdmin 4](https://www.pgadmin.org/download/)
4. Dev database Command-Line Interface tool: [psql](https://www.postgresql.org/docs/14/app-psql.html)

**Note:** **pgAdmin 4** and **psql** should be bundled with the PostgreSQL installer, but they might not be the latest versions.

5. Production cloud service: [Heroku](https://id.heroku.com/login)
6. Prod database: [Heroku Postgres Addon](https://devcenter.heroku.com/articles/heroku-postgresql)
7. Prod Command-Line Interface tool: [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Installation of PostgreSQL on the Development Machine

Install [Postgres](https://www.postgresql.org/download/) on your computer, taking into account that getting psql and pgAdmin 4 up and running might require a bit of research and effort.

1. Leave the default options during the Postgres installation wizard (components, location, port number).
2. You will be asked to create a password for the superadmin "postgres" db user. Enter a simple string using only letters (e.g. "password").
3. No need to execute the "Stack Builder" at the end of the installation. You can safely uncheck that and exit the wizard.
4. The first time you open pgAdmin 4 you will be asked to create another password, this time a master password to be able to use pgAdmin.

## Starting a New Project

- Create a new repository using this template, and clone it to your local.
- Create a `.env` file and follow the instructions inside `knexfile.js`.
- Fix the scripts inside `package.json` to use your Heroku app.

## Scripts

- **start** Runs the app with Node.
- **server** Runs the app with Nodemon.
- **migrate:dev** Migrates the local development db to the latest.
- **rollback:dev** Rolls back migrations in the local dev db.
- **seed:dev** Truncates all tables in the local dev db.
- **deploy** Deploys the main branch to Heroku. Must login to the Heroku CLI and add Heroku as a remote.
- **test** Runs tests.

**The following scripts NEED TO BE EDITED before using: replace `YOUR_HEROKU_APP_NAME`**

- **migrate:prod** Migrates the Heroku database to the latest.
- **rollback:prod** Rolls back migrations in the Heroku database.
- **databaseh** Interacts with the Heroku database from the command line using psql.
- **seed:prod** Runs all seeds in the Heroku database.

## Endpoints

**Auth routes**
| Routes                    | Returns                               |
| :------------------------ | :------------------------------------ |
| [POST] /api/auth/register | Returns the newly registered user     |
| [POST] /api/auth/login    | Returns a token and a welcome message |

**User routes**
| Routes                | Returns                            |
| :-------------------- | :--------------------------------- |
| [GET]/api/users       | Returns an array of all users      |
| [GET]/api/users/:id   | Returns the user with the given id |
| [PUT]/api/users/:id   | Returns the updated user           |
| [DELETE]/api/users/:id| Returns the deleted user           |

**Roles routes**
| Routes                 | Returns                            |
| :--------------------- | :--------------------------------- |
| [GET]/api/roles        | Returns an array of all roles      |
| [GET]/api/roles/:id    | Returns the role with the given id |
| [POST]/api/roles       | Returns the newly created role     |
| [PUT]/api/roles/:id    | Returns the updated role           |
| [DELETE]/api/roles/:id | Returns the deleted role           |

**Classes routes**
| Routes                   | Returns                             |
| :----------------------- | :---------------------------------- |
| [GET]/api/classes        | Returns an array of all classes     |
| [GET]/api/classes/:id    | Returns the class with the given id |
| [POST]/api/classes       | Returns the newly created class     |
| [PUT]/api/classes/:id    | Returns the updated class           |
| [DELETE]/api/classes/:id | Returns the deleted role            |

## Deployed App
Check out the [Deployed App](https://anywhere-fitness-unit4-bw.herokuapp.com/)
## Video Demonstration

The following demo explains how to set up a project using PostgreSQL and Heroku.

[![Setting up PostgreSQL for Build Week](https://tk-assets.lambdaschool.com/e43c6d1e-5ae8-4142-937b-b865d71925fb_unit-4-build-week-project-scaffolding.png)](https://bloomtech-1.wistia.com/medias/2625bl7sei)
