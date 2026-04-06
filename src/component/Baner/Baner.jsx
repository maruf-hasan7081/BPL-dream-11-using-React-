import React from 'react';
import baner from "../../assets/bg-shadow.png";

const Baner = () => {
    return (
        <div
            className="hero min-h-screen w-[90%] mx-auto rounded-lg mt-5"
            style={{
                backgroundImage:
                    `url(${baner})`,
            }}
        >
            <div className="hero-overlay bg-opacity-100"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <p className='text-center'><img className='mx-auto' src="/src/assets/banner-main.png" alt="" /></p>
                    <h1 className=" text-[40px] font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5">
                        Beyond Boundaries Beyond Limits
                    </p>
                    <button className="btn bg-yellow-300 rounded-2xl ring-4 ring-lime-400">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Baner;