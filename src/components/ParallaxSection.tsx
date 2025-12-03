import officeParallax from "@/assets/office-parallax.jpg";

export const ParallaxSection = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${officeParallax})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up">
            Sua empresa em boas mãos
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-up animation-delay-100">
            Com mais de 20 anos de experiência, ajudamos empresas a crescer 
            com segurança e conformidade fiscal
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-up animation-delay-200">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                2003
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">
                Ano de fundação
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                100%
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">
                Satisfação garantida
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                6+
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">
                Áreas de atuação
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
