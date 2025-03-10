import Check from '@/assets/check.svg'
import XIcon from '@/assets/x.svg'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const sendWhatsAppMessage = (planTitle: string) => {
  const message = `Olá, tudo bem? Desejo saber mais informações sobre o plano "${planTitle}".`
  const url = `https://wa.me/5585994449862?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const benefitsList = [
  'Gestão completa do dia a dia contábil do seu negócio',
  'Processo de abertura do seu CNPJ grátis',
  'Atendimento via chat, e-mail, whatsapp e telefone, das 8h às 18h',
  'Certificado digital incluso',
  'Painel de RH com folha de sócios e funcionários',
  'Gerente de Conta exclusivo para cuidar de tudo para você',
  'Importação de notas fiscais em qualquer município',
  'Conciliação financeira feita por experts',
  'Consultoria contábil online com time de contadores especialistas',
  'Declaração do Imposto de Renda de Pessoa Física',
  'Atendimento até às 21h com o seu gerente de conta',
  'Agendamentos de pagamentos de contas',
]

const plans = {
  MEI: [
    {
      title: 'Plano Inicial',
      price: '119,90',
      benefits: benefitsList.slice(0, 4).map((benefit, index) => ({
        text: benefit,
        available: index < 3, // Apenas os 3 primeiros disponíveis, o 4º é ❌
      })),
    },
    {
      title: 'Plano Avançado',
      price: '179,90',
      benefits: benefitsList.slice(0, 4).map((benefit) => ({
        text: benefit,
        available: true, // Todos os 4 disponíveis
      })),
    },
  ],
  SIMPLES: [
    {
      title: 'Plano Bronze',
      price: '209,00',
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 4, // Até o 4º benefício
      })),
    },
    {
      title: 'Plano Prata',
      price: '249,00',
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 5, // Até o 5º benefício
      })),
    },
    {
      title: 'Plano Ouro',
      price: '389,00',
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 9, // Até o 9º benefício
      })),
    },
    {
      title: 'Plano Diamante',
      price: '689,00',
      benefits: benefitsList.map((benefit) => ({
        text: benefit,
        available: true, // Todos os benefícios disponíveis
      })),
    },
  ],
  'SIMPLES COMÉRCIO': [
    {
      title: 'Plano Empreendedor',
      price: '389,00',
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 5, // Até o 5º benefício
      })),
    },
    {
      title: 'Plano Empresarial',
      price: '489,00',
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 9, // Até o 9º benefício
      })),
    },
    {
      title: 'Plano Executivo',
      price: '849,00',
      benefits: benefitsList.map((benefit) => ({
        text: benefit,
        available: true, // Todos os benefícios disponíveis
      })),
    },
  ],
}

export function EssencialPlans() {
  return (
    <div className="flex w-full flex-col items-center bg-slate-100 pt-12">
      <Tabs defaultValue="MEI" className="w-full max-w-7xl">
        <TabsList className="flex w-full flex-col justify-center gap-2 px-4 md:flex-row md:gap-6">
          {Object.keys(plans).map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="w-full flex-none whitespace-nowrap rounded-md px-4 py-2 text-center text-lg
                 font-bold transition-all duration-200
                 hover:text-azul hover:underline data-[state=active]:bg-gradient-to-br 
                 data-[state=active]:from-[#03286B] data-[state=active]:to-[#065AD8] 
                 data-[state=active]:text-white data-[state=active]:shadow-md md:w-auto"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(plans).map(([key, planOptions]) => (
          <TabsContent
            key={key}
            value={key}
            className="mt-6 flex w-full justify-center"
          >
            <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3 xl:grid-cols-4">
              {planOptions.map((plan, index) => (
                <div
                  key={index}
                  className="flex h-auto w-full flex-col items-center justify-between rounded-xl border-2 border-slate-700 bg-white 
                             p-6 hover:border-azul hover:shadow-xl md:max-w-xs"
                >
                  <span className="mb-4 border-b-2 border-slate-700 pb-2 text-lg font-semibold text-slate-700">
                    {plan.title}
                  </span>
                  <span className="text-2xl font-bold text-slate-700">
                    R${plan.price}
                  </span>
                  <div className="mt-4 w-full">
                    <ul className="w-full space-y-2 text-left">
                      {plan.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-2">
                          <img
                            src={benefit.available ? Check : XIcon} // Mostra o ícone certo
                            alt={benefit.available ? 'Disponível' : 'Indisponível'}
                            className="mt-1 h-4 w-4"
                          />
                          <span className={`text-sm ${benefit.available ? 'text-azul' : 'text-gray-400'}`}>
                            {benefit.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="default"
                    className="mt-4 w-full rounded-xl border-2 border-slate-800 bg-azul text-white hover:bg-slate-700"
                    onClick={() => sendWhatsAppMessage(plan.title)}
                  >
                    Contratar
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="h-16 md:h-32"></div>
    </div>
  )
}
