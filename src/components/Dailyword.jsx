

export const Dailyword = () =>{
    return(
        <div className="flex flex-col gap-2 w-full h-[20%] px-6 z-20">
            <h1 className="font-bold text-[24px]"> <span className="text-[#6200EA]">Word</span> of the <span className="text-[#FF5722]">day</span>!</h1>
            <div className="flex gap-5">
                <h1 className="font-bold text-[18px]">Word</h1>
                <span className="text-[16px] border-2 border-[#6200EA] px-2 rounded-full"># <i>/eailu/</i> #</span>
            </div>
            <div className="felx justify-center items-center w-max">
                <p className="max-w-[520px] w-max italic text-wrap break-all ">This is the meaning of the word.</p>
            </div>
        </div>
    )
}