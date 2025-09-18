export default function ProjectsPage() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-6 text-center">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Longoka</h3>
          <p>
            Uma Aplicação Mobile de Educação Acessível, que oferece aprendizado
            de Braille para pessoas PCD's Visuais, mas ainda intuitivo para
            incentivar pessoas não-PCD a aprenderem.
          </p>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">JuridIA</h3>
          <p>
            Uma aplicação WEB com uso da API do GEMINI, que consegue traduzir o
            "Juridiquês" de Contratos pesados com seus muitos termos técnicos e
            jargões, em algo leve, compreensível e direto, para que todos possam
            fazer sua melhor escolha!
          </p>
        </div>

        {/* Adicione mais projetos aqui */}
      </div>
    </section>
  );
}