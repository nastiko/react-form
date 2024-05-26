import React from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Info from "./components/Info";

export default function App() {
    return (
        <>
            <div className="max-w-screen-xl mx-auto py-[112px]">
                <Header />
                <div className="max-w-screen-lg grid grid-cols-2 grid-rows-1 items-center px-5 mx-auto">
                    <Form />
                    <Info />
                </div>
            </div>

        </>
    )
}