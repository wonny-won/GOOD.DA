import { ChangeEvent } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
export interface ProductInput {
   brand: string;
   product: string;
   price: Number;
   category:string;
   productDescription:string;
   ingredient1:string;
   ingredient2:string;
   ingredient3:string;

  }
  export interface Formtype {
   register : UseFormRegister<ProductInput>;
   handleSubmit : UseFormHandleSubmit<ProductInput>;
   onSubmit : (data: any) => Promise<void>;
   onChangeImg: (event:ChangeEvent<HTMLInputElement>)=>void;
   image? : string | HTMLInputElement | undefined;
  }