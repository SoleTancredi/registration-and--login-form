import app from './app';

function main() {
    app.listen(app.get('port'));
    console.log("server listen  on port: ", app.get('port'))
}

main();

    

    




