var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping')

var products = [
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
        title: 'iPhone 7',
        description: 'Best smartphone for your choise!',
        price: 200
    }),
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
        title: 'iPhone 6',
        description: 'Best smartphone for your choise!',
        price: 150
    }),
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
        title: 'iPhone 7',
        description: 'Best smartphone for your choise!',
        price: 200
    }),
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
        title: 'iPhone 6',
        description: 'Best smartphone for your choise!',
        price: 150
    }),
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
        title: 'iPhone 7',
        description: 'Best smartphone for your choise!',
        price: 200
    }),
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
        title: 'iPhone 6',
        description: 'Best smartphone for your choise!',
        price: 150
    })
];

var done = 0;

for (pro of products) {
    pro.save(function (err, res) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
