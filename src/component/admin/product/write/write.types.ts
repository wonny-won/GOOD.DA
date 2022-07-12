import { UseFormReturn, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
export interface ProductInput {
   register : UseFormReturn['register'];
   handleSubmit : UseFormHandleSubmit<ProductInput>;
   onSubmit :SubmitHandler<ProductInput>;
  }