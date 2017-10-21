const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    DIRTREE: require('./doc-directory-tree.js')
  }
}

const markdownPathFull = path.join('./', 'README.md')
markdownMagic(markdownPathFull, config)

const markdownPath = path.join('./src', '../README.md')
markdownMagic(markdownPath, config)
