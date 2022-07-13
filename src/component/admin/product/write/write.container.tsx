import ProductWriteUI from "./write.presenter"
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductInput } from "./write.types"
import { fireBaseApp } from "../../../../../pages/_app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

export default function ProductWrite(){
    const { register, handleSubmit } = useForm<ProductInput>()
    const onSubmit: SubmitHandler<ProductInput> = async (data : any)=>{
        const db = getFirestore(fireBaseApp)
        await addDoc(collection(db, "productWrite"),{...data})
        console.log(data)
    }

    return <ProductWriteUI 
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}/>
}