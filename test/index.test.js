const test = require('ava')
const requestLog = require('../')()

test('it will leave context unchanged if there’s no `context.http.req.log`', t => {
  const message = {}
  const EXPECT = { http: { req: { log: undefined } } }
  const context = Object.assign({}, EXPECT)
  requestLog(message, context)
  t.deepEqual(context, EXPECT)
})

test('it sets `context.log` to `context.http.req.log`', t => {
  const EXPECT = Math.random().toString(36).substr(2)
  const message = {}
  const context = { http: { req: { log: EXPECT } } }
  requestLog(message, context)
  t.is(context.log, EXPECT)
})
