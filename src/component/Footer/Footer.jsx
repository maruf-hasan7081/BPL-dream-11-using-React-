import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#00072D] text-white mt-32">

            {/* Newsletter Section */}
            <div className="w-[90%] max-w-[1200px] mx-auto translate-y-[-70px]">
                <div className="rounded-[20px] border border-white/70 p-[12px]">
                    <div className="rounded-[18px] bg-gradient-to-r from-[#d9f1ff] to-[#f6ddb3] px-6 md:px-12 py-10 md:py-14 text-center">
                        <h2 className="text-[24px] md:text-[28px] font-bold text-black mb-3">
                            Subscribe to our Newsletter
                        </h2>

                        <p className="text-[14px] md:text-[16px] text-black/70 mb-8">
                            Get the latest updates and news right in your inbox!
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:w-[280px] md:w-[320px] h-[44px] rounded-[10px] border border-black/20 bg-white/40 px-4 text-[13px] text-black outline-none"
                            />
                            <button className="h-[44px] px-6 rounded-[10px] text-[13px] font-semibold text-black bg-gradient-to-r from-pink-300 to-yellow-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="w-[90%] max-w-[1200px] mx-auto -mt-4 pb-10">

                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <img
                        src="/logo-footer.png"
                        alt="Footer Logo"
                        className="w-20 md:w-24"
                    />
                </div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                    {/* About Us */}
                    <div>
                        <h3 className="text-[18px] font-semibold mb-4">About Us</h3>
                        <p className="text-[14px] text-gray-300 leading-7 max-w-[240px]">
                            We are a passionate team dedicated to providing the best
                            services to our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[18px] font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-[14px] text-gray-300">
                            <li>• Home</li>
                            <li>• Services</li>
                            <li>• About</li>
                            <li>• Contact</li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-[18px] font-semibold mb-4">Subscribe</h3>
                        <p className="text-[14px] text-gray-300 mb-4 max-w-[260px] leading-6">
                            Subscribe to our newsletter for the latest updates.
                        </p>

                        <div className="flex w-full max-w-[320px] overflow-hidden rounded-[8px] bg-white">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 text-[13px] text-black outline-none"
                            />
                            <button className="px-5 text-[13px] font-semibold text-black bg-gradient-to-r from-pink-300 to-yellow-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/10">
                <p className="text-center text-[13px] text-gray-400 py-4">
                    @2024 Your Company All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;