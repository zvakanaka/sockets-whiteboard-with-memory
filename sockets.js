const socket = require('socket.io')

const instructionsCache = []

module.exports = function sockets(server) {
  const io = socket.listen(server)

  io.on('connection', function onConnection(socket) {
    console.log(`Connected to socket, id: ${socket.id}`)

    instructionsCache.forEach(instruction => {
      socket.emit('instructionCanvas', instruction)
    })

    socket.on('instruction', async (data) => {
      // console.log('receiving instruction', data) 
      instructionsCache.push(data)
      socket.broadcast.emit('instructionCanvas', data)
    })
  })
}
