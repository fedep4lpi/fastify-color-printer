const colors = require('colors')

module.exports = function (fastify, opts, done) {
    fastify.decorate('printer', colors)
    done()
}