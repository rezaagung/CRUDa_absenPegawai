const mongoose = require("mongoose");
 
const url = `mongodb://reza4gung:Qw15yULRtmgDnNMc@cluster0-shard-00-00.zptsa.mongodb.net:27017,cluster0-shard-00-01.zptsa.mongodb.net:27017,cluster0-shard-00-02.zptsa.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-omy04j-shard-0&authSource=admin&retryWrites=true&w=majority`;
 
const connectionParams = {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
};
mongoose
   .connect(url, connectionParams)
   .then(() => {
       console.log("Connected to database ");
   })
   .catch((err) => {
       console.error(`Error connecting to the database. \n${err}`);
   });
