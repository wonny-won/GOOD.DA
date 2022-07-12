import styled from "@emotion/styled";

export const Title = styled.h1`
    margin-top : 50px;
    padding-left: 15px;
    font-size : 25px;
    font-weight: 400;
    color : rgba(0,0,0,0.8)
`
export const HiddenTitle = styled.h2`
    display: none;
`
export const ImgSection = styled.section`
    width : 103px;
    height : 103px;
    border : 2px dotted rgba(0,0,0,0.2);
    border-radius : 5px;
    margin-left : 15px;
    display : flex;
    justify-content: center;
    align-items: center;
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CategorySection = styled.section`
    display: flex;
`
export const CategoryInput = styled.input`
    width :40%;
    height: 35px;
    margin-left : 15px;
    border : none;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`
export const CategorySelect = styled.select`
    width : 40%;
    height :35px;
    margin-left : 25px;
    border : 1px solid rgba(0,0,0,0.2);
    border-radius: 4px;
`
export const Input = styled.input`
    width : 90%;
    height: 35px;
    margin : 11px auto;
    border : none;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`
export const ButtonWrap = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
export const SubmitButton = styled.button`
    width : 90%;
    height : 45px;
    border: 1px solid #FF8D6D;
    background-color: #FF8D6D;
    border-radius: 4px;
`
export const CancelButton = styled.button`
    width : 90%;
    height : 45px;
    background-color : #fff;
    border : 1px solid black ;
    border-radius : 4px;
    margin : 18px 0 54px 0;
`