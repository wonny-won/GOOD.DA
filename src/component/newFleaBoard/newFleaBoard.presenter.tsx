import * as S from './newFleaBoard.styled'

export default function NewFleaBoardUI(){
    const category = ["패션,잡화","뷰티,미용","생활가전","생활,가공식품","스포츠,레저","반려동물용품","도서,티켓,음반","가구","기타"]
    const payway = ["현금결제","굳다페이","현금결제,굳다페이"]
    return(
        <S.Wrapper>
            {/* 이미지 섹션 */}
            <S.Section>
                <S.H1>상품 이미지를 등록해주세요</S.H1>
                <S.Label htmlFor="imageInput">
                    <S.PlusButton src="/image/plus-circle.webp" />
                </S.Label> 
                <input type="file" id="imageInput" hidden={true}/>
            </S.Section>
            {/* 제목 섹션 */}
            <S.Section>
                <S.H1>제목을 입력해주세요</S.H1>
                <S.TitleInput type="text"/>
            </S.Section>
            {/* 가격, 카테고리 섹션 */}
            <S.Section>
                <S.H1>가격과 카테고리를 입력해주세요</S.H1>
                <S.Priceinput type="text"/>
                <S.CategorySelect>
                    {
                     category.map((item)=>(
                        <option>{item}</option>
                     ))
                    }
                </S.CategorySelect>
            </S.Section>
            {/* 상품 상세설명 섹션 */}
            <S.Section>
                <S.H1>상품 상세설명을 입력해주세요</S.H1>
                <S.CustomQuill />
            </S.Section>
            {/* 거래위치 섹션 */}
            <S.Section>
                <S.H1>희망거래 위치를 선택해주세요</S.H1>
            </S.Section>
            {/* 거래방식 섹션 */}
            <S.Section>
                <S.H1>거래방식을 선택해주세요</S.H1>
                    <S.paySelect>
                    {
                        payway.map((item)=>(<option>{item}</option>))
                    }
                    </S.paySelect>
                    <S.paySelect>
                        <option>네고 가능</option>
                        <option>네고 불가능</option>
                    </S.paySelect>
            </S.Section>
        </S.Wrapper>
    )
}