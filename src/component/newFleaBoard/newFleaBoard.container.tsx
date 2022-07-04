import NewFleaBoardUI from './newFleaBoard.presenter'
import { useForm } from "react-hook-form";

export default function NewFleaBoard(){
    const { register, handleSubmit,trigger } = useForm();
    // 퀼 입력내용 폼에 강제로 넣어주기
    const onSubmit = (data:any)=>{
        console.log(data)
    };
    return(
        <NewFleaBoardUI 
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}/>
    ) 
}