export const Greetings = () =>{
    let date = new Date();
    let time = date.getHours();
    let greeting = "";
    if(time < 12){
        greeting = "Morning";
    }else if(time < 18){
        greeting = "Afternoon";
    }else{
        greeting = "Evening";
    }

    return(
        <div className="w-full h-[25%] px-6 py-4 z-20">
            <h1 className="font-bold text-[48px] relative w-[30%]  "><span className="text-[#6200EA]">Hey</span> there <iframe src="https://lottie.host/embed/e111ef25-f77d-4548-85f5-4f608f7400e1/10fJnrj0sg.lottie" className="w-20 h-20 rotate-[-50deg] absolute top-[-10px] right-2"></iframe></h1>
            <h1 className="font-bold text-[48px]">Good <span className="text-[#FF5722]">{greeting}!</span></h1>
        </div>
    )
}