#! /usr/bin/env node

'use strict'

const juice = require('juice')
const getStdin = require('get-stdin')
const argv = require('minimist')(process.argv.slice(2))

getStdin().then(str => {
  process.stdout.write(juice(str, argv))
})
