import { motion } from "framer-motion";

const clients = [
  "Vogue", "Aesop", "Kinfolk", "Cereal", "Herman Miller", "Muji"
];

export default function Clients() {
  return (
    <section className="py-16 border-y border-border/40">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest">
          Trusted by visionaries
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-foreground/80"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
