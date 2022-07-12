import Head from "next/head"
import * as S from './writer.style'

export default function ProductWriteUI(){
    const category = ["다이어트","건강기능","운동보조","뷰티기능","한끼식사","부기차","임산부","어린이"]
    return(
        <>
            <Head>
                <title>굳다 - 어드민 | 상품작성 페이지</title>
                <meta name="굳다 보조제 성분비교, 리뷰" content="다이어트,운동부스터 영양제/보조제 성분 비교" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <S.Title>상품 이미지를 등록해주세요</S.Title>
                <S.ImgSection>
                    <label htmlFor="fileTag"><img src="/image/plus-circle.svg"/></label>
                    <S.Input type="file" id="fileTag" hidden={true}/>
                </S.ImgSection>
            <S.Title>제목과 브랜드를 입력해주세요</S.Title>
                <section>
                    <S.HiddenTitle>브랜드를 입력해주세요</S.HiddenTitle>
                    <S.Section>
                        <S.Input type="text" placeholder=" 브랜드를 입력해주세요"/>
                    </S.Section>
                    <S.HiddenTitle>상품명을 입력해주세요</S.HiddenTitle>
                    <S.Section>
                        <S.Input type="text" placeholder=" 상품명을 입력해주세요"/>
                    </S.Section>
                </section>
            <S.Title>가격과 카테고리를 입력해주세요</S.Title>
                <S.CategorySection>
                    <S.HiddenTitle>가격</S.HiddenTitle>
                        <S.CategoryInput type="text" placeholder=" 가격을 입력해주세요"/>
                    <S.HiddenTitle>카테고리</S.HiddenTitle>
                        <S.CategorySelect>
                            {
                             // key값에 index를 준 이유는 category 배열은 변할일이 없고 변해도 개수가 8개로 정해져 있기 때문입니다.
                             category.map((item,index)=>(<option key={index}>{item}</option>))
                            }
                        </S.CategorySelect>
                </S.CategorySection>
            <S.Title>상품 한줄 설명을 입력해주세요</S.Title>
                <S.Section>
                    <S.Input type="text" placeholder=" 상품 한줄 설명을 입력헤주세요"/>
                </S.Section>
            <S.Title>성분 구성을 입력해주세요(3가지)</S.Title>
                <S.Section>
                    <S.Input type="text" placeholder=" 1. 구성성분을 입력해주세요"/>
                    <S.Input type="text" placeholder=" 2. 구성성분을 입력해주세요"/>
                    <S.Input type="text" placeholder=" 3. 구성성분을 입력해주세요"/>
                </S.Section>
        </>
    )
}