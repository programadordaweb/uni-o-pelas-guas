import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="União pelas Águas" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 text-sm text-center md:text-left">
              Cooperativa Escolar União pelas Águas
              <br />
              E.M.E.F. José Bonifácio
            </p>
          </div>

          {/* Links rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#board" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Diretoria
                </a>
              </li>
              <li>
                <a href="#store" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Loja
                </a>
              </li>
              <li>
                <a href="#actions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nossas Ações
                </a>
              </li>
              <li>
                <a href="#transparency" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Transparência
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="mailto:uniaopelasaguas@gmail.com" className="hover:text-primary-foreground transition-colors">
                  uniaopelasaguas@gmail.com
                </a>
              </li>
              <li>Linha Andréas</li>
              <li>E.M.E.F. José Bonifácio</li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-sm text-primary-foreground/70">
            <p className="mb-2">
              © {currentYear} Cooperativa Escolar União pelas Águas. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              Programa A União Faz a Vida - Sicredi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
