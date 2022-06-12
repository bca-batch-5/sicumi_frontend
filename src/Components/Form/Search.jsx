import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LabelText, Srch } from "./StyleSearch";


const Search = () => {
    return (
       <LabelText>
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        <Srch type="type" placeholder="Search receiver here"></Srch>
       </LabelText> 
    );
};

export default Search;