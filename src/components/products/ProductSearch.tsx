import { useState, useMemo } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import { productSections, type SubCategory, type Category, type ProductSection } from "@/data/products";

interface SearchResult {
  type: "section" | "category" | "subcategory" | "item";
  sectionId: string;
  sectionName: string;
  categoryId?: string;
  categoryName?: string;
  subId?: string;
  subName?: string;
  itemName?: string;
  description?: string;
}

function getAllResults(): SearchResult[] {
  const results: SearchResult[] = [];
  productSections.forEach((section) => {
    results.push({
      type: "section",
      sectionId: section.id,
      sectionName: section.name,
      description: section.description,
    });
    section.categories.forEach((cat) => {
      results.push({
        type: "category",
        sectionId: section.id,
        sectionName: section.name,
        categoryId: cat.id,
        categoryName: cat.name,
        description: cat.description,
      });
      cat.subcategories.forEach((sub) => {
        results.push({
          type: "subcategory",
          sectionId: section.id,
          sectionName: section.name,
          categoryId: cat.id,
          categoryName: cat.name,
          subId: sub.id,
          subName: sub.name,
          description: sub.description,
        });
        sub.items?.forEach((item) => {
          results.push({
            type: "item",
            sectionId: section.id,
            sectionName: section.name,
            categoryId: cat.id,
            categoryName: cat.name,
            subId: sub.id,
            subName: sub.name,
            itemName: item.name,
            description: item.description,
          });
        });
      });
    });
  });
  return results;
}

const ALL_RESULTS = getAllResults();

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

interface ProductSearchProps {
  onResultClick?: () => void;
}

const ProductSearch = ({ onResultClick }: ProductSearchProps) => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_RESULTS.filter(
      (r) =>
        r.sectionName.toLowerCase().includes(q) ||
        r.categoryName?.toLowerCase().includes(q) ||
        r.subName?.toLowerCase().includes(q) ||
        r.itemName?.toLowerCase().includes(q) ||
        r.description?.toLowerCase().includes(q)
    ).slice(0, 30);
  }, [query]);

  const handleClick = (result: SearchResult) => {
    const targetId = result.subId ?? result.categoryId ?? result.sectionId;
    scrollTo(targetId);
    onResultClick?.();
  };

  const getBreadcrumb = (r: SearchResult) => {
    const parts: string[] = [r.sectionName];
    if (r.categoryName) parts.push(r.categoryName);
    if (r.subName && r.subName !== r.categoryName) parts.push(r.subName);
    return parts;
  };

  const getLabel = (r: SearchResult) => r.itemName ?? r.subName ?? r.categoryName ?? r.sectionName;

  return (
    <div className="flex flex-col gap-4">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar producto..."
          className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Results */}
      {query.trim() && (
        <div className="flex flex-col gap-1">
          {results.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              Sin resultados para <strong>"{query}"</strong>
            </p>
          ) : (
            <>
              <p className="text-xs text-muted-foreground mb-1">
                {results.length} resultado{results.length !== 1 ? "s" : ""}
              </p>
              {results.map((r, i) => {
                const breadcrumb = getBreadcrumb(r);
                const label = getLabel(r);
                return (
                  <button
                    key={i}
                    onClick={() => handleClick(r)}
                    className="text-left px-3 py-2.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group"
                  >
                    <p className="text-sm font-semibold leading-tight group-hover:text-primary">
                      {label}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                      {breadcrumb.map((part, idx) => (
                        <span key={idx} className="flex items-center gap-1">
                          <span className="text-xs text-muted-foreground">{part}</span>
                          {idx < breadcrumb.length - 1 && (
                            <ChevronRight className="h-3 w-3 text-muted-foreground" />
                          )}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </>
          )}
        </div>
      )}

      {/* Quick nav when no query */}
      {!query.trim() && (
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
            Secciones
          </p>
          {productSections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => { scrollTo(section.id); onResultClick?.(); }}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {section.name}
              </button>
              <div className="ml-3 flex flex-col gap-0.5">
                {section.categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { scrollTo(cat.id); onResultClick?.(); }}
                    className="w-full text-left px-3 py-1.5 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
