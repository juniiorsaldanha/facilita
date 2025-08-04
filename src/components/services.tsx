import {
  Calculator,
  PieChart,
  Receipt,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const services = [
  {
    title: 'Consultoria Tributária',
    description:
      'Otimize sua carga tributária com planejamento estratégico e compliance fiscal.',
    icon: Calculator,
  },
  {
    title: 'Contabilidade Empresarial',
    description:
      'Gestão contábil completa para empresas de todos os portes e segmentos.',
    icon: PieChart,
  },
  {
    title: 'Departamento Pessoal',
    description:
      'Administração de folha de pagamento e gestão de recursos humanos.',
    icon: Users,
  },
  {
    title: 'Planejamento Financeiro',
    description:
      'Análise financeira e estratégias para crescimento sustentável.',
    icon: TrendingUp,
  },
  {
    title: 'Fiscal e Tributário',
    description:
      'Emissão de notas fiscais e acompanhamento de obrigações tributárias.',
    icon: Receipt,
  },
  {
    title: 'Certificado Digital',
    description:
      'Assinatura eletrônica segura para acesso a serviços do governo e emissão de documentos fiscais.',
    icon: Shield,
  },
]

export default function Services() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#11B856]">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções completas para todas as necessidades do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-[#11B856]" />
                </div>
                <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
