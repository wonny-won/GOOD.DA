import ProductDetailUI from "./detail.presenter"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireBaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";

export default function ProductDetail(){
    const router = useRouter()
    const [data,setData] = useState({})
    // const [isActive,setIsactive] = useState(false)
    useEffect(()=>{
        const getDetailDoc = async()=>{
            const db = getFirestore(fireBaseApp)
            const docRef = doc(db, "productWrite",`${router.query.id}`);
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                // console.log(docSnap.data())
                setData({...docSnap.data()})
            }
        }
        // setIsactive(true) 
        getDetailDoc()
    },[])
    return <ProductDetailUI  data={data}/>
}