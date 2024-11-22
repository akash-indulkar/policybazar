import React from "react";
import Select from "react-select";

export default function Monthly(){
    const policydata=JSON.parse(localStorage.getItem("policydata"))


    var MonthlyList=[
       {
        value:1,
        label:"Monthly",
       },

       {
        value:2,
        label:"Half-Yearly",
       },

       {
        value:3,
        label:"Quaterly",
       },

       {
        value:4,
        label:"Yearly",
       },

       
    ]
    return(
        <div style={{width:"400px"}}>
            <Select placeholder={policydata.price} options={MonthlyList}/>
        </div>
    )
}