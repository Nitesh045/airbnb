const mongoose= require('mongoose');
const dbUri= 'mongodb://0.0.0.0:27017/AirbnbProject';
mongoose.connect(dbUri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
})
.then(()=>console.log('db has connected '))
.catch((e)=>console.log(e));