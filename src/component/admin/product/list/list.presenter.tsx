import RankingUnits from "../../../../units/ranking/ranking";
export default function AdminProductListUI(props:any){    
    return(
        <>
        {
            props.data&& props.data.map((item:any)=>(<RankingUnits key={item.id}
                                                        brandName={item.productInof.brandName}
                                                        category={item.productInof.category}
                                                        product={item.productInof.product}/>))
        }
        </>
    )
}