import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-6">Selected Work</h2>
            <p className="text-lg text-muted-foreground">
              A curation of our most recent partnerships and the stories we've helped tell.
            </p>
          </div>
          <Button variant="outline" className="rounded-full">
            View all projects
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9]"
        >
          <img
            src="/images/case-study-preview.jpg"
            alt="Featured Case Study"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-white/80 text-sm font-medium tracking-wider uppercase mb-2 block">
                  Featured Case Study
                </span>
                <h3 className="text-3xl md:text-5xl font-serif text-white mb-4">
                  Radica Coffee Co.
                </h3>
                <p className="text-white/90 max-w-xl text-lg">
                  Reimagining the coffee experience through sustainable packaging and a warm, earthy visual identity.
                </p>
              </div>
              <Button size="icon" className="rounded-full h-14 w-14 bg-white text-black hover:bg-white/90 hidden md:flex">
                <ArrowUpRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
