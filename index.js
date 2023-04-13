const fp = require('fastify-plugin')
const colors = require('colors')

module.exports = fp(function (fastify, opts, done) {
    fastify.decorate('printer', colors)
    done()
})