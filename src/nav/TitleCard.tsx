import logo from './logo.svg';
import './navbar.css';

export default function TitleCard() {

    return (
        <div className={'title-card'}>
            <img src={logo} alt={"logo"} className={'logo'}/>
            <div>
                <h1> DIADOCHI </h1>
                <p> Software built by nerds</p>
            </div>
        </div>
    )


}