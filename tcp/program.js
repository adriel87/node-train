const net = require('net')

const PORT = process.argv[2]


const server = net.createServer(cliente=>{
    console.log('se ha conectado un cliente');
   
    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let minute = new Intl.DateTimeFormat('es-ES', {minute:'2-digit'}).format(d);
    let hour = new Intl.DateTimeFormat('es-ES', {hour:'numeric'}).format(d);
    // hour = hour.split(' ').shift()
    // console.log(`${da}-${mo}-${ye}`);
    // let formatDate = date.split('/').join('-')
    cliente.write(`${ye}-${mo}-${da} ${hour}:${minute}`)
    cliente.write('\n')
    cliente.end()
    // cliente.pipe(cliente)
})

server.listen(PORT,()=>{
    console.log('servidor TCP levantado')
})
