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

type LightboxState = { src: string; alt: string } | null;

const Products = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    if (!lightbox) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

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
        <meta property="og:image:width" content={String(siteConfig.ogImageWidth)} />
        <meta property="og:image:height" content={String(siteConfig.ogImageHeight)} />
        <meta property="og:image:alt" content={siteConfig.ogImageAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catálogo de Productos de Hierro y Acero | Eurometales" />
        <meta
          name="twitter:description"
          content="Catálogo completo de productos de hierro, acero y metales. Perfiles estructurales, chapas, tubos, corrugado, aceros especiales e inoxidable."
        />
        <meta name="twitter:image" content={`${siteConfig.url}${siteConfig.ogImage}`} />
        <meta name="twitter:image:alt" content={siteConfig.ogImageAlt} />
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
              <SectionBlock
                key={section.id}
                section={section}
                onImageClick={(src, alt) => setLightbox({ src, alt })}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox: tocar imagen en móvil para ampliar */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 z-10 rounded-full p-2 text-white hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[calc(100vh-2rem)] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

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

const SectionBlock = ({
  section,
  onImageClick,
}: {
  section: ProductSection;
  onImageClick: (src: string, alt: string) => void;
}) => {
  const img = section.imageKey ? images.products[section.imageKey] : null;

  return (
    <section id={section.id} className="mb-16 scroll-mt-28">
      <div>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          {img && (
            <div
              className="w-full sm:w-48 h-36 rounded-lg shadow-md overflow-hidden flex-shrink-0 cursor-pointer lg:cursor-default"
              onClick={() => onImageClick(img, section.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onImageClick(img, section.name)}
              aria-label={`Ampliar imagen de ${section.name}`}
            >
              <img
                src={img}
                alt={section.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-out lg:hover:scale-110"
                loading="lazy"
              />
            </div>
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
            <CategoryBlock
              key={cat.id}
              category={cat}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryBlock = ({
  category,
  onImageClick,
}: {
  category: Category;
  onImageClick: (src: string, alt: string) => void;
}) => {
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
              <div
                className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 hidden sm:block cursor-pointer lg:cursor-default"
                onClick={() => onImageClick(img, category.name)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onImageClick(img, category.name)}
                aria-label={`Ampliar imagen de ${category.name}`}
              >
                <img
                  src={img}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out lg:hover:scale-110"
                  loading="lazy"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl font-heading font-bold mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {visibleSubs.map((sub) => (
              <SubCategoryCard
                key={sub.id}
                sub={sub}
                onImageClick={onImageClick}
              />
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

const SubCategoryCard = ({
  sub,
  onImageClick,
}: {
  sub: SubCategory;
  onImageClick: (src: string, alt: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const img = sub.imageKey ? images.products[sub.imageKey] : null;

  return (
    <div id={sub.id} className="border border-border rounded-md p-4 hover:border-primary/30 transition-colors bg-background scroll-mt-28">
      <div
        className={`flex items-start gap-3 ${sub.items?.length ? "cursor-pointer" : ""}`}
        onClick={() => sub.items?.length && setOpen(!open)}
      >
        {img && (
          <div
            className="w-12 h-12 rounded overflow-hidden flex-shrink-0 cursor-pointer lg:cursor-default shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onImageClick(img, sub.name);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.key === "Enter") onImageClick(img, sub.name);
            }}
            aria-label={`Ampliar imagen de ${sub.name}`}
          >
            <img
              src={img}
              alt={sub.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-out lg:hover:scale-110"
              loading="lazy"
            />
          </div>
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
