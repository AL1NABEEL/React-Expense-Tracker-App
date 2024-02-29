import { addDoc, collection, serverTimestamp } from "firebase/firsestore";
import { db } from "../config/firebase-config";

export const useAddTransaction =() =>{
    const transactionCollectionRef = collection (db, "transactions")
    const addTransaction = async ()=>{
        await addDoc(transactionCollectionRef, {
            userID:"",
            description:"",
            transactionAmount:"",
            transactionType:"",
            createdAt:serverTimestamp(),
        })
    }

        return {addTransaction}
    
}