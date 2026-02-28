import { svgPaths } from "@/lib/svgPaths";

const socialLinks = [
    { href: "https://github.com", label: "GitHub", path: svgPaths.github },
    { href: "https://discord.com", label: "Discord", path: svgPaths.discord },
    { href: "https://reddit.com", label: "Reddit", path: svgPaths.reddit },
    { href: "https://twitter.com", label: "Twitter", path: svgPaths.twitter },
];

export function Footer() {
    return (
        <footer className="relative bg-black border-t border-white/10 py-16 lg:py-20 px-6 lg:px-16">
            {/* Subtle top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ff3bff]/40 to-transparent" />

            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <p className="font-medium text-[24px] text-white mb-6">SITE NAME</p>
                        <p className="text-[16px] text-white/70 leading-[26px] mb-6">
                            The fastest and most secure AI-based blockchain platform for the future.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    aria-label={s.label}
                                >
                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product */}
                    <nav aria-label="Product links">
                        <h4 className="font-medium text-[18px] text-white mb-4">Product</h4>
                        <ul className="space-y-3">
                            {[
                                { href: "#smart-contracts", label: "Smart Contracts" },
                                { href: "#services", label: "Services" },
                                { href: "#solutions", label: "Solutions" },
                                { href: "#roadmap", label: "Roadmap" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-[16px] text-white/70 hover:text-[#ff3bff] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Resources */}
                    <nav aria-label="Resource links">
                        <h4 className="font-medium text-[18px] text-white mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {[
                                { href: "#whitepaper", label: "Whitepaper" },
                                { href: "#documentation", label: "Documentation" },
                                { href: "#api", label: "API Reference" },
                                { href: "#support", label: "Support" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-[16px] text-white/70 hover:text-[#ff3bff] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact */}
                    <address className="not-italic">
                        <h4 className="font-medium text-[18px] text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:info@sitename.com"
                                    className="text-[16px] text-white/70 hover:text-[#ff3bff] transition-colors"
                                >
                                    info@sitename.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    className="text-[16px] text-white/70 hover:text-[#ff3bff] transition-colors"
                                >
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li>
                                <p className="text-[16px] text-white/70 leading-[26px]">
                                    123 Blockchain Street
                                    <br />
                                    San Francisco, CA 94102
                                </p>
                            </li>
                        </ul>
                    </address>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[14px] text-white/60 text-center md:text-left">
                            © 2026 SITE NAME. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href="#privacy"
                                className="text-[14px] text-white/60 hover:text-[#ff3bff] transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#terms"
                                className="text-[14px] text-white/60 hover:text-[#ff3bff] transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
