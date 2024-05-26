import React from "react";

export default function Form() {
    return (
        <>
            <form className="pr-16 mb-12 border-[1px] border-y-transparent border-l-transparent border-r-[#dee2e6]">
                <div className="grid md:grid-cols-2 md:gap-6 mb-4">
                    <div>
                        <input
                            className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                            focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                            type="text"
                            placeholder="First name"
                        />
                    </div>
                    <div>
                        <input
                            className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                            focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                        type="phone"
                        placeholder="Phone"
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
                <div>
                    <input
                        type="checkbox"
                    />
                    <label htmlFor="okayToEmail">I understood the <a>policy</a> company</label>
                    <span>I understood the
                        <a href="#">policy</a>
                        company</span>
                </div>
                <div>
                    <button>Send message</button>
                </div>
            </form>
        </>
    )
}