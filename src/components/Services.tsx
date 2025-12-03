import {
  Calculator,
  FileText,
  Users,
  Lightbulb,
  BarChart3,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Escrituração contábil",
    description:
      "Registro e organização de todas as transações financeiras da sua empresa, garantindo conformidade e precisão.",
  },
  {
    icon: FileText,
    title: "Escrituração fiscal",
    description:
      "Gestão completa das obrigações fiscais, apuração de impostos e entrega de declarações dentro dos prazos.",
  },
  {
    icon: Users,
    title: "Departamento pessoal",
    description:
      "Administração de folha de pagamento, admissões, demissões, férias e todas as rotinas trabalhistas.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria empresarial",
    description:
      "Orientação estratégica para tomadas de decisão mais assertivas e crescimento sustentável do negócio.",
  },
  {
    icon: BarChart3,
    title: "Assessoria financeira",
    description:
      "Análise financeira, planejamento orçamentário e gestão de fluxo de caixa para melhor controle financeiro.",
  },
  {
    icon: Shield,
    title: "Recursos humanos",
    description:
      "Suporte completo em RH, desde recrutamento até desenvolvimento de políticas de gestão de pessoas.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Nossos serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Soluções completas para sua <span className="text-gradient">empresa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços contábeis e de consultoria 
            para atender todas as necessidades do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 md:p-8 border border-border card-elevated animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
