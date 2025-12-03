import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua Santa Ginestrete Astolfi, 82",
    link: null,
    color: "bg-primary",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Segunda a sexta: 8h às 18h",
    link: null,
    color: "bg-secondary",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "adrianasimoesmara@gmail.com",
    link: "mailto:adrianasimoesmara@gmail.com",
    color: "bg-accent",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "Fale conosco agora",
    link: "https://wa.me/5519991790394",
    color: "bg-[#25D366]",
  },
];

export const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">Contato</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Entre em <span className="text-accent-gradient">contato</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para atender você e sua empresa. 
            Entre em contato e agende uma consulta.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-up">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border card-elevated text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{info.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-up animation-delay-200">
          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-8 md:p-10 text-center">
            <div className="w-20 h-20 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-background"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-background mb-3">
              Fale pelo WhatsApp
            </h3>
            <p className="text-background/80 mb-6 max-w-sm mx-auto">
              Atendimento rápido e direto. Tire suas dúvidas e agende uma consulta gratuita.
            </p>
            <a
              href="https://wa.me/5519991790394"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background text-[#25D366] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-background/90 transition-colors"
            >
              Iniciar conversa
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Email CTA */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-10 text-center">
            <div className="w-20 h-20 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-background" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-background mb-3">
              Envie um e-mail
            </h3>
            <p className="text-background/80 mb-6 max-w-sm mx-auto">
              Prefere o e-mail? Envie sua mensagem e responderemos o mais breve possível.
            </p>
            <a
              href="mailto:adrianasimoesmara@gmail.com"
              className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-background/90 transition-colors"
            >
              Enviar e-mail
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
