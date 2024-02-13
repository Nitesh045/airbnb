const mongoose= require('mongoose');
const dbUri= 'mongodb+srv://nitesh045:Nitesh45%40@cluster0.an21aml.mongodb.net/AirbnbProject';
mongoose.connect(dbUri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
})
.then(()=>console.log('db has connected '))
.catch((e)=>console.log(e));