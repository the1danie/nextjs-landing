import { Star } from "lucide-react";

export const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CTO, TechCorp",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        rating: 5,
        text: "The speed and security of this blockchain platform are unmatched. We've seen a 300% improvement in transaction processing since switching.",
    },
    {
        name: "Michael Chen",
        role: "Blockchain Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        rating: 5,
        text: "Smart contract deployment has never been easier. The AI-based security gives us peace of mind for our enterprise applications.",
    },
    {
        name: "Emma Rodriguez",
        role: "CEO, CryptoFinance",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        rating: 5,
        text: "Outstanding scalability and performance. The Proof of Stake consensus is exactly what we needed for our global operations.",
    },
    {
        name: "David Park",
        role: "Solutions Architect",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        rating: 5,
        text: "Integration was seamless and the support team is incredibly knowledgeable. This platform is truly future-ready.",
    },
];

export function Testimonials() {
    return (
        <>
            <section className="relative bg-black py-24 lg:py-32 px-6 lg:px-16">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16 lg:mb-20">
                        <h2
                            className="font-medium text-[48px] lg:text-[64px] mb-6 gradient-text tracking-[1.2px]"
                        >
                            What Our Clients Say
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-white/80 max-w-2xl mx-auto leading-[30px] tracking-[0.6px]">
                            Trusted by developers and enterprises worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <article
                                key={index}
                                className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-[#ff3bff]/50 transition-all duration-300"
                                itemScope
                                itemType="https://schema.org/Review"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-[64px] h-[64px] rounded-full object-cover border-2 border-[#ff3bff]/30 flex-shrink-0"
                                        itemProp="image"
                                        width={64}
                                        height={64}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className="font-medium text-[20px] text-white mb-1"
                                            itemProp="author"
                                            itemScope
                                            itemType="https://schema.org/Person"
                                        >
                                            <span itemProp="name">{testimonial.name}</span>
                                        </h3>
                                        <p className="text-[14px] text-white/60">{testimonial.role}</p>
                                    </div>
                                    <div
                                        className="flex items-center gap-1 flex-shrink-0"
                                        itemProp="reviewRating"
                                        itemScope
                                        itemType="https://schema.org/Rating"
                                    >
                                        <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                                        <meta itemProp="bestRating" content="5" />
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-[#ff3bff] text-[#ff3bff]" />
                                        ))}
                                    </div>
                                </div>
                                <p
                                    className="text-[16px] text-white/80 leading-[26px]"
                                    itemProp="reviewBody"
                                >
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* JSON-LD Schema.org for Reviews */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        name: "AI-Based Blockchain Platform",
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "5",
                            reviewCount: testimonials.length.toString(),
                        },
                        review: testimonials.map((t) => ({
                            "@type": "Review",
                            author: {
                                "@type": "Person",
                                name: t.name,
                            },
                            reviewRating: {
                                "@type": "Rating",
                                ratingValue: t.rating.toString(),
                                bestRating: "5",
                            },
                            reviewBody: t.text,
                        })),
                    }),
                }}
            />
        </>
    );
}
