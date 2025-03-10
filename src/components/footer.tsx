import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Facilita</h3>
            <p className="text-gray-400">
              Serviços profissionais de contabilidade para o sucesso do seu negócio.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/como-funciona">Como funciona</Link>
              </li>
              <li>
                <Link to="/plans">Planos</Link>
              </li>
              <li>
                <Link to="/abrir-empresa">Contato</Link>
              </li>
              <li>
                <Link to="/deixar-de-ser-mei">Deixar de ser MEI</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2">
              <li>Planejamento Tributário</li>
              <li>Contabilidade</li>
              <li>Serviços de Folha de Pagamento</li>
              <li>Consultoria Financeira</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Informações de contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Rua Costa Barros, 915, Sala 301</li>
              <li>Fortaleza, Ceará</li>
              <li>Whatsapp: (85) 9 9444-9862</li>
              <li>Email: facilitacontabilidadeofc@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2025 Facilita. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link to="https://www.instagram.com/facilitacontabilidadeoficial/" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
