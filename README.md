# Petstore api tests

This repository contains the postman collection to test `Petstore` APIs and also provides a runner that's built using `newman` node module

## Automation workflow

1. Add a pet
2. Find pet by id (validate the pet information)
3. Update name of the pet
4. Find pet by id (validate the name changes are reflected)
5. Delete the pet
6. Find pet by id (validate pet details are not found)

**Note:**

- There seems to be an issue when retrieving a pet from the existing pets. Some of the pet ids throwing an error when fetching them by respective ids. To get over this, a new pet is added before retrieving the pet details
- For simplicity purpose, pet id is fixed when adding the pet

## Pre-requisites

For using newman (command-line collection runner for postman) and generating a HTML execution report, ensure that you are on node >= v16.x

## Setup & Installation

1. Clone the repository "https://github.com/saiudayakella/petstore-api-tests.git" (or) Unzip the project

2. To run the postman collection in GUI mode (via collection runner), ensure `Postman` is installed in the machine

3. To run the collection using Newman CLI, install `newman` and the `newman-reporter-html` node modules as global dependencies such that they can be used to run from anywhere on the machine

```console
$ npm i -g newman newman-reporter-html
```

4. To run the collection using Newman as node library i.e. via an npm script, navigate to the project root folder and install the dependencies

```console
$ npm i
```

## Run the api tests/postman collection

There are multiple options to run the collection:

### Using collection runner

1. Launch postman and import the postman collection `Petstore.postman_collection.json`
2. As this collection only tests `Pet` specific APIs, select the root collection `Petstore` (or) the specific `Pet` sub-collection and run the collection by leaving the default options

### Using Newman CLI

1. Open terminal and navigate to the project root folder
2. Run the collection by specifying the collection, desired reporters and the path to which the HTML report has to be exported in the machine

```console
$ newman run "./Petstore.postman_collection.json" --reporters cli,html --reporter-html-export "./reports/report.html"
```

### Using Newman as node library

1. Open terminal and navigate to the project root folder
2. Run the collection via the npm script

```console
$ npm run api:test
```

**Note:**
When the collection is run via Newman by specifying the reporter options (as mentioned above), a HTML report gets generated under `../reports` folder
