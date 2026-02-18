import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Wrench, SlidersHorizontal, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import { productSections, type ProductSection, type Category, type SubCategory } from "@/data/products";
import ProductSearch from "@/components/products/ProductSearch";
import { extrasToServiceIds } from "@/data/services";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

const Products = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <title>Catálogo de Productos de Hierro y Acero | Eurometales</title>
        <meta
          name="description"
          content="Catálogo completo de productos de hierro, acero y metales. Perfiles estructurales, chapas, tubos, corrugado, aceros especiales e inoxidable. Calidad certificada según normativas europeas."
        />
        <link rel="canonical" href={`${siteConfig.url}/productos`} />
        <meta property="og:title" content="Catálogo de Productos de Hierro y Acero | Eurometales" />
        <meta
          property="og:description"
          content="Catálogo completo de productos de hierro, acero y metales. Perfiles estructurales, chapas, tubos, corrugado, aceros especiales e inoxidable."
        />
        <meta property="og:url" content={`${siteConfig.url}/productos`} />
        <meta property="og:image" content={`${siteConfig.url}${siteConfig.ogImage}`} />
        <meta name="twitter:title" content="Catálogo de Productos de Hierro y Acero | Eurometales" />
        <meta
          name="twitter:description"
          content="Catálogo completo de productos de hierro, acero y metales. Perfiles estructurales, chapas, tubos, corrugado, aceros especiales e inoxidable."
        />
        <meta name="twitter:image" content={`${siteConfig.url}${siteConfig.ogImage}`} />
      </Helmet>
      <SchemaOrg
        type="LocalBusiness"
        breadcrumbs={[
          { name: "Inicio", url: "/" },
          { name: "Productos", url: "/productos" },
        ]}
      />
      {/* Header */}
      <section className="gradient-dark py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-black text-secondary-foreground mb-4">
              Nuestros Productos
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
              Catálogo completo de hierro, acero y metales. Calidad certificada según normativas europeas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile search bar trigger */}
      <div className="lg:hidden sticky top-16 z-40 bg-background border-b border-border shadow-sm">
        <div className="section-container flex items-center gap-3 py-2">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors flex-1"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Buscar producto…
          </button>
          <Button asChild variant="cta" size="sm" className="flex-shrink-0">
            <Link to="/contacto">Presupuesto</Link>
          </Button>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-10 w-80 max-w-[90vw] bg-background h-full shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <span className="font-heading font-bold text-sm">Buscar productos</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <ProductSearch onResultClick={() => setSidebarOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Main layout: sidebar + content */}
      <div className="section-container py-10">
        <div className="flex gap-8 items-start">

          {/* Desktop sidebar */}
          <aside className="hidden lg:flex flex-col gap-6 w-64 flex-shrink-0 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Buscar productos
              </h2>
              <ProductSearch />
            </div>

            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p className="text-sm font-semibold mb-2">¿Necesitas ayuda?</p>
              <p className="text-xs text-muted-foreground mb-3">
                Solicita tu presupuesto personalizado sin compromiso.
              </p>
              <Button asChild variant="cta" size="sm" className="w-full">
                <Link to="/contacto">Pedir presupuesto</Link>
              </Button>
            </div>
          </aside>

          {/* Product sections */}
          <div className="flex-1 min-w-0">
            {productSections.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 gradient-dark">
        <div className="section-container text-center">
          <h2 className="text-3xl font-heading font-black text-secondary-foreground mb-4">
            ¿Necesitas alguno de estos productos?
          </h2>
          <p className="text-secondary-foreground/70 mb-8 max-w-lg mx-auto">
            Solicita tu presupuesto personalizado sin compromiso.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contacto">
              Pide tu presupuesto <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

const SectionBlock = ({ section }: { section: ProductSection }) => {
  const img = section.imageKey ? images.products[section.imageKey] : null;

  return (
    <section id={section.id} className="mb-16 scroll-mt-28">
      <div>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          {img && (
            <img
              src={img}
              alt={section.name}
              className="w-full sm:w-48 h-36 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          )}
          <div>
            <h2 className="text-3xl font-heading font-black mb-2">
              <span className="text-gradient">{section.name}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">{section.description}</p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {section.categories.map((cat) => (
            <CategoryBlock key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryBlock = ({ category }: { category: Category }) => {
  const [expanded, setExpanded] = useState(false);
  const img = category.imageKey ? images.products[category.imageKey] : null;
  const showAll = expanded || category.subcategories.length <= 4;
  const visibleSubs = showAll ? category.subcategories : category.subcategories.slice(0, 4);

  return (
    <div id={category.id} className="scroll-mt-28">
      <div className="border border-border rounded-lg overflow-hidden bg-card">
        <div className="p-5 md:p-6">
          <div className="flex items-start gap-4 mb-4">
            {img && (
              <img
                src={img}
                alt={category.name}
                className="w-16 h-16 object-cover rounded-md flex-shrink-0 hidden sm:block"
                loading="lazy"
              />
            )}
            <div>
              <h3 className="text-xl font-heading font-bold mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {visibleSubs.map((sub) => (
              <SubCategoryCard key={sub.id} sub={sub} />
            ))}
          </div>

          {!showAll && (
            <button
              onClick={() => setExpanded(true)}
              className="mt-4 text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1"
            >
              Ver {category.subcategories.length - 4} más
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const SubCategoryCard = ({ sub }: { sub: SubCategory }) => {
  const [open, setOpen] = useState(false);
  const img = sub.imageKey ? images.products[sub.imageKey] : null;

  return (
    <div id={sub.id} className="border border-border rounded-md p-4 hover:border-primary/30 transition-colors bg-background scroll-mt-28">
      <div
        className={`flex items-start gap-3 ${sub.items?.length ? "cursor-pointer" : ""}`}
        onClick={() => sub.items?.length && setOpen(!open)}
      >
        {img && (
          <img
            src={img}
            alt={sub.name}
            className="w-12 h-12 object-cover rounded flex-shrink-0"
            loading="lazy"
          />
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-bold text-sm mb-1">{sub.name}</h4>
          <p className="text-xs text-muted-foreground line-clamp-2">{sub.description}</p>
        </div>
        {sub.items?.length ? (
          <ChevronRight
            className={`h-4 w-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform ${
              open ? "rotate-90" : ""
            }`}
          />
        ) : null}
      </div>

      {/* Services badges — always visible */}
      {sub.extras && (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
            <Wrench className="h-3 w-3" /> Servicios disponibles
          </p>
          <div className="flex flex-wrap gap-2">
            {extrasToServiceIds(sub.extras).map(({ label, serviceId }) =>
              serviceId ? (
                <Link
                  key={label}
                  to={`/servicios#${serviceId}`}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground border border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {label}
                </Link>
              ) : (
                <span
                  key={label}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border"
                >
                  {label}
                </span>
              )
            )}
          </div>
        </div>
      )}

      {/* Expandable items */}
      {open && sub.items?.length && (
        <div className="mt-4 space-y-3">
          {sub.items.map((item) => (
            <div key={item.id} className="pl-4 border-l-2 border-primary/20">
              <h5 className="font-semibold text-sm">{item.name}</h5>
              <p className="text-xs text-muted-foreground">{item.description}</p>
              {item.qualities && (
                <p className="text-xs mt-1">
                  <span className="font-semibold">Calidades:</span> {item.qualities}
                </p>
              )}
              {item.lengths && (
                <p className="text-xs">
                  <span className="font-semibold">Largos:</span> {item.lengths}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
