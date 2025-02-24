import { Link } from 'react-router-dom'

import Banner from '@/assets/banner3.png'

import { Button } from './ui/button'

export function BannerWithTittle() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-24">
      <p className="text-azul text-center text-4xl font-bold">
        Abrir empresa agora é com a Facilita
      </p>
      <div className="mt-10 flex w-full max-w-5xl flex-col items-start space-y-4 text-sm md:flex-row md:space-x-4 md:space-y-0 md:text-base">
        <div className="flex-1 px-4 text-left md:text-left">
          <p className="text-lg font-medium text-slate-700">
            Simplificamos a abertura da sua empresa com rapidez e segurança! Com
            mais de 20 anos de experiência, nossa equipe de contadores
            especializados está pronta para ajudar você a formalizar o seu
            negócio sem burocracia. Esqueça a dor de cabeça com papeladas e
            processos demorados. Na Facilita, oferecemos um serviço completo,
            desde o registro da sua empresa até a gestão contábil, garantindo
            que você tenha mais tempo para focar no que realmente importa: o
            crescimento do seu negócio. Conte com um atendimento humanizado,
            soluções acessíveis e um suporte ágil para que você possa tomar
            decisões estratégicas com confiança. Está pronto para dar o primeiro
            passo? Escolha agora a melhor opção para você:
          </p>
        </div>
        <div className="flex-1">
          <img
            src={Banner}
            alt="banner3"
            className="h-auto w-full rounded-xl border-2 border-slate-600 object-contain"
          />
        </div>
      </div>
      <div className="mt-4 flex w-full max-w-3xl flex-row items-start px-4">
        <Button
          variant="outline"
          className="bg-azul mr-4 text-white hover:bg-gray-600 md:flex"
        >
          <Link to="/abrir-empresa">Abrir empresa grátis</Link>
        </Button>
        <Button
          variant="outline"
          className="bg-dourado-leve text-gray-900 hover:bg-gray-600 md:flex"
        >
          <Link to="/">Trocar de contador</Link>
        </Button>
      </div>
    </div>
  )
}
