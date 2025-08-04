import { Link } from 'react-router-dom'

import ImageHome from '@/assets/img-home.png'

import { Button } from './ui/button'

export function BannerWithTittle() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-24">
  <p className="text-center text-4xl font-bold text-[#11B856]">
    Abrir empresa agora é com a Facilita
  </p>

  <div className="mt-10 flex w-full max-w-5xl flex-col md:flex-row gap-8 px-4">
    {/* Coluna de texto com botões no final */}
    <div className="flex flex-1 flex-col justify-between">
      <div className="space-y-6">
        <p className="text-lg font-medium text-slate-700">
          Simplificamos a abertura da sua empresa com rapidez e segurança! Com
          mais de 20 anos de experiência, nossa equipe de contadores
          especializados está pronta para ajudar você a formalizar o seu
          negócio sem burocracia.
        </p>
        <p className="text-lg font-medium text-slate-700">
          Esqueça a dor de cabeça com papeladas e processos demorados. Na Facilita,
          oferecemos um serviço completo, desde o registro da sua empresa até a
          gestão contábil.
        </p>
        <p className="text-lg font-medium text-slate-700">
          Conte com um atendimento humanizado, soluções acessíveis e um suporte ágil
          para que você possa tomar decisões estratégicas com confiança.
        </p>
        <p className="text-lg font-medium text-slate-700">
          Está pronto para dar o primeiro passo? Escolha agora a melhor opção para você:
        </p>
      </div>

      {/* Botões centralizados e no final da coluna */}
      <div className="mt-10 flex justify-center gap-4">
        <Button
          variant="outline"
          className="border border-[#11B856] bg-[#11B856] text-white hover:bg-white hover:text-[#11B856]"
        >
          <Link to="/abrir-empresa">Abrir empresa grátis</Link>
        </Button>
        <Button
          variant="outline"
          className="border border-[#FF914D] bg-[#FF914D] text-white hover:bg-white hover:text-[#FF914D]"
        >
          <Link to="/">Trocar de contador</Link>
        </Button>
      </div>
    </div>

    {/* Imagem */}
    <div className="flex-1">
      <img
        src={ImageHome}
        alt="img-home"
        className="h-auto w-full rounded-xl border-2 border-slate-600 object-contain"
      />
    </div>
  </div>
</div>
  )
}
