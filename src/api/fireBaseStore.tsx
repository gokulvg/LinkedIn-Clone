
import { toast } from "react-toastify";
import { db } from "../firebaseConfig"
import { addDoc,collection } from "firebase/firestore";

const dbRef = collection(db,'Posts')
export const postStatus = async(post:string) =>{
    const data = {
        post:post
    }
    try{
        const res = await addDoc(dbRef,data)        
        return res
    }catch(err){
        console.log(err);
        toast.error('error in updating the post')
    }
}