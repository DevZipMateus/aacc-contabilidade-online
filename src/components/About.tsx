import { CheckCircle, Building2, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    "Planejamento empresarial estratégico",
    "Controles administrativos e financeiros",
    "Assessoria contábil completa",
    "Orientação para tomadas de decisão",
  ];

  return (
    <section id="sobre" className="section-padding section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">Nossa história</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Sobre a <span className="text-gradient">AACC</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A AACC foi criada em 2003 com o intuito de ser um escritório de 
              contabilidade diferenciado. Com o passar do tempo, nos aprimoramos 
              na área consultiva, podendo orientar nossos clientes com mais 
              clareza nas tomadas de decisões.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nossa missão é realizar o planejamento do empresário com os devidos 
              controles administrativos, financeiros, legais e contábeis, sempre 
              priorizando a transparência e o comprometimento com resultados.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative bg-primary rounded-2xl p-8 md:p-12">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-dark/30 rounded-full blur-2xl" />
              
              <div className="relative z-10 text-background">
                <Target className="w-16 h-16 mb-6" />
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Desde 2003 transformando negócios
                </h3>
                <p className="text-background/80 leading-relaxed">
                  Mais de duas décadas dedicadas a ajudar empresas a alcançarem 
                  seus objetivos através de uma gestão contábil eficiente e 
                  consultoria especializada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
