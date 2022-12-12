import './banner.css';
import {Player} from "@lottiefiles/react-lottie-player";

export default function Banner() {

    return (
        <div>
            <div className={'banner-container'}>
                <div className={'banner-text-container'}>
                    <div className={"banner-text"}> We leverage <b>technology</b> to make
                        your <strong>dreams</strong> come true
                    </div>
                </div>
                <Player
                    loop
                    autoplay
                    speed={0.5}
                    src={"https://assets5.lottiefiles.com/packages/lf20_lMdZ2NUeMB.json"}/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#9370DBFF" fillOpacity="1"
                      d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,144C672,128,768,128,864,149.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                <h2>Our Services</h2>
            </svg>
        </div>
    );

}