import NewFleaBoardUI from './newFleaBoard.presenter'
import { useForm } from "react-hook-form";

export default function NewFleaBoard(){
    const { register, handleSubmit } = useForm();

    return(
        <NewFleaBoardUI 
            register={register}
            handleSubmit={handleSubmit}/>
    ) 
}