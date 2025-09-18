export default function AcademicPage() {
  return (
    <section id="academic">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Feitos Acadêmicos
      </h2>
      <div className="space-y-4">
        {/* Exemplo de Feito Acadêmico */}
        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-semibold">
            Monitoria de Introdução à Programação
          </h3>
          <p className="text-gray-500">UFPE | 2025 - Atualmente</p>
          <p className="mt-2">
            Atuo como monitor acadêmico, oferecendo suporte direto aos estudantes de Introdução à Programação. Minhas principais responsabilidades incluem o esclarecimento de dúvidas sobre a sintaxe e a semântica da linguagem Python, além de auxiliar na construção do raciocínio lógico para a resolução de problemas.
          </p>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-semibold">
            Curso Técnico em Desenvolvimento de Sistemas
          </h3>
          <p className="text-gray-500">ETE JBL | 2021 - 2023</p>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-semibold">
            Iniciação Científica Júnior - Robótica
          </h3>
          <p className="text-gray-500">CNPq | 2021 - 2022</p>
          <p className="mt-2">
            Desenvolvi um protótipo de robô garçom de baixo custo utilizando a plataforma Lego Mindstorms e programação em blocos (ou especifique a linguagem, se aplicável). O projeto teve como foco a aplicação de sensores de cor e ultrassom para navegação autônoma, desvio de obstáculos e entrega de objetos em ambientes controlados.
          </p>
        </div>
      
        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-semibold">
            Iniciação Científica Júnior - FACEPE
          </h3>
          <p className="text-gray-500">FACEPE | 2022 - 2023</p>
          <p className="mt-2">
            Realizei a coleta, o processamento e a análise de dados de campanhas de marketing digital aplicadas ao setor de turismo. 
          </p>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-semibold">
            Editor e Cinegrafista de Cartilha Digital
          </h3>
          <p className="text-gray-500">ETE JBL | 2021
          </p>
          <a
          href="https://youtu.be/DkIFBk5E-MA?si=4zA0_4lTqujGY7pk"
          target="_blank"
          rel="noopener noreferrer"
          className="block border rounded-lg p-4 hover:shadow-lg transition-transform transition-shadow"
        >Internet não é terra de ninguém - Cartilha digital</a>
          <p className="mt-2">
            Atuei na produção de uma cartilha digital, sendo responsável pela criação de animações 2D com a plataforma Animatron. Realizei a edição completa de vídeos e tratamento de imagens do projeto, além de operar a câmera como cinegrafista e garantir a qualidade do áudio como técnico de som. 
          </p>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-semibold">
            Diretor de Mídia
          </h3>
          <p className="text-gray-500">Grêmio Geração Consciente (ETE JBL) | 2022 - 2023</p>
          <p className="mt-2">
            Fui um dos Responsáveis pelo planejamento e criação do conteúdo para o Instagram do grêmio, desenvolvendo a identidade visual e a comunicação com os estudantes. Criei posts, cards e comunicados que aumentaram o engajamento e a visibilidade das ações da gestão. 
          </p>
        </div>

      </div>
    </section>
  );
}