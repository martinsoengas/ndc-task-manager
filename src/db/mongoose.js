const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useMongoClient: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})