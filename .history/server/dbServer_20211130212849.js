const mongoose = require('mongoose');
mongoose.connect('mongodb://rivka:1234@cluster0.cdd8z.mongodb.net/BussinessCardDB?retryWrites=true&w=majority');

const Cat = mongoose.model('Cat', { name: String });



const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

