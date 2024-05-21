import Gender_band from  "../atoms/Gender_band/gender.jsx"
import Gender_text from "../atoms/gender_text/text.jsx"
import Style from "./Gender_band.module.css"
function Gender() {



    return(
    <>

    <div id={Style.cal_title}> 
     <Gender_band></Gender_band>
    </div>
   

    <div id={Style.cal_text}>
        <Gender_text > </Gender_text>
    </div>
     
     </>)
}

export default Gender; 