import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { images } from "@/config/images";
import { productSections, type ProductSection, type Category, type SubCategory } from "@/data/products";

const Products = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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

      {/* Quick Nav */}
      <section className="sticky top-16 md:top-20 z-40 bg-background border-b border-border shadow-sm">
        <div className="section-container">
          <div className="flex items-center gap-4 py-3 overflow-x-auto scrollbar-hide">
            {productSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-heading font-semibold whitespace-nowrap px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {section.name}
              </a>
            ))}
            <Button asChild variant="cta" size="sm" className="ml-auto flex-shrink-0">
              <Link to="/contacto">Pide presupuesto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <div className="py-12">
        {productSections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
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
    <section id={section.id} className="mb-16 scroll-mt-40">
      <div className="section-container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
          {img && (
            <img
              src={img}
              alt={section.name}
              className="w-full md:w-64 h-48 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          )}
          <div>
            <h2 className="text-3xl font-heading font-black mb-3">
              <span className="text-gradient">{section.name}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">{section.description}</p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-10">
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
    <div id={category.id} className="scroll-mt-40">
      <div className="border border-border rounded-lg overflow-hidden bg-card">
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            {img && (
              <img
                src={img}
                alt={category.name}
                className="w-20 h-20 object-cover rounded-md flex-shrink-0 hidden sm:block"
                loading="lazy"
              />
            )}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          </div>

          {/* Subcategories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
    <div className="border border-border rounded-md p-4 hover:border-primary/30 transition-colors bg-background">
      <div
        className="flex items-start gap-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {img && (
          <img
            src={img}
            alt={sub.name}
            className="w-14 h-14 object-cover rounded flex-shrink-0"
            loading="lazy"
          />
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-bold text-sm mb-1">{sub.name}</h4>
          <p className="text-xs text-muted-foreground line-clamp-2">{sub.description}</p>
        </div>
        <ChevronRight
          className={`h-4 w-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </div>

      {open && (
        <div className="mt-4 space-y-3">
          {sub.items &&
            sub.items.map((item) => (
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
          {sub.extras && (
            <div className="flex items-center gap-2 text-xs text-primary font-semibold pt-2">
              <Wrench className="h-3 w-3" />
              Servicios extra: {sub.extras}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
