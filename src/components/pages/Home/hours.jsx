
import { createContext, useContext } from "react";

import { Hours_context } from "../../../context/usecontext";

const Hours = ()=>{
const hours = useContext(Hours_context);
console.log(hours)
 return (<>
 {hours}
    </>)
}

export default Hours;