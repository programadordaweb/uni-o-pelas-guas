import { Card } from "@/components/ui/card";
import { Heart, Users, Sparkles, BookOpen, Scale, Handshake, UserPlus } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: UserPlus,
      title: "Adesão Voluntária e Livre",
      description: "Aberta a todos que desejam participar e assumir responsabilidades"
    },
    {
      icon: Scale,
      title: "Gestão Democrática",
      description: "Decisões tomadas de forma justa e participativa por todos"
    },
    {
      icon: Users,
      title: "Participação Econômica",
      description: "Membros contribuem e compartilham os resultados da cooperativa"
    },
    {
      icon: Handshake,
      title: "Autonomia e Independência",
      description: "Organização autônoma controlada pelos próprios membros"
    },
    {
      icon: BookOpen,
      title: "Educação e Formação",
      description: "Aprendizado contínuo e desenvolvimento de todos os cooperados"
    },
    {
      icon: Sparkles,
      title: "Intercooperação",
      description: "Colaboração entre cooperativas para fortalecer o movimento"
    },
    {
      icon: Heart,
      title: "Interesse pela Comunidade",
      description: "Trabalho pelo desenvolvimento sustentável da nossa comunidade"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-in">
            Somos uma cooperativa criada dentro do{" "}
            <span className="font-semibold text-primary">Cooperlândia</span>, 
            uma iniciativa do <span className="font-semibold text-secondary">Sicredi</span>.
          </p>
        </div>

        {/* Card de missão */}
        <Card className="max-w-4xl mx-auto p-8 mb-16 shadow-medium hover:shadow-large transition-shadow duration-300 animate-scale-in">
          <h3 className="text-2xl font-bold text-primary mb-4 text-center">
            Nossa Missão
          </h3>
          <p className="text-lg text-foreground leading-relaxed text-center">
            Atuar pela <span className="font-semibold text-success">melhoria da comunidade da Linha Andréas</span>, 
            buscando soluções, organização e representação para as necessidades locais, 
            sempre guiados pelos <span className="font-semibold text-secondary">princípios do cooperativismo</span>.
          </p>
        </Card>

        {/* Princípios do Cooperativismo */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Princípios que nos Guiam
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <Card 
                key={principle.title}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cooperlândia */}
        <Card className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-medium animate-scale-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Cooperlândia
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Através deste programa educacional do Sicredi, aprendemos na prática 
              os valores da cooperação, solidariedade e cidadania, desenvolvendo 
              projetos que beneficiam toda a nossa comunidade.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
