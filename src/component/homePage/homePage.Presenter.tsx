import Head from 'next/head'
import * as S from './homePage.style'
import RankingUnits from '../../units/ranking/ranking'
import GoodTipArticle from '../../units/goodTipArticle/article'

export default function HomePageUI(){
    const icon = ["다이어트","건강기능","운동보조","뷰티기능"]
    const icon2 = ["한끼식사","부기차","임산부","어린이"]
    const ranking = [1,2,3,4,5]
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
                    { icon.map((item)=>(
                        <S.Category>
                            <S.Icon src={`/image/${item}.svg`}/>
                            <S.CategoryName>{item}</S.CategoryName>
                        </S.Category>
                    )) }
                    </S.IconWrap>
                    <S.IconWrap>
                    { icon2.map((item)=>(
                        <S.Category>
                            <S.Icon src={`/image/${item}.svg`}/>
                            <S.CategoryName>{item}</S.CategoryName>
                        </S.Category>
                    
                    )) }
                    </S.IconWrap>
                </S.CategorySection>

                <S.Title> <S.MySpan>HOT 랭킹</S.MySpan> 제품 </S.Title>
                <section>
                    {
                        // 여긴 나중에 백엔드 연결
                        ranking.map(()=>(<RankingUnits 
                            brandName = {"종근당 건강"} 
                            category = {"건강기능"}
                            product={"락토핏 생유산균 골드"}
                            image = {"https://contents.lotteon.com/itemimage/_v135845/LO/14/87/18/78/65/_1/48/71/87/86/6/LO1487187865_1487187866_1.jpg/dims/resizef/720X720"}
                            />))
                    }
                </section>

                <S.Title><S.MySpan>GOOD</S.MySpan> 팁 <S.MySpan>DA</S.MySpan> 모았다!</S.Title>
                <section>
                    <GoodTipArticle/>
                </section>
        </>
    )
}