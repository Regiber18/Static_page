import Gender_all from "../molecules/Gender_band"
import Style from "./Gender_band.module.css"

function Gender_band_all() {


    return(
    <>
    <div id={Style.cal_gender}> 
    <Gender_all ></Gender_all>
    </div> 
    
    </>
    )
}

export default Gender_band_all;