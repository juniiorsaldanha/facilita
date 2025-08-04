import { Award, Clock, Shield } from 'lucide-react'

import BannerRotativo from '@/components/banner-rotativo'
import { BannerWithTittle } from '@/components/banner-with-tittle'
import { EssencialPlans } from '@/components/essencial-plans'
import { FAQPage } from '@/components/faq-page'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'

const advantages = [
  {
    icon: Award,
    title: 'Profissionais Certificados',
    description:
      'Equipe altamente qualificada e atualizada com as últimas regulamentações',
  },
  {
    icon: Clock,
    title: 'Atendimento Personalizado',
    description: 'Suporte dedicado e soluções sob medida para seu negócio',
  },
  {
    icon: Shield,
    title: 'Segurança e Confiabilidade',
    description:
      'Processos seguros e conformidade com todas as normas contábeis',
  },
]

export function Home() {
  return (
    <div>
      <BannerRotativo />
      <Hero />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Por que escolher a Facilita?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Excelência e compromisso em cada aspecto do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <advantage.icon className="h-8 w-8 text-[#11B856] text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BannerWithTittle />
      <Services />
      <EssencialPlans />
      <Testimonials />
      <FAQPage page={'plans'} />
    </div>
  )
}
