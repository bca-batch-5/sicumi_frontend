import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AddNote, LabelAmount, LabelNote, Lamt, ShowBalance, Wrapper } from "./styleAmountTransfer";

const AmountTransfer =() => {
    return(
        <Wrapper>
            <LabelAmount>
                <Lamt type=""  placeholder="0.00"></Lamt>
            </LabelAmount>
            <ShowBalance></ShowBalance>
            <LabelNote>
            <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                <AddNote>
                    
                </AddNote>
            </LabelNote>
        </Wrapper>
    );
};

export default AmountTransfer;
