import { Cake, PartyPopper, Heart, Baby, Home, Church } from "lucide-react";

const services = [
    {
        title: "Birthday Parties",
        icon: <Cake className="w-10 h-10" />,
        description: "Make your birthday celebrations unforgettable with our special menus.",
    },
    {
        title: "Anniversaries",
        icon: <Heart className="w-10 h-10" />,
        description: "Elegant catering for your special milestones and celebrations.",
    },
    {
        title: "Weddings",
        icon: <PartyPopper className="w-10 h-10" />,
        description: "Grand wedding feasts curated with perfection and tradition.",
    },
    {
        title: "Baby Shower",
        icon: <Baby className="w-10 h-10" />,
        description: "Warm and joyous catering for welcoming your little ones.",
    },
    {
        title: "House Warming",
        icon: <Home className="w-10 h-10" />,
        description: "Traditional and modern dishes for your new beginnings.",
    },
    {
        title: "Temple & Festivals",
        icon: <Church className="w-10 h-10" />,
        description: "Authentic festival cooking and religious event catering.",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-16 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-gold-500 text-sm sm:text-base font-sans font-bold uppercase tracking-widest mb-2">
                        Specialized Services
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
                        What We <span className="text-gold-gradient">Provide</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl group hover:border-gold-500/50 md:hover:border-gold-500/50 transition-all duration-500 gold-glow-hover md:gold-glow-hover hover:-translate-y-1 md:hover:-translate-y-1"
                        >
                            <div className="text-gold-500 mb-4 sm:mb-6 group-hover:scale-110 md:group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h4 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4 group-hover:text-gold-500 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-white/60 text-sm sm:text-base">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
