
import mongoosepaginate from "mongoose-paginate-v2";

import mongoose from "mongoose";

const contactschema=new mongoose.Schema({   //defining schema
  name:{
    type: String
  },
  
  email:{
    type:String
  },
  phone:{
    type:String
  }
});
contactschema.plugin(mongoosepaginate)
const db=mongoose.model("contact",contactschema) 
export default db;