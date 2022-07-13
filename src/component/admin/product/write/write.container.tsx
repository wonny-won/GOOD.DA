import ProductWriteUI from "./write.presenter"
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { fireBaseApp } from "../../../../../pages/_app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { ProductInput } from "./write.types";


export default function ProductWrite(){
    const { register, handleSubmit } = useForm<ProductInput>()
    // 상품 등록 함수
    const onSubmit = async (data : any)=>{
        const db = getFirestore(fireBaseApp)
        await addDoc(collection(db, "productWrite"),{ ...data })
        console.log(data)
    }

    return <ProductWriteUI 
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}/>
}