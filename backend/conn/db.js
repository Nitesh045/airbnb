const mongoose= require('mongoose');
const dbUri= 'mongodb://127.0.0.1:27017/AirbnbProject';
mongoose.connect(dbUri)
.then(()=>console.log('db has connected '))
.catch((e)=>console.log(e));