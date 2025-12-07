import { Leaf, Shield, DollarSign, Users } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Hand-picked vegetables and ingredients sourced daily from trusted local farms for maximum freshness and flavor"
  },
  {
    icon: Shield,
    title: "Hygienic Kitchen",
    description: "Maintained to the highest cleanliness standards with regular sanitization and quality control checks"
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Premium quality vegetarian meals at prices that won't break the bank, making healthy eating accessible"
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Warm, welcoming atmosphere perfect for families, friends, and celebrations of all kinds"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose Viransh Veg?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            We're committed to excellence in every aspect of your dining experience
          </p>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up border border-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="text-green-600" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
