import React from "react";
import GreyLineDotted from "../assets/GreyLineDotted.svg";
import INVfull_logoBbg from '../assets/INVfull_logoBbg.svg';

export default function HeroContacts() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_YOUR_ACCESS_KEY_HERE);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.error("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <img src={GreyLineDotted} alt="" className="w-full pt-3 pb-20 bg-[#595959]" />
            <div className="flex flex-col px-5 md:flex-row items-center justify-between max-w-7xl mx-auto my-10 p-5 ">
                <div className="flex-1 md:pr-10 mb-10 md:mb-0">
                    <div className="text-center md:text-left">
                        <p className='text-[32px] text-white font-Bungee'>
                            Contact
                        </p>
                        <p className='text-[80px] text-white font-Bungee'>
                            Sriganesh.P
                        </p>
                        <p className='text-[16px] text-white font-Bungee pb-5'>
                            From
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start mb-10">
                        <img src={INVfull_logoBbg} alt="Innovixity Logo" className="w-auto h-32" />
                    </div>
                </div>
                <div className=" flex-1 bg-[#232323] shadow-md rounded-lg px-9 py-14">
                    <div className="flex-1 ">
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF1A]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF1A]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF1A]"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#00FF1A] text-black font-bold py-2 rounded-lg hover:bg-[#00CC15] focus:outline-none focus:ring-2 focus:ring-[#00FF1A]"
                            >
                                Send
                            </button>
                        </form>
                        <span className="block mt-4 text-gray-300 text-center">{result}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
