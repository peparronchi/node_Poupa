var http = require('http');

var server = http.createServer( (req, res) => {
    var categoria = req.url;
    console.log(categoria);

    switch(categoria) {
        case '/tecnologia':
            res.end('<html><body>Portal de Tecnologia</body></html>');
            break;
        case '/moda':
            res.end('<html><body>Portal de moda</body></html>');
            break;
        case '/beleza':
            res.end('<html><body>Portal de beleza</body></html>');
            break;
        default:
            res.end('<html><body>Portal de noticias</body></html>');
            break;
    }
    
});

server.listen(3000);