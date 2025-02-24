import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function About() {
  const data = [
    {
      id: 1,
      titulo: 'Abrir Empresa grátis',
      descricao:
        'Com a contabilSim, abrir sua empresa é simples, rápido e o melhor: gratuito! Nossa equipe de especialistas está pronta para te ajudar em todas as etapas, desde a escolha do tipo de empresa até o registro formal nos órgãos competentes.',
      link: '/abrir-empresa',
    },
    {
      id: 2,
      titulo: 'Deixar de ser MEI',
      descricao:
        'Te acompanhamos em todas as etapas para você crescer com segurança e tranquilidade. Nossa equipe cuida de todo o processo de migração para um novo regime de tributação, garantindo que você continue pagando impostos de forma justa e aproveitando os melhores benefícios fiscais.',
      link: '/deixar-de-ser-mei',
    },
    {
      id: 3,
      titulo: 'Trocar de contador',
      descricao:
        'Oferecemos um serviço de contabilidade ágil, transparente e eficiente, para que você tenha total controle sobre a gestão financeira da sua empresa. Nossa equipe cuida de tudo para que a troca de contador seja simples e sem interrupções no funcionamento da sua empresa.',
      link: '/trocar-contador',
    },
    {
      id: 4,
      titulo: 'Certificado digital',
      descricao:
        'Oferecemos um serviço de contabilidade ágil, transparente e eficiente, para que você tenha total controle sobre a gestão financeira da sua empresa. Nossa equipe cuida de tudo para que a troca de contador seja simples e sem interrupções no funcionamento da sua empresa.',
      link: '/certificado-digital',
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center bg-slate-100 px-4 py-12 sm:py-24">
      <h1 className="mb-10 text-center text-3xl font-semibold text-azul sm:text-4xl">
        Como funciona a ContabilSim?
      </h1>
      <Carousel
        opts={{
          align: 'center',
        }}
        className="w-full max-w-[900px]"
      >
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className="sm:basis-1/2 lg:basis-1/3">
              <a href={item.link}>
                <Card className="h-[400px] w-full sm:w-[280px]">
                  <CardContent className="flex flex-col items-start justify-center gap-6 p-6">
                    <h1 className="text-xl font-semibold text-gray-900">
                      {item.titulo}
                    </h1>
                    <span className="text-sm text-gray-700">
                      {item.descricao}
                    </span>
                    <div className="flex items-center">
                      <span className="flex items-center text-gray-900 underline">
                        Saiba mais
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="ml-2 h-4 w-4 hover:w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex w-full flex-col items-center justify-center gap-4 pt-12 sm:flex-row">
        <Button
          variant="default"
          className="h-11 w-60 rounded-3xl bg-azul text-lg font-medium hover:bg-gray-700"
        >
          <a
            target="_blank"
            href="https://wa.me/5588999999878?text=Desejo%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20a%20ContabilSim"
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
  )
}
