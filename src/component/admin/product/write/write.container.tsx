import ProductWriteUI from "./write.presenter"
import { useForm } from 'react-hook-form'
import { fireBaseApp } from "../../../../../pages/_app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getStorage,ref,uploadBytes } from "firebase/storage";
import { ProductInput } from "./write.types";
import { ChangeEvent, useState } from "react";


export default function ProductWrite(){
    const { register, handleSubmit } = useForm<ProductInput>()
    // 이미지 업로드
    const [image,setImage] = useState("")
    const onChangeImg = (event:ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0]
        console.log(file)
        setImage(file)
        const storage = getStorage();
        const imageUpload = ref(storage, file.name); 
        uploadBytes(imageUpload, file)
    }
    console.log(image)
    // 상품 등록 함수
    const onSubmit = async (data : any)=>{
        const db = getFirestore(fireBaseApp)
        await addDoc(collection(db, "productWrite"),{ ...data, image: image })
        console.log(data)
    }

    return <ProductWriteUI 
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                onChangeImg={onChangeImg}
                image={image}/>
}