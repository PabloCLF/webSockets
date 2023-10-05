const socketClient = io();
const divProducts = document.querySelector('#realTimeProducts');

socketClient.on('connected', () => {
    console.log('You are connected to the realTime Products');
});

socketClient.emit('productAdded', { title: 'new Product', description: 'this is a new product' });

socketClient.on('realTome', (products) => {
    const productsList = products.map((p) => {
        return `<p>Title: ${p.title}, description: ${p.description}</p>`;
    }).join(" ");
    divProducts.append(productsList);
})