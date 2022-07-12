import { UseFormReturn, UseFormRegister, FieldValues, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
export interface ProductInput {
   brand? : string;
   product? : string;
   price? : string;
   category? : string;
   productDescription? : string;
   ingredient1? : string;
   ingredient2? : string;
   ingredient3? : string;
   register : UseFormReturn['register'];
   handleSubmit : UseFormHandleSubmit<ProductInput>;
   onSubmit :SubmitHandler<ProductInput>;
  }