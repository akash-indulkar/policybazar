import React from "react";
import Select from "react-select";

export default function PayFor(){
    var PayForList=[
       {
        value:1,
        label:"5 Years",
       },

       {
        value:1,
        label:"10 Years",
       },

       {
        value:1,
        label:"15 Years",
       },

       {
        value:1,
        label:"20 Years",
       },

       {
        value:1,
        label:"25 Years",
       },

    ]
    return(
        <div style={{width:"400px"}}>
            <Select placeholder="Pay For" options={PayForList}/>
        </div>
    )
}