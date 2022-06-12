import React from "react";
import { NumList, WrapList,Desc } from "./StyleListInformation";

const ListInformation =(props)=>{
    return(
            <WrapList>
               <NumList>{props.NumList}</NumList>
               <Desc>{props.Desc}</Desc> 
            </WrapList>
    );
};

export default ListInformation;