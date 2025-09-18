import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Jean Lucas</Link>
        </h1>
        <nav>
          <Link href="/" className="text-white hover:underline mr-4">
            Sobre Mim
          </Link>
          <Link href="/academic" className="text-white hover:underline mr-4">
            Feitos Acadêmicos
          </Link>
          <Link href="/projects" className="text-white hover:underline">
            Projetos
          </Link>
        </nav>
      </div>
    </header>
  );
}