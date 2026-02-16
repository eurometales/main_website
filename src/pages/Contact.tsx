import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulación - en el futuro conectará con Supabase
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo lo antes posible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-dark py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-black text-secondary-foreground mb-4">
              Contacto
            </h1>
            <p className="text-secondary-foreground/70 max-w-xl mx-auto">
              Pídenos presupuesto sin compromiso. Te respondemos en menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-heading font-bold mb-6">
                Envíanos tu consulta
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-1.5">
                      Nombre *
                    </label>
                    <Input id="name" name="name" required placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-1.5">
                      Empresa
                    </label>
                    <Input id="company" name="company" placeholder="Tu empresa" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">
                      Teléfono
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="Tu teléfono" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-1.5">
                    Asunto *
                  </label>
                  <Input id="subject" name="subject" required placeholder="¿En qué podemos ayudarte?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe los productos que necesitas, cantidades, medidas..."
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar mensaje"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* Info lateral */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-heading font-bold mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-lg bg-accent border border-border">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-sm mb-1">Ubicación</h3>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                {siteConfig.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 p-5 rounded-lg bg-accent border border-border hover:border-primary/30 transition-colors"
                  >
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold text-sm mb-1">Teléfono</h3>
                      <p className="text-sm text-muted-foreground">{phone}</p>
                    </div>
                  </a>
                ))}

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-5 rounded-lg bg-accent border border-border hover:border-primary/30 transition-colors"
                >
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-sm mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-lg bg-accent border border-border">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-sm mb-1">Horario</h3>
                    <p className="text-sm text-muted-foreground">
                      Lunes a Viernes: 8:00 - 18:00
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sábados: 8:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
