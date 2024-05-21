import Name from "../atoms/name_band/name"
import Style from "./presentation.module.css"
import Images1 from "../data/Data_new"
function Presentation() {
    
    return(
        Images1.product.map(img => {
            return(
            <>
                <img id={Style.cal_image} src={img.image}></img>
                <div className={Style.cal_name}> 
                  <Name text_new={img.text}>  </Name> 
                </div>
              
             
            </>)
           }
        )
    )
}

export default Presentation;