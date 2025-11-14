import { Card } from "@/components/ui/card";
import { Users, Heart, Lightbulb, TreePine, Building2, ClipboardList } from "lucide-react";

const Actions = () => {
  const actions = [
    {
      icon: Users,
      title: "Envolvimento Comunitário",
      description: "Participação ativa nas questões e necessidades da comunidade de Linha Andréas"
    },
    {
      icon: ClipboardList,
      title: "Requerimento ao Posto de Saúde",
      description: "Solicitação oficial de dois horários de atendimento para melhor servir a comunidade local"
    },
    {
      icon: Lightbulb,
      title: "Projetos Estudantis",
      description: "Desenvolvimento de iniciativas criadas e executadas pelos próprios alunos"
    },
    {
      icon: Heart,
      title: "Ações de Conscientização",
      description: "Campanhas educativas sobre temas importantes para a comunidade"
    },
    {
      icon: TreePine,
      title: "Melhoria de Espaços",
      description: "Projetos de revitalização e cuidado com ambientes comunitários"
    },
    {
      icon: Building2,
      title: "Iniciativas Locais",
      description: "Apoio e participação em projetos que beneficiam toda a região"
    }
  ];

  return (
    <section id="actions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Nossas Ações na Comunidade
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Trabalhamos ativamente para melhorar a qualidade de vida em Linha Andréas 
            através de projetos, iniciativas e representação comunitária.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {actions.map((action, index) => (
            <Card 
              key={action.title}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col">
                <div className="mb-4 p-3 bg-gradient-to-br from-success/10 to-secondary/10 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  <action.icon className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {action.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {action.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Destaque especial para o requerimento */}
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-success/5 to-primary/5 border-success/20 shadow-medium animate-scale-in">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 p-4 bg-success/10 rounded-full">
              <ClipboardList className="h-12 w-12 text-success" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Iniciativa pelo Posto de Saúde
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa cooperativa elaborou e apresentou um{" "}
                <span className="font-semibold text-success">requerimento oficial</span> solicitando 
                dois horários de atendimento no posto de saúde local. Esta ação visa garantir 
                melhor acesso aos serviços de saúde para todos os moradores da comunidade de Linha Andréas.
              </p>
            </div>
          </div>
        </Card>

        {/* Chamada para ação */}
        <div className="max-w-3xl mx-auto mt-12 text-center animate-fade-in">
          <Card className="p-8 bg-gradient-primary border-0 text-white shadow-large">
            <h3 className="text-2xl font-bold mb-4">
              Faça Parte das Nossas Ações
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Juntos somos mais fortes! Sua participação e suas ideias são fundamentais 
              para continuarmos melhorando nossa comunidade.
            </p>
            <p className="text-white/90 font-medium">
              Entre em contato conosco para saber como você pode contribuir!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Actions;
