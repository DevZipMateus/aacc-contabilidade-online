import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src="/images/logo.png"
              alt="AACC Assessoria Contábil"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 leading-relaxed max-w-md mb-4">
              Desde 2003 oferecendo soluções completas em contabilidade, 
              consultoria e assessoria empresarial para o crescimento 
              sustentável do seu negócio.
            </p>
            <p className="text-sm text-background/50">
              CNPJ: 05.518.437/0001-35
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-heading font-bold text-lg mb-4">
              Links rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#principios"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Princípios
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-background font-heading font-bold text-lg mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Rua Santa Ginestrete Astolfi, 82
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+5547989142369"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  (47) 98914-2369
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:adrianasimoesmara@gmail.com"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  adrianasimoesmara@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Seg - Sex: 8h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} AACC Assessoria Contábil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
