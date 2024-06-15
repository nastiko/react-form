import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Form() {
    const schema = yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        phone: yup.string().required()
            .matches(/^((0|\+44)7\d{3}\s?\d{6})$/, 'Provide a valid UK phone number')
            .min(11, 'Phone number must be at least 11 digits')
            .max(13, 'Phone number must not exceed 13 digits'),
        description: yup.string().required(),
        agreeTerms: yup.bool().oneOf([true], 'You must accept the terms and conditions').required()
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
                  className="order-2 md:order-1 border-[0px] md:border-[1px] border-y-transparent border-l-transparent border-r-[#dee2e6] pr-0 md:pr-16 mb-12">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-4">
                        <input
                            className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                            focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                            type="text"
                            placeholder="First name"
                            {...register("firstName")}
                        />
                        <p className="text-[12px] text-[#ff3860] mt-2">{errors.firstName?.message}</p>
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                            focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                            type="text"
                            placeholder="Last name"
                            {...register("lastName")}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                        type="phone"
                        placeholder="Phone"
                        {...register("phone")}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        className="w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent border-b-[#d9d9d9] rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:border-b-[#000000] focus:ring-0 focus:outline-none"
                        placeholder="Write your message"
                        cols="30"
                        rows="7"
                        maxLength="250"
                        {...register("description")}
                    >
                    </textarea>
                </div>
                <div className="mb-4">
                    <input
                        className="cursor-pointer mr-2"
                        type="checkbox"
                        {...register("agreeTerms")}
                    />
                    <label>I understood the policy company</label>
                </div>
                <button className="w-max h-[55px] bg-[#eb4d55] text-[16px] leading-[24px] text-[#ffffff] font-normal border-[1px] border-[#eb4d55] transition-all py-2 px-6 hover:bg-[#e72b34] hover:border-[#e61f29]">Send message</button>
            </form>
        </>
    )
}