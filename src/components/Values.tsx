import { Lock, Scale, CheckSquare, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Lock,
    title: "Confidencialidade",
    description: "Suas informações estão seguras conosco, com total sigilo e proteção de dados.",
    color: "bg-primary",
  },
  {
    icon: Scale,
    title: "Ética",
    description: "Atuamos com integridade e respeito em todas as nossas relações profissionais.",
    color: "bg-secondary",
  },
  {
    icon: CheckSquare,
    title: "Responsabilidade",
    description: "Cumprimos nossos compromissos com excelência e pontualidade.",
    color: "bg-accent",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Comunicação clara e honesta em todos os processos e resultados.",
    color: "bg-primary",
  },
  {
    icon: Heart,
    title: "Comprometimento",
    description: "Dedicação total ao sucesso e crescimento de cada cliente.",
    color: "bg-secondary",
  },
];

export const Values = () => {
  return (
    <section id="principios" className="section-padding section-alt">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">Nossos princípios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Princípios que nos <span className="text-accent-gradient">guiam</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nossa atuação é pautada por princípios sólidos que garantem a confiança 
            e a satisfação dos nossos clientes.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <value.icon className="w-10 h-10 text-background" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-background mb-4">
            Nossa missão
          </h3>
          <p className="text-background/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Realizar o planejamento do empresário com os devidos controles 
            administrativos, financeiros, legais e contábeis, orientando com 
            clareza para as melhores tomadas de decisões.
          </p>
        </div>
      </div>
    </section>
  );
};
