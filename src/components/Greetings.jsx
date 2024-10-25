export const Greetings = () =>{
    let date = new Date();
    let time = date.getHours();
    let greeting = "";
    if(time < 12){
        greeting = "Good Morning";
    }else if(time < 18){
        greeting = "Good Afternoon";
    }else{
        greeting = "Good Evening";
    }

    return(
        <div className="w-full h-[25%] px-6 py-4 z-20">
            <h1 className="font-bold text-[48px] flex items-center relative w-[30%]  ">Hey there <iframe src="https://lottie.host/embed/4947a3e2-a083-4c17-82be-a2b0c1022af3/0sT4zRxHoK.json" className="w-20 h-20 rotate-[-50deg] absolute right-2"></iframe> </h1>
            <h1 className="font-bold text-[48px]">{greeting}!</h1>
        </div>
    )
}