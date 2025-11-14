import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ClipboardCheck, Users2, Target } from "lucide-react";

const Transparency = () => {
  const documents = [
    {
      icon: ClipboardCheck,
      title: "Prestação de Contas",
      description: "Relatórios financeiros e prestação de contas das atividades",
      status: "Em breve"
    },
    {
      icon: FileText,
      title: "Atas de Reuniões",
      description: "Registros de todas as reuniões e decisões da cooperativa",
      status: "Em breve"
    },
    {
      icon: Users2,
      title: "Documentos da Diretoria",
      description: "Estatuto, regimentos e documentos oficiais",
      status: "Em breve"
    },
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Metas, objetivos e planos de ação da cooperativa",
      status: "Em breve"
    }
  ];

  return (
    <section id="transparency" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Transparência
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Acreditamos na gestão transparente e democrática. Aqui você encontra 
            informações sobre nossas atividades, decisões e planejamento.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {documents.map((doc, index) => (
            <Card 
              key={doc.title}
              className="p-6 hover:shadow-medium transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <doc.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {doc.description}
                  </p>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-warning/10 text-warning rounded-full">
                    {doc.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Card informativo */}
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-medium animate-scale-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Construindo Nossa Transparência
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Estamos organizando todos os nossos documentos e relatórios para disponibilizá-los 
              aqui de forma clara e acessível. A transparência é um dos pilares do cooperativismo 
              e queremos que todos possam acompanhar nossas ações e decisões.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-success text-2xl">✓</span>
                <span className="font-medium">Gestão Democrática</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-success text-2xl">✓</span>
                <span className="font-medium">Informação Acessível</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-success text-2xl">✓</span>
                <span className="font-medium">Participação Ativa</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Princípios da transparência */}
        <div className="max-w-3xl mx-auto mt-12 text-center animate-fade-in">
          <Card className="p-6 bg-muted/50 border-border">
            <p className="text-foreground leading-relaxed">
              <span className="font-bold text-primary">A transparência</span> permite que todos 
              os cooperados e a comunidade acompanhem nosso trabalho, participem das decisões 
              e fiscalizem as ações da cooperativa, fortalecendo a confiança e a democracia.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
