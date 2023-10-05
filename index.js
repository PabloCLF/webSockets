import express from 'express';
import { engine } from 'express-handlebars';
import { Server } from 'socket.io';
import viewsRouter from './routes/views.routes.js'
import { __dirname } from './utils.js';


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.engine('handlebars', engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);




const httpServer = app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});

const socketServer = new Server(httpServer);
const products = [];

socketServer.on('connection', (socket) => {
    console.log('Client connected', socket.id);

    socket.on('productAdded', (productAdded) => {
        products.push(productAdded);
        socketServer.emit('productList');
    })
})