import Style from "./Final_band.module.css"
import Text from "../atoms/Footer_text/footer_text"
import Recomandation from "../atoms/Footer_band/Footer_band"
function Final() {

    return(
      <>
      <div id={Style.cal_text}> 
         <Text></Text>

        

      </div>
      <div id={Style.cal_songs}>
        <Recomandation> </Recomandation>
        </div>      
      </>
  )
}

export default Final; 