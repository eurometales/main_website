import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { services } from "@/data/services";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location.hash]);

  return (
    <Layout>
      <Helmet>
        <title>Servicios de Transformación y Corte de Metal | Eurometales</title>
        <meta
          name="description"
          content="Servicios de corte, taladro, fresado, granallado, pintado, cizalla y plegado de acero y metales. Transformamos los productos a medida del cliente."
        />
      </Helmet>

      {/* Header */}
      <section className="gradient-dark py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-black text-secondary-foreground mb-4">
              Servicios de Transformación
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              La mayoría de nuestros productos pueden modificarse a petición del cliente.
              En cada producto indicamos los tipos de trabajos de modificación a medida disponibles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick nav */}
      <div className="border-b border-border bg-muted/40">
        <div className="section-container py-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
              Servicios:
            </span>
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-colors"
              >
                {service.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Intro banner */}
      <div className="section-container py-10">
        <div className="rounded-xl border border-primary/20 bg-accent p-6 flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Wrench className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-base mb-1">
              Modificaciones a medida del cliente
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La mayoría de nuestros productos permiten ser transformados según las necesidades específicas
              del cliente. Al consultar cada producto en nuestro catálogo, encontrarás indicados los servicios
              de transformación disponibles. Haz clic en cualquier servicio para conocer sus capacidades técnicas
              detalladas.
            </p>
          </div>
        </div>
      </div>

      {/* Services list */}
      <div className="section-container pb-16">
        <div className="space-y-12">
          {services.map((service, idx) => (
            <motion.section
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="scroll-mt-28"
            >
              {/* Service header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-black">
                    <span className="text-gradient">{service.name}</span>
                  </h2>
                  <p className="text-muted-foreground mt-1 leading-relaxed max-w-3xl">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Detail cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-16">
                {service.details.map((detail) => (
                  <div
                    key={detail.title}
                    className="rounded-lg border border-border bg-card p-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <h3 className="font-heading font-bold text-sm">
                        {detail.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              {idx < services.length - 1 && (
                <div className="mt-12 border-t border-border" />
              )}
            </motion.section>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 gradient-dark">
        <div className="section-container text-center">
          <h2 className="text-3xl font-heading font-black text-secondary-foreground mb-4">
            ¿Necesitas alguno de estos servicios?
          </h2>
          <p className="text-secondary-foreground/70 mb-8 max-w-lg mx-auto">
            Solicita tu presupuesto personalizado sin compromiso. Adaptamos cualquier producto a tu medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contacto">
                Pide tu presupuesto <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/productos">Ver productos</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
