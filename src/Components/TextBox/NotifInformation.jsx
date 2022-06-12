import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Desc, ListWrapper, Title, Wrapper } from "./StyleNotifInformation";


const NotifInformation = (props) => {
    return (

<ListWrapper>
    <FontAwesomeIcon icon={faArrowUp} style={{color: `green`}}></FontAwesomeIcon>
    <Wrapper>
    <Title>{props.Title}</Title>
    <Desc>{props.Desc}</Desc>
    </Wrapper>
</ListWrapper>

    );
};
export default NotifInformation;