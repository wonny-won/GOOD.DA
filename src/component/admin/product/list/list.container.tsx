import { collection, getDocs , getFirestore } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fireBaseApp } from "../../../../../pages/_app";
import AdminProductListUI from "./list.presenter";


export default function AdminProductList(){
    const [data,setData] = useState<never[] | any>([])
    const dataList:any = []
    const router = useRouter()
    useEffect(()=>{
        const getList = async ()=>{
            const db = getFirestore(fireBaseApp)
            const querySnapshot = await getDocs(collection(db, "productWrite"))
            querySnapshot.forEach((doc:any) => {
                dataList.push({id:doc.id,productInof:{...doc.data()}})
                setData([...dataList])
            })
        }
        getList()
    },[])

    return (<AdminProductListUI data={data}
                               router={router}/>)
}