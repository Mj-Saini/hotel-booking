import React from "react";

const Experince = () => {
    const amenities = [
        "Free Wi-Fi throughout the hotel",
        "24/7 Room Service",
        "Rooftop swimming pool & sun deck",
        "Well-equipped gym",
        "Spa & massage treatments",
        "Complimentary breakfast",
        "Airport pickup on request",
    ];

    const highlights = [
        {
            title: "City-center Location",
            desc: "Just steps away from top attractions, restaurants, and nightlife.",
            icon: "🏙️",
        },
        {
            title: "Luxurious Rooms",
            desc: "Cozy beds, climate control, and premium-quality linen for maximum comfort.",
            icon: "🛏️",
        },
        {
            title: "Local Experiences",
            desc: "Book curated city tours, food walks, and customized adventures.",
            icon: "🎒",
        },
    ];

    const testimonials = [
        {
            name: "Aisha R.",
            text: "A perfect weekend with family — clean rooms, friendly staff, and delicious breakfast!",
        },
        {
            name: "Raj P.",
            text: "The city view from the room was amazing. Staff was very professional and kind.",
        },
    ];

    const faqs = [
        {
            q: "What are the check-in and check-out times?",
            a: "Check-in: 2:00 PM, Check-out: 12:00 PM — Late check-out available upon request.",
        },
        {
            q: "Are pet-friendly rooms available?",
            a: "Yes, limited pet-friendly rooms are available. Please contact us in advance.",
        },
    ];

    const galleryImages = [
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcache.marriott.com%2Fmarriottassets%2Fmarriott%2FLASJW%2Flasjw-guestroom-0111-hor-clsc.jpg%3Finterpolation%3Dprogressive-bilinear%26&f=1&nofb=1&ipt=1e98391049fb0574766a8daf62dc235b30f7ec53d688a18fc5ad8570b843f379",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.rosewoodhotels.com%2Fis%2Fimage%2Frwhg%2Fseascape-ocean-view-twin-room&f=1&nofb=1&ipt=9fae01938aa71cf8f97486f7c2bc51b67309ee2d71914e6689190527f3a72237",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcache.marriott.com%2Fmarriottassets%2Fmarriott%2FLASJW%2Flasjw-suite-0084-hor-clsc.jpg%3Finterpolation%3Dprogressive-bilinear%26&f=1&nofb=1&ipt=dd6ed3fd4ab5e9294269671a3851c1bb3a7da1330d4b0834ce8493983047f5a3",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcache.marriott.com%2Fmarriottassets%2Fmarriott%2FNYCSW%2Fnycsw-grand-9398-hor-clsc.jpg%3Finterpolation%3Dprogressive-bilinear%26&f=1&nofb=1&ipt=dabc52ff851ac0f6fe8e4a46a2be4b23dc3e81847e6253a19b2ac8ac7a7ba2cd",
    ];


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
            {/* HERO SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        Experience — Comfort & Adventure Awaits
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover everything that makes your stay unforgettable — comfort,
                        cuisine, and local culture.
                    </p>

                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">✨</span>
                            <span>
                                Carefully curated experiences —{" "}
                                <strong>hand-picked city tours</strong> and{" "}
                                <strong>cooking classes</strong>.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">🍳</span>
                            <span>
                                Daily complimentary breakfast with local and international
                                delicacies.
                            </span>
                        </li>
                    </ul>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#booking"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700"
                        >
                            Book Your Stay
                        </a>
                        <a
                            href="#experiences"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-gray-200"
                        >
                            Explore Experiences
                        </a>
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-50">
                    <img
                        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                        alt="Hotel rooftop view"
                        className="w-full h-72 sm:h-96 object-cover"
                    />
                </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {highlights.map((h) => (
                        <div
                            key={h.title}
                            className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition"
                        >
                            <div className="text-4xl">{h.icon}</div>
                            <h3 className="mt-4 font-semibold text-lg">{h.title}</h3>
                            <p className="mt-2 text-gray-600">{h.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* AMENITIES */}
            <section className="mb-12" id="amenities">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {amenities.map((a) => (
                        <div
                            key={a}
                            className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border hover:bg-gray-100 transition"
                        >
                            <div className="text-2xl">✔️</div>
                            <div className="text-gray-700">{a}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* EXPERIENCES & PACKAGES */}
            <section className="mb-12" id="experiences">
                <h2 className="text-2xl font-semibold mb-6">Experiences & Packages</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <article className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-lg">Local Food Walk</h3>
                        <p className="mt-2 text-gray-600">
                            Explore local street food and hidden gems on this guided 3-hour
                            culinary walk.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-500">Duration: 3 hours</div>
                            <div className="text-sm font-semibold">₹999</div>
                        </div>
                    </article>

                    <article className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-lg">Rooftop Sunrise Yoga</h3>
                        <p className="mt-2 text-gray-600">
                            Start your day with rejuvenating yoga under the sunrise. Suitable
                            for all levels.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-500">Duration: 1 hour</div>
                            <div className="text-sm font-semibold">₹499</div>
                        </div>
                    </article>

                    <article className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-lg">City Heritage Tour</h3>
                        <p className="mt-2 text-gray-600">
                            Discover the rich history of the city with a private guide.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-500">Duration: 4 hours</div>
                            <div className="text-sm font-semibold">₹1,499</div>
                        </div>
                    </article>
                </div>
            </section>

            {/* GALLERY */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {galleryImages.map((src, i) => (
                        <div
                            key={i}
                            className="rounded-lg overflow-hidden bg-gray-100 h-40 sm:h-52"
                        >
                            <img
                                src={`${src}?auto=format&fit=crop&w=800&q=80`}
                                alt={`Gallery ${i + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Guest Stories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {testimonials.map((t) => (
                        <blockquote
                            key={t.name}
                            className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition"
                        >
                            <p className="text-gray-700 italic">“{t.text}”</p>
                            <footer className="mt-4 font-semibold text-indigo-600">
                                — {t.name}
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </section>

            {/* FAQ & BOOKING CTA */}
            <section
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                id="booking"
            >
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((f) => (
                            <details
                                key={f.q}
                                className="p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition"
                            >
                                <summary className="font-medium cursor-pointer">{f.q}</summary>
                                <p className="mt-2 text-gray-600">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>

                {/* <aside className="p-6 rounded-2xl bg-indigo-600 text-white shadow-lg">
                    <h3 className="text-xl font-semibold">Ready to Book?</h3>
                    <p className="mt-2 text-sm opacity-90">
                        Get the best rooms & experience packages — pay at hotel or prepay
                        for exclusive discounts.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-3">
                        <a
                            href="/book?package=standard"
                            className="block text-center px-4 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
                        >
                            Book Standard
                        </a>
                        <a
                            href="/book?package=experience"
                            className="block text-center px-4 py-3 rounded-lg border border-white hover:bg-white hover:text-indigo-600 transition"
                        >
                            Book with Experience
                        </a>
                    </div>

                    <ul className="mt-6 text-sm opacity-90 space-y-2">
                        <li>Free cancellation 24 hours before arrival</li>
                        <li>Early check-in subject to availability</li>
                    </ul>
                </aside> */}
            </section>

            <footer className="mt-12 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} YourHotelName — Crafted experiences for
                every traveler
            </footer>
        </div>
    );
};



export default Experince
