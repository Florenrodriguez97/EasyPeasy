const http = require('http');
//console.log(http)

http.createServer(function(req,res ){ ////metodo va con parentesis y va con parametro request (peticion) res

    res.writeHead(200,{
        "Content-Type" : "text/plain; charset=utf-8"
    });

     switch (req.url) {
        case '/':
            res.end('este el HOME')

            break;
            case '/productos':
            res.end('estos son nuestros productos')
            break
            case '/contacto':
                res.end('Dejanos tu mensaje')
                break;
    
        default:
            res.end('Pagina no disponible, vuelva mas tarde')
            break;
    } 
  



}).listen(3030,'localhost',()=>console.log('servidor funcionando en el puerto 3030'))
    