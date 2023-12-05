const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')

function writeFile(cb) {
    fs.writeFile(
        path.join(__dirname, 'urls.json'),
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err
            cb('Operação realizada com sucesso!')
        }
    )
}

http.createServer((req, res) => {
    
    const { name, url, del } = URL.parse(req.url, true).query

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    if (!name || !url)
        return res.end(JSON.stringify(data))

    if (del) {
        data.urls = data.urls.filter( item => item.url != url )
        return writeFile( message => res.end(message+' Deletou.') )
    }

    data.urls.push( { name, url } )
    return writeFile( message => res.end(message+' Inserção.') )

}).listen(3000, () => console.log('Api rodando!'))