import ProductWriteUI from "./write.presenter"
import { useForm } from 'react-hook-form'
import { fireBaseApp } from "../../../../../pages/_app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { ProductInput } from "./write.types";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";


export default function ProductWrite(){
    const { register, handleSubmit } = useForm<ProductInput>()
    const router = useRouter()
    // 이미지 업로드,URL받기 -> db에 보내주기용
    const [image,setImage] = useState("")
    const [storageUrl,setStorageUrl] = useState("")
    const onChangeImg = async (event:ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0]
        setImage(file)
        const storage = getStorage();
        const imageUpload = ref(storage, `admin/${file?.name}`); 
        await uploadBytes(imageUpload, file)
        // URL받아오기
        getDownloadURL(ref(storage, `admin/${file?.name}`))
        .then((param) => {
            setStorageUrl(param)
          })
          .catch((error) => {
            console.log("이미지 다운 실패 오류",error)
          });
    }
    // 상품 등록 함수
    const onSubmit = async (data : any)=>{
        const db = getFirestore(fireBaseApp)
        await addDoc(collection(db, "productWrite"),{ ...data, brandImage:storageUrl})
        router.push ('/productList')
        console.log(data)
    }

    return <ProductWriteUI 
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                onChangeImg={onChangeImg}
                image={image}/>
}