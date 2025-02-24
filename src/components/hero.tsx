import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="flex min-h-[600px] items-center bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Soluções Contábeis para o Sucesso do Seu Negócio
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-600">
              Transforme sua gestão financeira com nossa expertise contábil.
              Oferecemos soluções personalizadas para empresas de todos os
              portes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="bg-azul">
                <Link to="/abrir-empresa">
                  Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/como-funciona">Saiba Mais</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative">
              {/* Abstract shapes for visual interest */}
              <div className="absolute inset-0 -rotate-6 transform rounded-3xl bg-gradient-to-r from-primary/20 to-primary/5" />
              <div className="absolute inset-0 rotate-3 transform rounded-3xl bg-gradient-to-l from-primary/20 to-primary/5" />
              <div className="relative rounded-2xl bg-white p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-primary/5 p-4">
                    <h3 className="font-bold">1000+</h3>
                    <p className="text-sm text-gray-600">
                      Clientes Satisfeitos
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-4">
                    <h3 className="font-bold">20+</h3>
                    <p className="text-sm text-gray-600">Anos de Experiência</p>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-4">
                    <h3 className="font-bold">24/7</h3>
                    <p className="text-sm text-gray-600">Suporte</p>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-4">
                    <h3 className="font-bold">98%</h3>
                    <p className="text-sm text-gray-600">Taxa de Retenção</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
