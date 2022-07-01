import NewFleaBoardUI from './newFleaBoard.presenter'
import { useForm } from "react-hook-form";

export default function NewFleaBoard(){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {console.log(data)};
    return(
        <NewFleaBoardUI 
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}/>
    ) 
}