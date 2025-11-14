import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      {/* Efeito de ondas decorativas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0wIDQwTDQwIDAgTDQwIDQwIE0wIDBMMCAwIiBzdHJva2U9IiNmZmYiIGZpbGw9Im5vbmUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjYSkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo animado */}
          <div className="mb-8 animate-float">
            <img 
              src={logo} 
              alt="Cooperativa Escolar União pelas Águas" 
              className="mx-auto h-40 md:h-52 w-auto drop-shadow-large"
            />
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in drop-shadow-lg">
            Cooperativa Escolar
            <br />
            <span className="text-accent">União pelas Águas</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in drop-shadow-md">
            E.M.E.F. José Bonifácio
          </p>

          {/* Objetivo */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-large mb-8 animate-scale-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="font-bold text-primary">Nosso objetivo</span> é melhorar a nossa comunidade, 
              especialmente em questões que envolvem{" "}
              <span className="font-semibold text-secondary">qualidade de vida</span> e{" "}
              <span className="font-semibold text-success">cuidado coletivo</span>.
            </p>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium hover:shadow-large transition-all duration-300"
              asChild
            >
              <a href="#about">Conheça Nossa História</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary shadow-medium hover:shadow-large transition-all duration-300"
              asChild
            >
              <a href="#store">Visite Nossa Loja</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <a 
              href="#about" 
              className="inline-block text-white/80 hover:text-white transition-colors"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
              <span className="sr-only">Role para baixo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
