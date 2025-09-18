import Image from "next/image";

export default function AboutPage() {
  return (
    <section id="about">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Coluna da Imagem */}
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Foto de Jean Lucas"
            width={200}
            height={200}
            className="rounded-full object-cover w-[200px] h-[200px] border-4 border-gray-300"
            priority
          />
        </div>

        {/* Coluna do Texto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="mb-4 text-lg">
            Olá! Meu nome é Jean Lucas, Tenho 19 anos e sou um desenvolvedor apaixonado por criar
            soluções inovadoras. Tenho experiência com as seguintes
            tecnologias: Python, Javascript.
          </p>

          {/* Seção de Educação */}
          <div className="mt-6 flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Image
              src="/school.png"
              alt="Logo da Instituição"
              width={60}
              height={60}
              className="rounded-md object-contain"
            />
            <div>
              <h3 className="font-semibold">Centro de Informática - UFPE</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ciência da Computação, 2024 - 2029
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}