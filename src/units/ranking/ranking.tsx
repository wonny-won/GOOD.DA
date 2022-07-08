import styled from "@emotion/styled"

const Img = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid rgba(0,0,0, 0.88);
`

export default function RankingUnits(props){
    return(
        <Img>
            <div>img</div>
            <div>
                <div>{props.brandName}</div>
                <div># {props.category}</div>
            </div>
            <div>{props.product}</div>
        </Img>
    )
}