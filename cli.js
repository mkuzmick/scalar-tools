#!/usr/bin/env node

const scalarTools = require('./index')
const yargs = require('yargs').argv

scalarTools.scalarImagesFromFolder(yargs.folder)
