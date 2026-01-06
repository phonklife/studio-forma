import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Strategy",
    description: "We define your voice, values, and vision to build a foundation that resonates with your audience.",
    image: "/images/service-strategy.jpg",
    features: ["Market Research", "Brand Positioning", "Voice & Tone", "Content Strategy"]
  },
  {
    title: "Visual Identity",
    description: "Crafting distinct visual systems that tell your story through logo, typography, and color.",
    image: "/images/service-identity.jpg",
    features: ["Logo Design", "Design Systems", "Typography", "Brand Guidelines"]
  },
  {
    title: "Digital Design",
    description: "Creating immersive web experiences that convert visitors into loyal advocates.",
    image: "/images/service-digital.jpg",
    features: ["Web Design", "UI/UX", "Mobile Apps", "Interaction Design"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Our Expertise</h2>
          <p className="text-lg text-muted-foreground">
            We approach every project with a blend of strategic thinking and artistic intuition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="soft-card h-full overflow-hidden border-none bg-background">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm font-medium text-foreground/80 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
