# Virtual Pet

A JavaScript pet with the following features:

 - You can give them a name
 - They can get older
 - As they get older, they get hungrier and less fit
 - You can walk your pet to increase it's fitness. 🏃
 - You can feed your pet to decrease it's hunger. 🍕
 - You can talk to your pet to see if it needs feeding or walking
 - If your pet gets too hungry or unfit, it will DIE 💀
 - If your pet gets to 30 days old it will DIE 😢


## Getting Started

Fork this repository and clone down your fork.

Change into the cloned folder.

There are two folders: /src and /__tests__. 

### Prerequisites

Node REPL for feature testing
Uses Jest for unit testing


### Installing

Run npm install to install the necessary libraries required for Node.js to run.

You can initialize an NPM project using the command npm init.
This will lead you through some steps to create a package.json file, the config file for your project.

To install Jest, run npm install -D jest

This will install Jest as a development dependency.

Alter the package.json file so that the test value is "jest".

This means that when you run npm test, it will run jest for you.
```

### Running the tests

To test pets.js in Node REPL:
    type `node` in commend line
    type `const Pet = require('../src/pet');`

To run unit tests using jest:
    type `npm test -- pet`

