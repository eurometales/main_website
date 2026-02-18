import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Award, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const productCategories = [
  {
    title: "Perfiles de Acero",
    desc: "Estructurales, comerciales y laminados en frío. IPN, IPE, HEA, HEB, UPN y más.",
    image: images.landing.largos,
    href: "/productos#perfiles",
  },
  {
    title: "Chapas",
    desc: "Laminadas en caliente y frío, decapadas, estriadas, galvanizadas, corten y más.",
    image: images.landing.planos,
    href: "/productos#chapas",
  },
  {
    title: "Tubos",
    desc: "Estructurales, de conducción, precisión, galvanizados y laminados en frío.",
    image: images.landing.tubos,
    href: "/productos#tubos",
  },
  {
    title: "Corrugado y Mallazo",
    desc: "Acero corrugado, grafil, malla electrosoldada y armadura en celosía.",
    image: images.landing.corrugado,
    href: "/productos#corrugado",
  },
  {
    title: "Aceros Especiales",
    desc: "Calibrados, aleados, al carbono, barra perforada, cromada e inoxidable.",
    image: images.landing.aceros_especiales,
    href: "/productos#aceros-especiales",
  },
  {
    title: "Acero Inoxidable",
    desc: "Chapa inoxidable en distintos acabados, formatos y espesores.",
    image: images.landing.acero_inoxidable,
    href: "/productos#acero-inoxidable",
  },
];

const whyUs = [
  {
    icon: Shield,
    title: "Calidad Garantizada",
    desc: "Todos nuestros productos cumplen con las normativas europeas más exigentes.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    desc: "Servicio de entrega en toda la Comunidad de Madrid y envíos a nivel nacional.",
  },
  {
    icon: Award,
    title: "Experiencia",
    desc: "Años de experiencia en el sector siderúrgico nos avalan como referentes.",
  },
];

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={`${siteConfig.url}/`} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={`${siteConfig.url}/`} />
        <meta property="og:image" content={`${siteConfig.url}${siteConfig.ogImage}`} />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={`${siteConfig.url}${siteConfig.ogImage}`} />
      </Helmet>
      <SchemaOrg type="LocalBusiness" />
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.landing.hero})` }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative section-container py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-4xl md:text-6xl font-heading font-black text-primary-foreground leading-tight mb-6"
            >
              Tu proveedor de{" "}
              <span className="text-gradient">hierro y acero</span>{" "}
              en Madrid
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Distribuidores de perfiles, chapas, tubos, corrugado y aceros especiales.
              Calidad, stock permanente y servicio de corte a medida.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-wrap gap-4"
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/contacto">
                  Pide tu presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/productos">Ver productos</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
              Nuestros <span className="text-gradient">Productos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Una de las gamas más completas de acero y hierro del mercado, pensada para responder a cualquier necesidad constructiva o industrial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Link
                  to={cat.href}
                  className="group block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué nosotros */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
              ¿Por qué <span className="text-gradient">Eurometales</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-dark">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-secondary-foreground mb-4">
              ¿Necesitas un presupuesto?
            </h2>
            <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">
              Contacta con nosotros y te prepararemos un presupuesto personalizado sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contacto">
                  Contáctanos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <a href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {siteConfig.contact.phones[0]}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
