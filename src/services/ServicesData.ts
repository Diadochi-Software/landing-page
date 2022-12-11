export interface Service {
    name: string;
    description: string;
    icon: string;
}

let services: Service[] = [{
    name: "Infrastructure setup and maintenance",
    description: "Leveraging technology should be easy. We focus on keeping things running smoothly so you can focus in what truly matters. We setup and maintain all of your infrastructure needs, from servers to databases to networks.",
    icon: "https://via.placeholder.com/150"
}, {
    name: "Web and Mobile Development",
    description: "In today's age, its not enough to be on the web. You need to be on the web, mobile, and everywhere in between. We develop for all platforms, be it web, mobile, or anything in between.",
    icon: "https://via.placeholder.com/150"
}, {
    name: "UI/UX Design",
    description: "Making your product look great",
    icon: "https://via.placeholder.com/150"
}]

export default services;
