import './services.css'
import services from "./ServicesData";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div id={"services"}>
            <div className={'services-header'}>
                <div className={"title-container"}>
                    <h2>Our Services</h2>
                </div>
                <div className={"services-description"}>
                    <div className={"services-text"}>
                        <b>We take care of the technology so you can focus on your business.</b> Technology
                        should exist as a
                        tool
                        to help you achieve your goals, not as another problem you need to solve.
                    </div>
                    <div className={"services-text"}>
                        <p>Our team of experts will help you build a technology strategy that will help you achieve your
                            goals.</p>
                    </div>
                </div>
            </div>
            <div className={"services-container"}>
                {services.map((serviceData, index) => <ServiceCard service={serviceData} index={index}/>)}
            </div>
        </div>
    );
}