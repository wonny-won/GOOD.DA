import ProductWriteUI from "./write.presenter"
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductInput } from "./write.types"

export default function ProductWrite(){
    const { register, handleSubmit } = useForm<ProductInput>()
    const onSubmit: SubmitHandler<ProductInput> = (data : any)=>{console.log(data)}

    return <ProductWriteUI 
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}/>
}