import Head from "next/head"
import * as S from './detail.style'

export default function ProductDetailUI(props){
    console.log(props)
    return(
        <>
            <Head>
                <title>굳다 - 어드민 | 상품상세 페이지</title>
                <meta name="굳다 보조제 성분비교, 리뷰" content="다이어트,운동부스터 영양제/보조제 성분 비교" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <S.Body>
                <img src={props.data.brandImage} width="360"  height="290"/>
                <h1 style={{display:"none"}}>상품회사,상품이름</h1>
                <S.Section>
                    <S.Brand>{props.data.brand}</S.Brand>
                    <S.Product>{props.data.product}</S.Product>
                    <S.Hr/>
                </S.Section>
                <h1 style={{display:"none"}}>상품상세 정보</h1>
                <S.Section>
                    <S.Wrap>
                        <S.Div><S.Span>정가</S.Span> {props.data.price} 원</S.Div>
                        <S.Div><S.Span>카테고리</S.Span> #{props.data.category}</S.Div>
                        <S.Div>상품한줄 설명</S.Div>
                        <S.ProductDescription>{props.data.productDescription}</S.ProductDescription>
                    </S.Wrap>
                    <S.Hr/>
                </S.Section>
                <h1 style={{display:"none"}}>성분상세 </h1>
                <S.Section>
                <S.Ingredient>성분상세</S.Ingredient>
                <S.IngredientHr/>
                <S.Wrap>
                    <S.Title>성분구성(성분구성 3가지)</S.Title>
                    <S.Div>{props.data.ingredient1}</S.Div>
                    <S.Div>{props.data.ingredient2}</S.Div>
                    <S.Div>{props.data.ingredient3}</S.Div>
                </S.Wrap>
                </S.Section>
                <S.ButtonWrap>
                    <S.UpdateButton>수정하기</S.UpdateButton>
                    <S.DelButton>삭제하기</S.DelButton>
                </S.ButtonWrap>
            </S.Body>
        </>
    )
}