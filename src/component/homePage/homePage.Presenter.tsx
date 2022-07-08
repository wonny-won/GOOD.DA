import Head from 'next/head'
import * as S from './homePage.style'

export default function HomePageUI(){
    const icon = ["다이어트","건강기능","운동보조","뷰티기능"]
    const icon2 = ["한끼식사","부기차","임산부","어린이"]
    return(
        <>
            <Head>
                <title> 굳다 - 다이어트,운동부스터 영양제/보조제 성분 비교 </title>
                <meta name="굳다 보조제 성분비교, 리뷰" content="다이어트,운동부스터 영양제/보조제 성분 비교" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

                <S.Title>카테고리</S.Title>
                <S.CategorySection>
                    <S.IconWrap>
                    { icon.map((item)=>(<S.Icon src={`/image/${item}.svg`}/>)) }
                    </S.IconWrap>
                    <S.IconWrap>
                    { icon2.map((item)=>(<S.Icon src={`/image/${item}.svg`}/>)) }
                    </S.IconWrap>
                </S.CategorySection>

                <S.Title> <S.MySpan>HOT 랭킹</S.MySpan> 제품 </S.Title>
                <section>
                    <div>durls anjdf</div>
                </section>
                
                <S.Title><S.MySpan>GOOD</S.MySpan>팁 <S.MySpan>DA</S.MySpan> 모았다!</S.Title>
                <section>
                <div>durls anjdf</div>
                </section>
        </>
    )
}