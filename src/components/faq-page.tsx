import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type PropsType = {
  page: string
}

export function FAQPage({ page }: PropsType) {
  const data = [
    {
      title: 'O que é escritório virtual?',
      message:
        'Um escritório virtual de contabilidade é uma empresa que oferece serviços contábeis e financeiros de forma remota, Os escritórios virtuais de contabilidade podem oferecer uma ampla gama de serviços, incluindo contabilidade básica, preparação de declarações fiscais, folha de pagamento, consultoria tributária, planejamento financeiro e muito mais.',
    },
    {
      title: 'Quais serviços são abrangidos?',
      message:
        'Consultoria tributária, departamento pessoal, consultoria contábil e legalização de empresas. ',
    },
    {
      title: 'Quais documentos são necessários para abrir uma empresa?',
      message:
        'Dados pessoais, nome empresarial, dados de endereço comercial e atividade econômica a ser exercida.',
    },

    {
      title: 'Quais regimes tributários são atendidos?',
      message:
        'Trabalhamos com os mais diversos regimes tributários, sendo MEI, Simples Nacional, Lucro Presumido e Lucro Real. ',
    },
  ]
  return (
    <div
      className={`flex w-full flex-col items-center justify-center ${page === 'plans' ? 'bg-white' : 'bg-slate-100'}  py-24`}
    >
      <p className="text-azul text-center text-4xl font-bold">
        Perguntas Frequentes
      </p>
      <div className="mt-10 w-full max-w-3xl">
        <Accordion type="single" className="w-full p-8" collapsible>
          {data.map((item, i) => (
            <AccordionItem
              key={i}
              value={`${i}`}
              className="rounded-[0.75rem] p-3 hover:bg-slate-200"
            >
              <AccordionTrigger className="text-[24px] text-slate-600 hover:text-slate-950 hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-justify text-lg text-slate-500">
                {item.message}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
