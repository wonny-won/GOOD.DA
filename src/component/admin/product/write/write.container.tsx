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
    const onChangeImg = async (event:ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0]
        setImage(file)
        const storage = getStorage();
        const imageUpload = ref(storage, `admin/${file?.name}`); 
        await uploadBytes(imageUpload, file)
        
        getDownloadURL(ref(storage, `admin/${file?.name}`))
        .then((param) => {
            console.log(param)
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
              const blob = xhr.response;
            };
            xhr.open('GET', param);
            xhr.send();
            console.log("여기까지 완료", xhr)
          })
          .catch((error) => {
            console.log("이미지 다운 실패 오류",error)
          });
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