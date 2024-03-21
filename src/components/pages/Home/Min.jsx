import { useContext } from "react";
import { Min_context } from "../../../context/usecontext";
const Min = ()=>{
const min = useContext(Min_context)
    return (<>
    {min}
    </>)
}

export default Min