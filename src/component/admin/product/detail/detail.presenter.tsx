import Head from "next/head"

export default function ProductDetailUI(props){
    console.log(props)
    return(
        <>
        <Head>
            <title>굳다 - 어드민 | 상품상세 페이지</title>
            <meta name="굳다 보조제 성분비교, 리뷰" content="다이어트,운동부스터 영양제/보조제 성분 비교" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
            <img src={props.data.brandImage}/>
            <h1 style={{display:"none"}}>상품정보 리스트</h1>
            <section>
                <h2>{props.data.product}</h2>
            </section>
        </>
    )
}