import { CheckCircle, Building2 } from "lucide-react";
import teamAbout from "@/assets/team-about.jpg";

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

          {/* Image */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={teamAbout}
                alt="Equipe AACC em reunião de trabalho discutindo relatórios financeiros"
                className="w-full h-auto object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">20+</div>
              <div className="text-primary-foreground/80 text-sm">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
