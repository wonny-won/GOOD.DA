import * as S from './ranking.style'
import { homeProps } from '../../component/homePage/homePage.types'

export default function RankingUnits(props:homeProps){
    return(
        <S.Wrapper>
            <S.Img src={props.image}/>
            <S.ContentWrapper>
                <S.TitleWrap>
                    <S.BrandName>{props.brandName}</S.BrandName>
                    <S.Category> <span style={{fontWeight:100}}>#</span>{props.category}</S.Category>
                </S.TitleWrap>
                <S.Product>{props.product}</S.Product>
            </S.ContentWrapper>
            <img src="/image/bookmark_grey.svg" />
        </S.Wrapper>
    )
}