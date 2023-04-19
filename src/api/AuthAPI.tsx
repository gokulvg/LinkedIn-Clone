import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebaseConfig"


export const LoginApi = async(email:any,password:any ) =>{
    try{
      let res= await signInWithEmailAndPassword(auth,email,password);
      return res
    }catch(err){        
        alert(err.error.message)
       return err
       
    }
}
export const signInApi =async (email:any,password:any ) =>{
    try{
      let res=await createUserWithEmailAndPassword(auth,email,password);
      return res
    }catch(err){
        alert(err.error.message)
        console.log(err);
       
    }
}