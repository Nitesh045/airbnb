const mongoose= require('mongoose');


const dbUri= process.env.MONGODB_URL;
mongoose.connect(dbUri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
})
.then(()=>console.log('db has connected '))
.catch((e)=>console.log(e));