import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-up border border-accent/30">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-background/90 text-sm font-medium">
              Mais de 20 anos de experiência
            </span>
          </div>

          {/* H1 - Company Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-background mb-6 animate-fade-up animation-delay-100">
            AACC Assessoria Contábil
          </h1>

          {/* H2 - Description */}
          <h2 className="text-xl md:text-2xl text-background/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Soluções completas em contabilidade, consultoria e assessoria empresarial 
            para o crescimento sustentável do seu negócio
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up animation-delay-300">
            <a href="#contato" className="btn-hero inline-flex items-center justify-center gap-2">
              Solicite uma consulta
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#servicos" className="btn-hero-outline inline-flex items-center justify-center">
              Conheça nossos serviços
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-up animation-delay-400">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20 hover:bg-background/15 transition-colors">
              <TrendingUp className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-background mb-1">20+</div>
              <div className="text-background/80 text-sm">Anos de experiência</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20 hover:bg-background/15 transition-colors">
              <Users className="w-8 h-8 text-secondary mb-3 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-background mb-1">500+</div>
              <div className="text-background/80 text-sm">Clientes atendidos</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20 hover:bg-background/15 transition-colors">
              <Shield className="w-8 h-8 text-primary-light mb-3 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-background mb-1">100%</div>
              <div className="text-background/80 text-sm">Comprometimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
