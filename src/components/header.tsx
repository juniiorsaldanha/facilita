import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Arrow from '@/assets/arrow.svg'
import Logo from '@/assets/logo_facilita.png'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

import { NavigationMenuDemo } from './menu-header'
import { Button } from './ui/button'

export function Header() {
  const [isSticky, setSticky] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSheetOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`z-50 flex w-full justify-center border-b ${isSticky ? 'fixed left-0 top-0 bg-white shadow-lg' : ''}`}
    >
      <div className="flex h-16 w-[1440px] items-center gap-6 px-6">
        <Link to="/">
          <div className="flex cursor-pointer items-center justify-center">
            <img src={Logo} alt="logo_facilita" />
          </div>
        </Link>

        <div className="hidden space-x-4 md:flex">
          <NavigationMenuDemo />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="default"
            className="hidden rounded-3xl bg-azul hover:bg-gray-700 md:flex"
          >
            <Link to="/abrir-empresa">Solicite uma proposta</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                onClick={() => setIsSheetOpen(true)}
                className="bg-azul hover:bg-gray-700 focus:outline-none"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={'top'} className="border-b-0 bg-white">
              <SheetHeader></SheetHeader>

              <div className="flex w-full flex-col space-y-4 p-4">
                <Link to="/">
                  <div className="flex cursor-pointer items-center justify-center">
                    <img src={Logo} alt="logo_facilita" />
                  </div>
                </Link>
                <nav className="flex flex-col space-y-4">
                  <div className="relative w-full">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text-azul-50 flex w-full justify-between border-b p-4 text-start hover:text-gray-400 focus:outline-none"
                    >
                      Serviços
                      <img
                        src={Arrow}
                        alt="icon-arrow"
                        className={`transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <ul className="flex flex-col space-y-2">
                        <li className="p-3 text-azul no-underline hover:text-gray-400 hover:underline">
                          <Link to="/abrir-empresa">Abrir Empresa grátis</Link>
                        </li>
                        <li className="under p-3 text-azul hover:text-gray-400 hover:underline">
                          <Link to="/certificado-digital">Certificado digital</Link>
                        </li>
                        <li className="under p-3 text-azul hover:text-gray-400 hover:underline">
                          <Link to="/deixar-de-ser-mei">Deixar de ser MEI</Link>
                        </li>
                        <li className="under p-3 text-azul hover:text-gray-400 hover:underline">
                          <Link to="/trocar-contador">Trocar de contador</Link>
                        </li>
                        <li className="under p-3 text-azul hover:text-gray-400 hover:underline">
                          <Link to="#">Contabilidade completa</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a
                    href="/plans"
                    className="text-azul-50  hover:text-azul-400 border-b p-4"
                  >
                    Planos
                  </a>
                  <a
                    href="#"
                    className="text-azul-50  border-b p-4 hover:text-gray-400"
                  >
                    Como Funciona
                  </a>
                </nav>
                <Button
                  variant="default"
                  className="rounded-3xl bg-azul hover:bg-gray-700 md:flex"
                >
                  Solicite uma Proposta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
