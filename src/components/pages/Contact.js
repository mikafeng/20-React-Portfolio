import React, {useState} from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault(e);
        setTimeout(() => {
            setSubmitted(true);
        }, 100)
    };

    if (submitted) {
        return;
    }

    return(
        <section className="m-3 about-container">
            <div className="about-col">
                <h1 id="contact-title">CONTACT</h1>
                <h2>Get in touch with me at mikafengler@gmail.com</h2>
            </div>
            <form onSubmit={handleSubmit} className="about-col">
                <div className="row">
                <div className="r">
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                </div>
                <div className="col mb-3 pt-0">
                    <button
                        className="bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                    >
                        Send a message
                    </button>
                </div>
                </div>
            </form>
        </section>
    );

 }