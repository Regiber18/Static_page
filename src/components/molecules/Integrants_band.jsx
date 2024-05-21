import Integrants_band from "../atoms/integrants_band/Integrants"
import Images1 from "../Data/Data"
import Style from "./Integrants_band.module.css"


function Integrants() {
  return(
    
   Images1.products.map(img => {
    return(
   
    <>
        <img className={Style.cal_images} src={img.image}></img>
      <div className={Style.cal_integrants}>
      <Integrants_band text={img.text}></Integrants_band>
      </div>
    </>)
   }
  )
)
  
}

export default Integrants;