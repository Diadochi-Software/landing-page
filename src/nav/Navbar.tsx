import TitleCard from "./TitleCard";

export default function Navbar() {

    return (
        <header>
            <TitleCard/>
            <nav>
                <li><a href={'about'}>About</a></li>
                <li><a href={'services'}>Services</a></li>
                <li><a href={'our_work'}>Our Work</a></li>
                <li><a href={'blog'}>Blog</a></li>
                <li><a href={'faq'}>FAQ</a></li>
                <li><a href={'careers'}>Careers</a></li>
                <button>Get in touch</button>
            </nav>
        </header>
    )

}


