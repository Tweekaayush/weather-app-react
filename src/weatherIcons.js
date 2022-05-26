import {BsMoonFill, BsWater, BsFillCloudLightningRainFill, BsFillCloudMoonFill, BsSun, BsCloudSunFill, BsFillCloudFill, BsCloudsFill, BsFillCloudRainHeavyFill} from "react-icons/bs";
import {FaSnowflake, FaCloudSunRain, FaCloudMoonRain} from "react-icons/fa";

const weatherIcons = {
    "I01d": <BsSun/>,
    "I02d":<BsCloudSunFill/>,
    "I03d":<BsFillCloudFill/>,
    "I04d":<BsCloudsFill/>,
    "I09d":<BsFillCloudRainHeavyFill/>,
    "I010d": <FaCloudSunRain/>,
    "I011d": <BsFillCloudLightningRainFill/>,
    "I013d": <FaSnowflake/>,
    "I050d": <BsWater/>,
    "I01n": <BsMoonFill/>,
    "I02n": <BsFillCloudMoonFill/>,
    "I03n": <BsFillCloudFill/>,
    "I04n":<BsCloudsFill/>,
    "I09n":<BsFillCloudRainHeavyFill/>,
    "I010n": <FaCloudMoonRain/>,
    "I011n": <BsFillCloudLightningRainFill/>,
    "I013n": <FaSnowflake/>,
    "I050n": <BsWater/>
}

export default weatherIcons;