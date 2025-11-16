import { Card } from "@/components/ui/card";
import { Crown, Shield, DollarSign, FileText, Megaphone, GraduationCap, Search } from "lucide-react";

const Board = () => {
  const members = [
    {
      position: "Presidente",
      name: "Gustavo Bevilaqua",
      icon: Crown,
      color: "text-accent"
    },
    {
      position: "Vice-presidente",
      name: "Bruna Camila Berlt",
      icon: Shield,
      color: "text-primary"
    },
    {
      position: "1º Tesoureiro",
      name: "Brayan Bartz",
      icon: DollarSign,
      color: "text-success"
    },
    {
      position: "2º Tesoureiro",
      name: "Adrian Cortes",
      icon: DollarSign,
      color: "text-success"
    },
    {
      position: "1ª Secretária",
      name: "Amanda Vargas Soares",
      icon: FileText,
      color: "text-secondary"
    },
    {
      position: "2ª Secretária",
      name: "Vanessa Castro",
      icon: FileText,
      color: "text-secondary"
    },
    {
      position: "Diretora de Comunicação",
      name: "Ana Clara",
      icon: Megaphone,
      color: "text-warning"
    },
    {
      position: "Diretor de Educação Cooperativa",
      name: "Arthur Bolduan",
      icon: GraduationCap,
      color: "text-primary"
    },
    {
      position: "Diretor de Pesquisa",
      name: "Willian Oliveira",
      icon: Search,
      color: "text-secondary"
    }
  ];

  return (
    <section id="board" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Nossa Diretoria
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Conheça os membros que lideram nossa cooperativa e trabalham 
            diariamente para representar e melhorar nossa comunidade.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card 
              key={member.name}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 p-4 bg-gradient-to-br from-muted to-muted/50 rounded-full group-hover:scale-110 transition-transform duration-300 ${member.color}`}>
                  <member.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {member.position}
                </h3>
                <p className="text-foreground font-medium">
                  {member.name}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-soft animate-scale-in">
          <p className="text-center text-foreground leading-relaxed">
            <span className="font-semibold text-primary">Nossa diretoria</span> é eleita democraticamente 
            pelos cooperados e trabalha de forma transparente e participativa, sempre 
            buscando as melhores decisões para o coletivo.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Board;
