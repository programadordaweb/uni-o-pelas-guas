import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Estamos à disposição para tirar dúvidas, receber sugestões e conversar 
            sobre como melhorar nossa comunidade juntos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informações de contato */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="p-6 hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    E-mail
                  </h3>
                  <a 
                    href="mailto:uniaopelasaguas@gmail.com" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    uniaopelasaguas@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    E.M.E.F. José Bonifácio
                    <br />
                    Linha Andréas
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Telefone da Escola
                  </h3>
                  <p className="text-muted-foreground">
                    Entre em contato através da secretaria da escola
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Card de mensagem */}
          <Card className="p-8 bg-gradient-to-br from-card to-muted/30 shadow-medium animate-scale-in">
            <div className="text-center mb-6">
              <div className="mb-4 p-4 bg-gradient-accent rounded-full w-fit mx-auto">
                <Send className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Vamos Conversar?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sua opinião e participação são muito importantes para nós! 
                Entre em contato para saber mais sobre nossos projetos, 
                dar sugestões ou se envolver nas ações da cooperativa.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <span className="text-success text-xl">✓</span>
                <span>Resposta rápida</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <span className="text-success text-xl">✓</span>
                <span>Atendimento personalizado</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <span className="text-success text-xl">✓</span>
                <span>Todas as sugestões são bem-vindas</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="mailto:uniaopelasaguas@gmail.com">
                Enviar E-mail
              </a>
            </Button>
          </Card>
        </div>

        {/* Mapa ou informação adicional */}
        <Card className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-primary border-0 text-white shadow-large animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Faça Parte da Nossa Cooperativa
            </h3>
            <p className="text-white/90 leading-relaxed max-w-2xl mx-auto">
              A Cooperativa Escolar União pelas Águas está aberta à participação de todos 
              que desejam contribuir para o desenvolvimento da nossa comunidade. 
              Juntos, fazemos a diferença!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
