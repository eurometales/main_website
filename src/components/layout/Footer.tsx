import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import logo from "@/assets/logo-eurometales.png";

const Footer = () => {
  return (
    <footer className="gradient-dark text-secondary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Eurometales" className="h-10 w-auto mb-4" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-xs">
              Distribuidores de hierro, acero y metales en Madrid. Calidad, experiencia
              y servicio profesional para tu proyecto.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Navegación</h3>
            <nav className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="text-sm text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Pide tu presupuesto
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contacto</h3>
            <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                {siteConfig.contact.address}
              </div>
              {siteConfig.contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} {siteConfig.contact.companyName}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
