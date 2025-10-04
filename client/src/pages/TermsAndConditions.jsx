import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-16 lg:px-32">
            <div className="w-full bg-white shadow-lg rounded-2xl p-8 md:p-12">
                {/* Header */}
                <h1 className="text-4xl font-bold text-indigo-600 mb-4">Terms & Conditions</h1>
                <p className="text-gray-600 mb-8">
                    Please read these Terms and Conditions carefully before using our hotel booking platform. By accessing or using our website, you agree to be bound by these terms.
                </p>

                {/* Sections */}
                <div className="space-y-6 text-gray-700">
                    {/* 1. Booking Rules */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Booking Rules</h2>
                        <p>
                            All bookings are subject to availability. Once a booking is confirmed, it cannot be canceled or modified unless explicitly stated in the cancellation policy of the hotel.
                        </p>
                    </section>

                    {/* 2. Payment */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Payment</h2>
                        <p>
                            Payments for bookings must be completed through our secure payment gateway. We do not store your payment information on our servers. You are responsible for ensuring that your payment details are accurate.
                        </p>
                    </section>

                    {/* 3. User Responsibilities */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. User Responsibilities</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>You must provide accurate and complete information when making a booking.</li>
                            <li>Users are responsible for adhering to hotel rules and regulations during their stay.</li>
                            <li>Any misuse of our platform may result in account suspension or termination.</li>
                        </ul>
                    </section>

                    {/* 4. Refund Policy */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Refund Policy</h2>
                        <p>
                            Refunds, if applicable, will be processed according to the cancellation policy of the respective hotel. Service fees may be non-refundable.
                        </p>
                    </section>

                    {/* 5. Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Limitation of Liability</h2>
                        <p>
                            We are not liable for any indirect, incidental, or consequential damages arising from the use of our platform or hotel services.
                        </p>
                    </section>

                    {/* 6. Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, images, logos, and software, is the property of our company and protected by copyright laws. Unauthorized use is prohibited.
                        </p>
                    </section>

                    {/* 7. Changes to Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms and Conditions at any time. Users are encouraged to review the terms periodically for updates.
                        </p>
                    </section>

                    {/* 8. Contact */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Contact Us</h2>
                        <p>
                            For any questions regarding these Terms and Conditions, please contact us at:
                        </p>
                        <p className="mt-2 font-medium text-indigo-600">support@yourhotelwebsite.com</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
