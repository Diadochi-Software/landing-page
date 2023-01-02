import {useState} from "react";

export default function ContactForm() {

    const FORM_ENDPOINT = "https://public.herotofu.com/v1/d7b11770-8ae3-11ed-a003-6f0b76086b1c";

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted)
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    else
        return (
            <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
                <input type="text" placeholder="Your name" name="name" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <textarea placeholder="Your message" name="message" required/>
                <button type="submit"> Send a message</button>
            </form>
        );
}