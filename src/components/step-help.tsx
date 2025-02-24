import { Button } from './ui/button'
import { Separator } from './ui/separator'

export default function StepHelp() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-slate-100 px-4 py-12 md:py-24">
      <h1 className="mb-10 text-center text-3xl font-semibold text-gray-700 md:text-4xl">
        Passo a passo para a transformação do seu MEI
      </h1>

      <div className="flex w-full max-w-4xl flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-azul flex h-12 w-12 items-center justify-center rounded-full text-xl font-semibold text-white">
              1
            </div>
            <span className="mt-4 w-72 text-center font-medium text-gray-500">
              Entendemos mais sobre o perfil da sua empresa, quais são suas
              necessidades e o motivo de precisar transformar seu MEI.
            </span>
          </div>

          <Separator
            orientation="horizontal"
            className="hidden h-[3px] w-20 bg-gray-300 md:block"
          />

          <div className="flex flex-col items-center">
            <div className="bg-azul flex h-12 w-12 items-center justify-center rounded-full text-xl font-semibold text-white">
              2
            </div>
            <span className="mt-4 w-72 text-center font-medium text-gray-500">
              Você contrata um dos nossos planos e verificamos se é necessário
              alguma regularização do MEI.
            </span>
          </div>

          <Separator
            orientation="horizontal"
            className="hidden h-[3px] w-20 bg-gray-300 md:block"
          />

          <div className="flex flex-col items-center">
            <div className="bg-azul flex h-12 w-12 items-center justify-center rounded-full text-xl font-semibold text-white">
              3
            </div>
            <span className="mt-4 w-72 text-center font-medium text-gray-500">
              Cuidamos da transformação do MEI em ME e te apoiamos em todos os
              processos com a sua empresa.
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 pt-10 md:flex-row">
          <Button
            variant="default"
            className="bg-azul h-11 w-60 rounded-3xl text-lg font-medium hover:bg-gray-700"
          >
            <a
              target="_blank"
              href="https://wa.me/5588999999878?text=Desejo%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20deixar%20de%20ser%20MEI"
              rel="noreferrer"
            >
              Entrar em contato
            </a>
          </Button>
          <Button
            variant="outline"
            className="h-11 w-60 rounded-3xl text-lg font-medium"
          >
            <a href="/plans">Conhecer nossos planos</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
