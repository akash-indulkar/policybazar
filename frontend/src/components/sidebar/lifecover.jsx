import React from "react";
import Select from "react-select";

export default function LifeCover(){
    const policydata=JSON.parse(localStorage.getItem("policydata"))

    var LifeCoverList=[
       {
        value:1,
        label:"₹25 Lacs",
       },

       {
        value:2,
        label:"₹50 Lacs",
       },

       {
        value:3,
        label:"₹75 Lacs",
       },

       {
        value:4,
        label:"₹1 Crores",
       },

       {
        value:5,
        label:"₹25 Lacs",
       },

    ]
    return(
        <div style={{width:"400px"}}>
            <Select placeholder={policydata.value} options={LifeCoverList}/>
        </div>
    )
}