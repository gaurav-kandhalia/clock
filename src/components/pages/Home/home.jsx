
import Hours from "./hours";
import { createContext, useState } from "react";
import { useEffect } from "react";
import Min from './Min'
import Sec from "./Sec";



const Home = ()=>{
    const [time,settime] = useState(new Date())
useEffect(()=>{
    setInterval(()=>{
      settime(new Date());
    },1000)
})



    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds()
    return(<>
<div className="w-[400px] h-[400px] rounded-full border-4 flex justify-center items-center gap-4 font-extrabold text-[40px]">
<div className="">
    <Hours_context.Provider value={hours}>
<Hours/>
    </Hours_context.Provider>

</div>
<div>:</div>
<div className=""><Min_context.Provider value={min}>
    <Min/>
</Min_context.Provider></div>
<div>:</div>
<div className=""><Sec_context.Provider value={sec}>
    <Sec/>
    </Sec_context.Provider></div>

</div>
    </>)
}

export default Home;