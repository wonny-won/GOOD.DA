import styled from "@emotion/styled"
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css'; // ES6
const ReactQuill = dynamic(()=>import("react-quill"),{ssr: false})

export const Section = styled.section`
    margin : 15px 0;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding : 15px;
`

export const H1 = styled.h1`
    font-size: 20px;
    font-weight: 400;   
    margin : 5px 5px 10px 5px;
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    border: dotted 2px #ddd;
    border-radius:4px;
    color:red;
`

export const PlusButton = styled.img`
    width : 28px;
    height: 28px;
`

export const TitleInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 2px solid #00000025 ;
` 

export const Priceinput = styled.input`
    width : 45%;
    height: 40px;
    border: none;
    border-bottom: solid 2px #00000025 ;
`

export const CategorySelect = styled.select`
    width : 52%;
    height: 35px;
    border: none;
    border: solid 2px #00000025 ;
    border-radius: 4px;
    margin-left: 10px;
`

export const CustomQuill = styled(ReactQuill)`
.ql-editor, .ql-blank{
    height: 200px;
}
`

export const paySelect = styled.select`
    width : 45%;
    height: 40px;
    border: none;
    border: solid 2px #00000025 ;
    border-radius: 4px;
    margin-left: 10px;
`