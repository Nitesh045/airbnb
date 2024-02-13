const mongoose= require('mongoose');
const dbUri= 'mongodb://0.0.0.0:27017/AirbnbProject';
mongoose.connect(dbUri)
.then(()=>console.log('db has connected '))
.catch((e)=>console.log(e));