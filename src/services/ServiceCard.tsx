import {Service} from "./ServicesData";
import './service-card.css'

interface ServiceCardProps {
    index: number;
    service: Service;
}

export default function ServiceCard(props: ServiceCardProps) {
    return (
        <div className={"service-card"}>
            <div className={"service-card-header"}>
                <h3>{props.service.name}</h3>
                <img src={props.service.icon} alt={props.service.name} className={"service-logo"}/>
            </div>
            <div className={"service-card-body"}>
                <p>{props.service.description}</p>
            </div>
        </div>
    );
}