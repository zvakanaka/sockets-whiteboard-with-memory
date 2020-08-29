const router = require('express').Router()
const renderPage = require('./lib/renderPage')
const { read } = require('./lib/fileAsync')

router.get('/', async (req, res) => {
  const pageContent = await read('./views/index.html')
  const styleContent = await read('./views/main.css')

  res.status(200).send(renderPage('Whiteboard', pageContent, styleContent))
})

module.exports = router
