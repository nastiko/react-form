import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    function handleChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })
    }

    return (
        <>
            <form className="order-2 md:order-1 border-[0px] md:border-[1px] border-y-transparent border-l-transparent border-r-[#dee2e6] pr-0 md:pr-16 mb-12">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-4">
                        <input
                            className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                            focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                            type="text"
                            placeholder="First name"
                            onChange = {handleChange}
                            name="firstName"
                            value={formData.firstName}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                            focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                            type="text"
                            placeholder="Last name"
                            onChange = {handleChange}
                            name="lastName"
                            value={formData.lastName}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                        type="email"
                        placeholder="Email"
                        onChange = {handleChange}
                        name="email"
                        value={formData.email}
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                        type="phone"
                        placeholder="Phone"
                        onChange = {handleChange}
                        name="phone"
                        value={formData.phone}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                        placeholder="Write your message"
                        cols="30"
                        rows="7"
                        maxLength="250">
                    </textarea>
                </div>
                <div className="mb-4">
                    <input
                        className="cursor-pointer mr-2"
                        type="checkbox"
                    />
                    <label>I understood the policy company</label>
                </div>
                <button className="w-max h-[55px] bg-[#eb4d55] text-[16px] leading-[24px] text-[#ffffff] font-normal border-[1px] border-[#eb4d55] transition-all py-2 px-6 hover:bg-[#e72b34] hover:border-[#e61f29]">Send message</button>
            </form>
        </>
    )
}