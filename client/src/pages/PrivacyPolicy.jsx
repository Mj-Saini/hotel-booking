import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-16 lg:px-32">
            <div className="w-full bg-white shadow-lg rounded-2xl p-8 md:p-12">
                {/* Header */}
                <h1 className="text-4xl font-bold text-indigo-600 mb-4">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our hotel booking platform.
                </p>

                {/* Sections */}
                <div className="space-y-6 text-gray-700">
                    {/* 1. Information Collection */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
                        <p className="mb-2">
                            We may collect the following types of information when you use our website:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Personal details such as your name, email, phone number, and payment information.</li>
                            <li>Booking information including your hotel preferences, check-in/check-out dates, and guest details.</li>
                            <li>Technical data such as IP address, browser type, and device information.</li>
                        </ul>
                    </section>

                    {/* 2. Use of Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
                        <p>
                            We use your information to provide, improve, and personalize our services. This includes:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Processing and managing your hotel bookings.</li>
                            <li>Communicating booking confirmations and updates.</li>
                            <li>Improving website functionality and customer experience.</li>
                            <li>Sending promotional offers if you opt-in for marketing communications.</li>
                        </ul>
                    </section>

                    {/* 3. Data Sharing */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Data Sharing & Security</h2>
                        <p className="mb-2">
                            We respect your privacy and do not sell your personal information. However, we may share data with trusted third parties:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Payment gateways for processing transactions.</li>
                            <li>Hotels or service providers for booking purposes.</li>
                            <li>Law enforcement or legal authorities if required by law.</li>
                        </ul>
                        <p>
                            We implement strict security measures, including encryption and secure servers, to protect your data.
                        </p>
                    </section>

                    {/* 4. Cookies */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Cookies</h2>
                        <p>
                            Our website uses cookies to enhance user experience. Cookies help us remember your preferences and improve site functionality.
                        </p>
                    </section>

                    {/* 5. Your Rights */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Your Rights</h2>
                        <p>
                            You have the right to access, modify, or delete your personal information. You can also opt-out of marketing communications at any time by contacting us.
                        </p>
                    </section>

                    {/* 6. Contact */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <p className="mt-2 font-medium text-indigo-600">support@yourhotelwebsite.com</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
