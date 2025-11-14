import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Package, Palette, Puzzle } from "lucide-react";

const Store = () => {
  const categories = [
    {
      icon: Package,
      title: "Materiais Educativos",
      description: "Recursos didáticos desenvolvidos pelos alunos"
    },
    {
      icon: Puzzle,
      title: "Jogos Pedagógicos",
      description: "Jogos educativos criados nas oficinas"
    },
    {
      icon: Palette,
      title: "Artesanato Escolar",
      description: "Peças únicas feitas com criatividade"
    }
  ];

  return (
    <section id="store" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Nossa Loja
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Conheça os objetos de aprendizagem e produtos educativos desenvolvidos 
            por nossos alunos nas oficinas e projetos da cooperativa.
          </p>
        </div>

        {/* Categorias */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-gradient-accent rounded-full mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground">
                {category.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Card de produtos */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-accent/5 to-warning/5 border-accent/20 shadow-medium animate-scale-in">
          <div className="text-center">
            <div className="mb-6">
              <ShoppingBag className="h-16 w-16 mx-auto text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Produtos em Desenvolvimento
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Nossa loja está sendo preparada com muito carinho! Em breve você poderá 
              adquirir materiais educativos, jogos pedagógicos e artesanato produzidos 
              pelos alunos da cooperativa.
            </p>
            <div className="space-y-4">
              <p className="text-foreground font-medium">
                <span className="text-success font-bold">✓</span> Todos os produtos são feitos por alunos
              </p>
              <p className="text-foreground font-medium">
                <span className="text-success font-bold">✓</span> Recursos educativos de qualidade
              </p>
              <p className="text-foreground font-medium">
                <span className="text-success font-bold">✓</span> Valores acessíveis e justos
              </p>
            </div>
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
                asChild
              >
                <a href="#contact">Entre em Contato</a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Informação sobre os projetos */}
        <div className="max-w-3xl mx-auto mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground leading-relaxed">
            Os produtos desenvolvidos em nossa cooperativa são resultado de 
            <span className="font-semibold text-primary"> oficinas pedagógicas</span> e 
            <span className="font-semibold text-secondary"> projetos educativos</span>, 
            onde os alunos aprendem enquanto criam, desenvolvendo habilidades 
            de empreendedorismo, trabalho em equipe e responsabilidade social.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Store;
