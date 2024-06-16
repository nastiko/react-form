import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Form(props) {
    console.log(props);
    const schema = yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email().required("Email is required"),
        phone: yup.string().required("Phone is required")
            .matches(/^((0|\+44)7\d{3}\s?\d{6})$/, 'Provide a valid UK phone number')
            .min(11, 'Phone number must be at least 11 digits')
            .max(13, 'Phone number must not exceed 13 digits'),
        description: yup.string().required("Message is required"),
        agreeTerms: yup.bool().oneOf([true], 'You must accept the terms and conditions').required()
    });

    const [formSuccess, setFormSuccess] = React.useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        setFormSuccess(true);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
                  className="order-2 md:order-1 border-[0px] md:border-[1px] border-y-transparent border-l-transparent border-r-[#dee2e6] pr-0 md:pr-16 mb-12">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-4">
                        <input
                            className={`w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent rounded-none py-2.5
                            focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:ring-0 focus:outline-none
                            ${errors.firstName ? 'border-b-[#ff3860] focus:border-b-[#ff3860]' : 'border-b-[#d9d9d9] focus:border-b-[#000000]'}`}
                            type="text"
                            placeholder="First name"
                            {...register("firstName")}
                        />
                        <p className="text-[12px] text-[#ff3860] mt-2">{errors.firstName?.message}</p>
                    </div>
                    <div className="mb-4">
                        <input
                            className={`w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent rounded-none py-2.5
                            focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:ring-0 focus:outline-none
                            ${errors.lastName ? 'border-b-[#ff3860] focus:border-b-[#ff3860]' : 'border-b-[#d9d9d9] focus:border-b-[#000000]'}`}
                            type="text"
                            placeholder="Last name"
                            {...register("lastName")}
                        />
                        <p className="text-[12px] text-[#ff3860] mt-2">{errors.lastName?.message}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        className={`w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:ring-0 focus:outline-none
                        ${errors.email ? 'border-b-[#ff3860] focus:border-b-[#ff3860]' : 'border-b-[#d9d9d9] focus:border-b-[#000000]'}`}
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                    <p className="text-[12px] text-[#ff3860] mt-2">{errors.email?.message}</p>
                </div>
                <div className="mb-4">
                    <input
                        className={`w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:ring-0 focus:outline-none
                        ${errors.phone ? 'border-b-[#ff3860] focus:border-b-[#ff3860]' : 'border-b-[#d9d9d9] focus:border-b-[#000000]'}`}
                        type="phone"
                        placeholder="Phone"
                        {...register("phone")}
                    />
                    <p className="text-[12px] text-[#ff3860] mt-2">{errors.phone?.message}</p>
                </div>
                <div className="mb-4">
                    <textarea
                        className={`w-full text-[#495057] bg-[#ffffff] border-[1px] border-x-transparent border-t-transparent rounded-none py-2.5
                        focus:border-[1px] focus:border-x-transparent focus:border-t-transparent focus:ring-0 focus:outline-none
                        ${errors.description ? 'border-b-[#ff3860] focus:border-b-[#ff3860]' : 'border-b-[#d9d9d9] focus:border-b-[#000000]'}`}
                        placeholder="Write your message"
                        cols="30"
                        rows="7"
                        maxLength="250"
                        {...register("description")}
                    >
                    </textarea>
                    <p className="text-[12px] text-[#ff3860]">{errors.description?.message}</p>
                </div>
                <div className="mb-4">
                    <input
                        className="cursor-pointer mr-2"
                        type="checkbox"
                        {...register("agreeTerms")}
                    />
                    <label>I understood the <a className="underline" href={props.src}>policy of the company</a></label>
                    <p className="text-[12px] text-[#ff3860]">{errors.agreeTerms?.message}</p>
                </div>
                <button type="submit" className="w-max h-[55px] bg-[#eb4d55] text-[16px] leading-[24px] text-[#ffffff] font-normal border-[1px] border-[#eb4d55] transition-all py-2 px-6 hover:bg-[#e72b34] hover:border-[#e61f29]">Send message</button>
                {formSuccess && <p className="mt-[25px]">Thanks for your submission!</p>}
            </form>
        </>
    )
}