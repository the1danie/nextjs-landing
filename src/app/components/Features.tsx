import { Zap, Shield, Cpu, Lock, Globe, TrendingUp } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description:
            "Experience unprecedented speed with 120K TPS blockchain technology that outperforms traditional systems.",
    },
    {
        icon: Shield,
        title: "AI-Based Security",
        description:
            "Advanced artificial intelligence algorithms protect your data and transactions 24/7 with guaranteed security.",
    },
    {
        icon: Cpu,
        title: "Smart Contracts",
        description:
            "Deploy and execute smart contracts seamlessly with our optimized blockchain infrastructure.",
    },
    {
        icon: Lock,
        title: "Proof of Stake",
        description:
            "Energy-efficient consensus mechanism that ensures network security while maintaining unlimited speeds.",
    },
    {
        icon: Globe,
        title: "Global Scalability",
        description:
            "Scale your operations worldwide without compromising on speed or security thanks to our distributed architecture.",
    },
    {
        icon: TrendingUp,
        title: "Future-Ready",
        description:
            "Stay ahead with continuous innovation and updates that keep you at the forefront of blockchain technology.",
    },
];

export function Features() {
    return (
        <section id="services" className="relative bg-black py-24 lg:py-32 px-6 lg:px-16">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-16 lg:mb-20">
                    <h2
                        className="font-medium text-[48px] lg:text-[64px] mb-6 gradient-text tracking-[1.2px]"
                    >
                        Why Choose Us
                    </h2>
                    <p className="text-[18px] lg:text-[20px] text-white/80 max-w-2xl mx-auto leading-[30px] tracking-[0.6px]">
                        Discover the advantages that set our blockchain technology apart from the rest
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <article
                                key={index}
                                className="group relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-[#ff3bff]/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,59,255,0.1)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3bff]/0 to-[#5D6EF3]/0 group-hover:from-[#ff3bff]/5 group-hover:to-[#5D6EF3]/5 rounded-2xl transition-all duration-300" />
                                <div className="relative z-10">
                                    <div className="w-[56px] h-[56px] rounded-xl bg-gradient-to-br from-[#ff3bff] to-[#5D6EF3] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-medium text-[24px] text-white mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[16px] text-white/70 leading-[26px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
