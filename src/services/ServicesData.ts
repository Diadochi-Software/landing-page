export interface Service {
    name: string;
    description: string;
    icon: string;
}

let services: Service[] = [{
    name: "Infrastructure setup and maintenance",
    description: "Keeping your infrastructure up and running",
    icon: "https://via.placeholder.com/150"
}, {
    name: "Web and Mobile Development",
    description: "Building your next big thing",
    icon: "https://via.placeholder.com/150"
}, {
    name: "UI/UX Design",
    description: "Making your product look great",
    icon: "https://via.placeholder.com/150"
}]

export default services;
