import ProductWriteUI from "./write.presenter"
import { useForm } from 'react-hook-form'
import { fireBaseApp } from "../../../../../pages/_app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { ProductInput } from "./write.types";
import { ChangeEvent, useState } from "react";


export default function ProductWrite(){
    const { register, handleSubmit } = useForm<ProductInput>()
    // 이미지 업로드,URL다운로드 -> db에 보내줘야 해
    const [image,setImage] = useState("")
    // const [imageUrl,setImageUrl] =useState("")
    const onChangeImg = (event:ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0] 
        console.log(file)
        setImage(file)
        const storage = getStorage();
        const imageUpload = ref(storage, `image/${file?.name}`); 
        uploadBytes(imageUpload, file)
        // const url = getDownloadURL(ref(storage, `image/${file?.name}`))
    }
    console.log(image)
    // 상품 등록 함수
    const onSubmit = async (data : any)=>{
        const db = getFirestore(fireBaseApp)
        await addDoc(collection(db, "productWrite"),{ ...data })
        console.log(data)
    }

    return <ProductWriteUI 
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                onChangeImg={onChangeImg}
                image={image}/>
}