import { Player } from '@lottiefiles/react-lottie-player';

export const Greetings = () => {
    let date = new Date();
    let time = date.getHours();
    let greeting = "";
    if (time < 12) {
        greeting = "Morning";
    } else if (time < 18) {
        greeting = "Afternoon";
    } else {
        greeting = "Evening";
    }

    return (
        <div className="w-full h-max px-4 py-2 md:px-6 md:py-4 z-20">
            <h1 className="font-bold text-[24px] md:text-[48px] relative w-full md:w-[30%] ">
                <span className="text-[#6200EA]">Hey</span> there
                <Player
                    src="https://lottie.host/17fdfd16-a108-4b1f-8a85-786af371d58b/Guf8MUcNat.json"
                    background="transparent"
                    speed={1}
                    loop
                    autoplay
                    className="md:w-20 md:h-20 w-12 h-12 md:left-[15.2rem] left-[7.2rem]  rotate-[-50deg] absolute top-[-10px] "
                />
            </h1>
            <h1 className="font-bold text-[36px] md:text-[48px]">Good <span className="text-[#FF5722]">{greeting}!</span></h1>
        </div>
    )
}