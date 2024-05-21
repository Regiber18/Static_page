import Style from "./name.module.css"


function Name({text_new}) {


    return(<p id={Style.cal_name}>{text_new}</p>)
}
     
export default Name;