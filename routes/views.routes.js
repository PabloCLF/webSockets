import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {
        products: [{
                "id": 1,
                "title": "producto prueba 1",
                "description": "Este es un producto prueba actualizado",
                "price": 200,
                "thumbnail": "Sin imagen",
                "code": "abc1",
                "stock": 25
            },
            {
                "id": 2,
                "title": "producto prueba 3s",
                "description": "Este es un producto prueba",
                "price": 200,
                "thumbnail": "Sin imagen",
                "code": "abc3",
                "stock": 25
            },
            {
                "id": 4,
                "title": "producto prueba 4",
                "description": "Este es un producto prueba",
                "price": 200,
                "thumbnail": "Sin imagen",
                "code": "abc3",
                "stock": 25
            },
            {
                "id": 5,
                "title": "producto prueba 5",
                "description": "Este es un producto prueba",
                "price": 200,
                "thumbnail": "Sin imagen",
                "code": "abc3",
                "stock": 25
            },
            {
                "id": 6,
                "title": "producto prueba 6",
                "description": "Este es un producto prueba",
                "price": 200,
                "thumbnail": "Sin imagen",
                "code": "abc3",
                "stock": 25
            },
            {
                "id": 7,
                "title": "producto prueba 7",
                "description": "Este es un producto prueba",
                "price": 200,
                "thumbnail": "Sin imagen",
                "code": "abc3",
                "stock": 25
            },
            {
                "id": 8,
                "title": "producto prueba 8",
                "description": "Este es un producto prueba",
                "price": 200,
                "thumbnail": "Sin imagen",
                "code": "abc3",
                "stock": 25
            },
            {
                "id": 9,
                "title": "producto prueba 9",
                "description": "Este es un producto prueba",
                "price": 200,
                "thumbnail": "Sin imagen",
                "code": "abc3",
                "stock": 25
            }
        ]
    });
});

router.get('/realtimeproducts', (req, res) => {
    res.render('realTime');
})


export default router;