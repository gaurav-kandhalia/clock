import { useContext } from "react";

import { Sec_context } from "../../../context/usecontext";
const Sec = ()=>{
    const sec = useContext(Sec_context)
    return (<>
    {sec}
    </>)
}

export default Sec;