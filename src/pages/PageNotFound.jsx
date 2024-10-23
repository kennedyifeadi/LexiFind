import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import boneImage from "../assets/Bone.png"
import satImage from "../assets/Sat.png"
import planetImage from "../assets/Planet_blue.avif"
import saturnImage from "../assets/saturn_purple.avif"
import smallImage from "../assets/Smallplanet_yellow.avif"
import ottoImage from "../assets/otto.avif"
import moonImage from "../assets/Moon_pink.avif"


export const PageNotFound = () =>{
    return(
        <motion.div 
        className="h-full w-full flex flex-col"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <div className="flex relative justify-center items-center w-full h-[10%]">
                <h1 className="text-[48px] font-bold w-full text-center mt-[70px]">Lost in space?</h1>
            </div>
            <div className="flex relative justify-center items-center w-full h-[70%] mt-[30px] ">
                <img src={satImage} alt=""  className="w-[10%] absolute flex top-3 left-[30%]  animate-bouncing"/>
                <img src={planetImage} alt=""  className="w-[10%] absolute flex top-[40%] left-[30%] animate-bouncing"/>
                <img src={saturnImage} alt=""  className="w-[20%] z-10 absolute flex top-6 left-[50%]  animate-bouncing"/>
                <img src={ottoImage} alt=""  className="w-[30%] z-20 absolute flex top-[30%] left-[30%] animate-bouncing"/>
                <img src={boneImage} alt="" className="w-[10%] absolute flex top-[30%] left-[50%] animate-bouncing" />
                <img src={smallImage} alt=""  className="w-[10%] absolute flex top-6 left-[40%] animate-bouncing"/>
                <img src={moonImage} alt="" className="w-[10%] absolute flex top-[50%] left-[60%] animate-bouncing" />
            </div>
            <div className="flex relative justify-center items-center w-full h-[10%]">
                <p></p>
                <Link to="/">Go back to the homepage</Link>
            </div>
        </motion.div>
    )
}