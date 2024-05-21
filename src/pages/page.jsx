import Parts from "../components/organism/pink_floyd"
import Integrants_page from  "../components/organism/integrants_band_all"
import Footer_page from "../components/organism/Footer_band_all"
import Gender_page from "../components/organism/gender_band_all"
import Style from "./page.module.css"



function Page() {



    return(
    <div id={Style.cal_page}>

     <Parts></Parts>
     <Gender_page></Gender_page>
     <Integrants_page></Integrants_page>
     <Footer_page></Footer_page>
    </div>
    )
}

export default Page; 