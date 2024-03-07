import { connect, set } from "mongoose";
const CONNECTION_STRING: string =
  "mongodb+srv://Dalaikhuu:Asizu8989@asizu.klieoav.mongodb.net/";

  export const connectDb= async ()=>{
    set (`strictQuery`,false);

    try{await connect (CONNECTION_STRING),
    console.log("Succesfully connect DB");
    } catch (error){
        console.log("DB connection is unseccesful");
        
    }
  }
