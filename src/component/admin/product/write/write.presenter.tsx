import Head from "next/head"

export default function ProductWriteUI(){
    const category = ["다이어트","건강기능","운동보조","뷰티기능","한끼식사","부기차","임산부","어린이"]
    return(
        <>
            <Head>
                <title>굳다 - 어드민 | 상품작성 페이지</title>
                <meta name="굳다 보조제 성분비교, 리뷰" content="다이어트,운동부스터 영양제/보조제 성분 비교" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <h1>상품 이미지를 등록해주세요</h1>
            <section>
                <input type="file"/>
            </section>

            <h1>제목과 브랜드를 입력해주세요</h1>
            <section>
                <h2>브랜드를 입력해주세요</h2>
                <section>
                    <input type="text" placeholder="브랜드를 입력해주세요"/>
                </section>
                <h2>상품명을 입력해주세요</h2>
                <section>
                    <input type="text" placeholder="상품명을 입력해주세요"/>
                </section>
            </section>

            <h1>가격과 카테고리를 입력해주세요</h1>
            <section>
                <h2>가격</h2>
                <section>
                    <input type="text"/>
                </section>
                <h2>카테고리</h2>
                <section>
                    <select>
                        { // key값에 index를 준 이유는 category 배열은 변할일이 없고 변해도 개수가 8개로 정해져 있기 때문입니다.
                          category.map((item,index)=>(<option key={index}>{item}</option>)) }
                    </select>
                </section>
            </section>

            <h1>상품 한줄 설명을 입력해주세요</h1>
            <section>
                <input type="text"/>
            </section>

            <h1>성분 구성을 입력해주세요(3가지)</h1>
            <section>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </section>
        </>
    )
}