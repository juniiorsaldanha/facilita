import Image from '@/assets/banner4.png'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function TrocarContador() {
  const data = [
    {
      id: 1,
      title: 'Escolha seu plano',
      description: 'Selecione o plano que se adapta melhor à sua empresa',
    },
    {
      id: 2,
      title: 'Faça o cadastro',
      description: 'Cadastre-se rapidamente para iniciar sua contabilidade',
    },
    {
      id: 3,
      title: 'Análise',
      description: 'Nosso time analisará a situação da sua empresa',
    },
    {
      id: 4,
      title: 'Bem-vindo à Facilita',
      description: 'Agora você faz parte da contabilidade inteligente!',
    },
  ]

  return (
    <article className="flex min-h-screen w-full flex-col items-center bg-white">
      <section className="flex w-full flex-col items-center gap-6 bg-[#11B856] px-4 pb-20 pt-10 md:pb-32 md:pt-14">
        <h1 className="text-center text-3xl font-semibold text-white md:text-5xl">
          Insatisfeito com seu Contador? Troque para a Facilita!
        </h1>
        <p className="w-full max-w-4xl text-center text-base font-semibold text-gray-300 md:text-lg">
          Se você não está recebendo o suporte que seu negócio merece, é hora de
          mudar! Na Facilita, oferecemos um serviço de contabilidade ágil,
          transparente e eficiente, para que você tenha total controle sobre a
          gestão financeira da sua empresa.
        </p>

        <Button className="mt-6 rounded-full border border-gray-300 bg-white text-[#004AAD] hover:bg-white hover:text-gray-900">
          <Link to="/plans">Conhecer nossos planos</Link>
        </Button>
      </section>

      <div className="-mt-16 flex flex-col items-center justify-center gap-6 px-4 md:flex-row">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex h-32 w-full flex-col items-center justify-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 md:w-60"
          >
            <p className="text-center text-lg font-bold text-azul">
              {item.title}
            </p>
            <p className="text-center text-sm text-blue-900">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-5xl flex-col-reverse items-center justify-between gap-10 px-6 py-16 md:flex-row md:px-0 md:py-28">
        <div className="flex w-full flex-col gap-6 md:w-[500px]">
          <h2 className="text-center text-2xl font-bold text-[#] md:text-left md:text-3xl">
            Nossos Planos
          </h2>
          <p className="text-center text-base font-medium text-blue-900 md:text-left md:text-lg">
            Sabemos que cada empresa é única e tem necessidades específicas. Por
            isso, na Facilita, oferecemos planos de contabilidade sob medida,
            pensados para atender negócios de todos os portes e segmentos. Seja
            você um empreendedor em fase inicial, uma pequena empresa ou uma
            empresa em expansão, temos o plano certo para você! Nossa equipe de
            especialistas está pronta para entender as particularidades do seu
            negócio e te ajudar a escolher a solução mais adequada.
          </p>
        </div>
        <img
          src={Image}
          className="h-auto w-full rounded-lg md:w-[30.625rem]"
          alt="equipe"
        />
      </div>
    </article>
  )
}
