import Head from "next/head"
import * as S from './writer.style'
import { Formtype } from "./write.types"

export default function ProductWriteUI(props : Formtype){
    console.log(props.image.name)
    const category = ["다이어트","건강기능","운동보조","뷰티기능","한끼식사","부기차","임산부","어린이"]
    return(
        <>
            <Head>
                <title>굳다 - 어드민 | 상품작성,수정 페이지</title>
                <meta name="굳다 보조제 성분비교, 리뷰" content="다이어트,운동부스터 영양제/보조제 성분 비교" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <form onSubmit={props.handleSubmit(props.onSubmit) } >
                <S.Title>상품 이미지를 등록해주세요</S.Title>
                    <S.UploadImageWrap>
                        <S.ImgSection>
                            <label htmlFor="fileTag"><img src="/image/plus-circle.svg"/></label>
                            <S.Input type="file" id="fileTag" hidden={true} onChange={props.onChangeImg} />
                        </S.ImgSection>
                        { props.image && <S.UploadImage src={`https://firebasestorage.googleapis.com/v0/b/goodda-9aced.appspot.com/o/admin%2F${props.image?.name}?alt=media&token`} image={props.image}/> }
                    </S.UploadImageWrap>
                <S.Title>제목과 브랜드를 입력해주세요</S.Title>
                    <section>
                        <S.HiddenTitle>브랜드를 입력해주세요</S.HiddenTitle>
                        <S.Section>
                            <S.Input type="text" placeholder=" 브랜드를 입력해주세요" {...props.register("brand")} />
                        </S.Section>
                        <S.HiddenTitle>상품명을 입력해주세요</S.HiddenTitle>
                        <S.Section>
                            <S.Input type="text" placeholder=" 상품명을 입력해주세요" {...props.register("product")} />
                        </S.Section>
                    </section>
                <S.Title>가격과 카테고리를 입력해주세요</S.Title>
                    <S.CategorySection>
                        <S.HiddenTitle>가격</S.HiddenTitle>
                            <S.CategoryInput type="text" placeholder=" 가격을 입력해주세요" {...props.register("price")} />
                        <S.HiddenTitle>카테고리</S.HiddenTitle>
                            <S.CategorySelect {...props.register("category")}>
                                {
                                // key값에 index를 준 이유는 category 배열은 변할일이 없고 변해도 개수가 8개로 정해져있기 때문입니다.
                                category.map((item,index)=>(<option key={index}>{item}</option>))
                                }
                            </S.CategorySelect>
                    </S.CategorySection>
                <S.Title>상품 한줄 설명을 입력해주세요</S.Title>
                    <S.Section>
                        <S.Input type="text" placeholder=" 상품 한줄 설명을 입력헤주세요" {...props.register("productDescription")} />
                    </S.Section>
                <S.Title>성분 구성을 입력해주세요(3가지)</S.Title>
                    <S.Section>
                        <S.Input type="text" placeholder=" 1. 구성성분을 입력해주세요" {...props.register("ingredient1")} />
                        <S.Input type="text" placeholder=" 2. 구성성분을 입력해주세요" {...props.register("ingredient2")} />
                        <S.Input type="text" placeholder=" 3. 구성성분을 입력해주세요" {...props.register("ingredient3")} />
                    </S.Section>
                <S.ButtonWrap>
                <S.SubmitButton>저장하기</S.SubmitButton>
                    <S.CancelButton type="button">삭제하기</S.CancelButton>
                </S.ButtonWrap>
            </form>
        </>
    )
}