/// <reference types="node" />

import { Color } from 'colors'
import { FastifyPluginCallback } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    bcrypt: {
      printer: Color
    }
  }
}

declare const fastifyColorPrinter: FastifyPluginCallback
export default fastifyColorPrinter