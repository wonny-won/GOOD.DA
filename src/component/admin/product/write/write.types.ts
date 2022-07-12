import { UseFormReturn, UseFormRegister, FieldValues } from 'react-hook-form';
export interface ProductInput {
   brand? : string;
   product? : string;
   price? : string;
   category? : string;
   productDescription? : string;
   ingredient1? : string;
   ingredient2? : string;
   ingredient3? : string;
   register? : UseFormReturn['register'] | UseFormRegister<FieldValues>;
   handleSubmit? : (data: Object, e?: Event) => void;
   onSubmit :
  }