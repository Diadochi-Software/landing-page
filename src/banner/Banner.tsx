import './banner.css';

export default function Banner() {

    return (
        <div className={'banner-container'}>
            <div className={'banner-text-container'}>
                <p className={"banner-text"}> We leverage <b>technology</b> to make your <b>dreams</b> come true </p>
            </div>
            <img src={"https://via.placeholder.com/468x760?text=a+cool+banner"} alt={"banner"}/>
        </div>
    );

}