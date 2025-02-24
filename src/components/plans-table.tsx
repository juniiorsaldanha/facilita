import { EssencialPlans } from './essencial-plans'

export function PlansTable() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-slate-100 pt-4">
      <div className="flex w-full flex-col items-center py-4">
        <h1 className="text-azul mb-4 text-center text-4xl font-bold md:text-5xl">
          Planos disponíveis
        </h1>
        <span className="text-azul mb-4 text-center text-lg md:text-2xl">
          Escolha a melhor opção para seu negócio
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 p-8 md:p-10">
        <EssencialPlans />
      </div>
    </div>
  )
}
