import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Message sent successfully! We'll be in touch soon.");
    form.reset();
  }

  return (
    <footer id="contact" className="bg-foreground text-background py-24 rounded-t-[3rem] mt-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Let's build something <br />
              <span className="text-primary italic">meaningful.</span>
            </h2>
            <p className="text-lg text-background/70 mb-12 max-w-md">
              Ready to elevate your brand? Tell us about your project, and let's explore how we can work together.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-background/50 mb-4">Studio</h4>
                <p className="text-lg">123 Design District</p>
                <p className="text-lg">New York, NY 10012</p>
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-background/50 mb-4">Contact</h4>
                <a href="mailto:hello@studioforma.com" className="text-lg hover:text-primary transition-colors block">hello@studioforma.com</a>
                <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors block">+1 (234) 567-890</a>
              </div>
            </div>
          </div>

          <div className="bg-background/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                <Input 
                  {...form.register("name")}
                  placeholder="Jane Doe" 
                  className="bg-transparent border-background/20 text-background placeholder:text-background/30 h-12 rounded-xl focus-visible:ring-primary" 
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm ml-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                <Input 
                  {...form.register("email")}
                  placeholder="jane@example.com" 
                  className="bg-transparent border-background/20 text-background placeholder:text-background/30 h-12 rounded-xl focus-visible:ring-primary" 
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm ml-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                <Textarea 
                  {...form.register("message")}
                  placeholder="Tell us about your project..." 
                  className="bg-transparent border-background/20 text-background placeholder:text-background/30 min-h-[150px] rounded-xl focus-visible:ring-primary resize-none" 
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-sm ml-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full h-14 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© 2024 Studio Forma. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Instagram</a>
            <a href="#" className="hover:text-background transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-background transition-colors">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
