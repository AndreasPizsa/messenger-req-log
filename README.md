![Build Status](https://img.shields.io/travis/AndreasPizsa/messenger-req-log.svg?style=flat-square) ![Coverage](https://img.shields.io/codecov/c/github/AndreasPizsa/messenger-req-log.svg?style=flat-square) [![NPM version](https://img.shields.io/npm/v/messenger-req-log.svg?style=flat-square)](https://npmjs.org/package/messenger-core) [![Greenkeeper badge](https://badges.greenkeeper.io/AndreasPizsa/messenger-req-log.svg)](https://greenkeeper.io/)

# messenger-req-log

> Use your web server’s request logger in your bot  (`messenger-core` plugin)

This plugin will output your Bot’s log messages to the web server’s logger. Just use `context.log[info|debug|error]` as usual and benefit from the web server’s log configuration (log levels, log targets, etc)


## Installation

```sh
$ npm install --save messenger-req-log
```

## Usage

```js
const MessengerLog = require('messenger-req-log')

function createMyBot(messenger) {
  return messenger
    .use(MessengerLog())
    .use((message, context) => {
      context.log.info('Hello, World!')
    })  
}
```

### with Express or Restify

```js
const app = require('express')()
const messenger = require('express-messenger')()

app.post('/',
  require('body-parser').json(),
  createMyBot(messenger)
)
```

### with Micro

```js
const messenger = require('micro-messenger')()
module.exports = createMyBot(messenger)
```

## Ideas

+ Create & use a child logger if the server’s logger has a `child()` function ([like Bunyan does](https://github.com/trentm/node-bunyan#logchild))

## License

MIT © [Andreas Pizsa](https://github.com/AndreasPizsa)
