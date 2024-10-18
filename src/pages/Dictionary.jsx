import { Greetings } from "../components/Greetings"
import { Dailyword } from "../components/Dailyword"
import { Dicsearch } from "../components/Dicsearch"


export const dictionary = () =>{
    return(
        <div className="h-full w-[82%] flex flex-col">
            <Greetings />
            <Dailyword />
            <Dicsearch />
        </div>
    )
}