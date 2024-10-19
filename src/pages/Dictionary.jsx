import { Greetings } from "../components/Greetings"
import { Dailyword } from "../components/Dailyword"
import { SearchWord } from "../components/Dicsearch"


export const Dictionary = () =>{
    return(
        <div className="h-full w-full flex flex-col">
            <Greetings />
            <Dailyword />
            <SearchWord />
        </div>
    )
}