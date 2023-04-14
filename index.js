const fp = require('fastify-plugin')
const colors = require('colors')

const printer = (fastify, opts, done) => {
    fastify.decorate('printer', colors)
    done()
}

/** @module  */
module.exports = fp(printer)