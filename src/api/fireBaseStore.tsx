
import { toast } from "react-toastify";
import { db } from "../firebaseConfig"
import { addDoc,collection,onSnapshot } from "firebase/firestore";
import moment from "moment";
import {useDispatch} from 'react-redux';
import { setPostToStore } from "../Store/StatusStore";

const dbRef = collection(db,'Posts')
export const postStatus = async(post:string) =>{
   
    const data = {
        time:moment().format('MMMM Do YYYY, h:mm:ss a'),
        post:post
    }
    try{
        const res = await addDoc(dbRef,data)        
        return res
    }catch(err){
        console.log(err);
        toast.error('error in updating the POSTS')
    }
}

export const getAllStatus = async() =>{
    try{
 const res =  await onSnapshot(dbRef,(response)=>{
            const data = response.docs.map((post)=>{
                return {
                    id:post.id,
                    status:post.data()
                }
            })     
          return data
           
        })
       
    }catch(err){
        console.log(err)
    }
 
}