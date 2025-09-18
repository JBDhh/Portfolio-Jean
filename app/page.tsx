import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Jean Lucas</h1>
          <nav className="mt-2">
            <a href="#about" className="text-white hover:underline mr-4">
              Sobre Mim
            </a>
            <a href="#projects" className="text-white hover:underline">
              Projetos
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-8">
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
          <p>
            Olá! Meu nome é Jean Lucas, um desenvolvedor apaixonado por criar
            soluções inovadoras. Tenho experiência com as seguintes
            tecnologias: Python, Javascript.
          </p>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-bold mb-4">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Longoka</h3>
              <p>
                Uma Aplicação Mobile de Educação Acessível, que oferece aprendizado de Braille para pessoas PCD's Visuais, mas ainda intuitivo para incentivar pessoas não-PCD a aprenderem.
              </p>
            </div>

            
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">JuridIA</h3>
              <p>
                Uma aplicação WEB com uso da API do GEMINI, que consegue traduzir o "Juridiquês" de Contratos pesados com seus muitos termos técnicos e jargões, em algo leve, compreensível e direto, para que todos possam fazer sua melhor escolha!
              </p>
            </div>

            {/* Adicione mais projetos aqui */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>
          Me siga nas redes sociais:
          <a
            href="https://www.linkedin.com/in/jeanlbd"
            className="text-white hover:underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/JBDhh"
            className="text-white hover:underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/jeanlucasbd"
            className="text-white hover:underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}