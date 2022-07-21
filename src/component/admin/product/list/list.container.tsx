import { collection, getDocs , getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { fireBaseApp } from "../../../../../pages/_app";
import AdminProductListUI from "./list.presenter";


export default function AdminProductList(){
    useEffect(()=>{
        const getDocs = async ()=>{
            const db = getFirestore(fireBaseApp)
            const querySnapshot =  getDocs(collection(db, "cities"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                });
    
        }
    },[])
    return <AdminProductListUI/>
}