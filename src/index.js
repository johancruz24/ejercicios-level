require('./database')
const app = require('./app')

app.listen(app.get('port'), () => {
    console.log('Run server on port ', app.get('port'));
});