module.exports = function () {
  return function (message, context) {
    if (context.http && context.http.req && context.http.req.log) {
      context.log = context.http.req.log
    }
  }
}
