import Check from "@/assets/check.svg";
import XIcon from "@/assets/x.svg";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const benefitsList = [
  "Gestão completa do dia a dia contábil do seu negócio",
  "Processo de abertura do seu CNPJ grátis",
  "Atendimento via chat, e-mail, whatsapp e telefone, das 8h às 18h",
  "Certificado digital incluso",
  "Painel de RH com folha de sócios e funcionários",
  "Gerente de Conta exclusivo para cuidar de tudo para você",
  "Importação de notas fiscais em qualquer município",
  "Conciliação financeira feita por experts",
  "Consultoria contábil online com time de contadores especialistas",
];

const plans = {
  "FACILITA SERVIÇO": [
    {
      title: "Plano Bronze",
      price: "209,00",
      oldPrice: "299,00",
      discount: "ECONOMIZE 30%",
      destaque: "MAIS VENDIDO",
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 4,
      })),
    },
    {
      title: "Plano Prata",
      price: "249,00",
      oldPrice: "329,00",
      discount: "ECONOMIZE 24%",
      destaque: null,
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 5,
      })),
    },
    {
      title: "Plano Ouro",
      price: "389,00",
      oldPrice: "449,00",
      discount: "ECONOMIZE 13%",
      destaque: null,
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 9,
      })),
    },
  ],
  "FACILITA COMÉRCIO": [
    {
      title: "Plano Empresarial",
      price: "289,00",
      oldPrice: "399,00",
      discount: "ECONOMIZE 28%",
      destaque: null,
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 5,
      })),
    },
    {
      title: "Plano Executivo",
      price: "389,00",
      oldPrice: "549,00",
      discount: "ECONOMIZE 29%",
      destaque: "RECOMENDADO",
      benefits: benefitsList.map((benefit, index) => ({
        text: benefit,
        available: index < 9,
      })),
    },
  ],
};

export function EssencialPlans() {
  return (
    <div className="flex w-full flex-col items-center bg-slate-100 pt-12">
      <Tabs defaultValue="FACILITA SERVIÇO" className="w-full max-w-7xl">
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
            <div className="flex w-full max-w-7xl flex-wrap justify-center gap-6 px-4 md:px-6">
              {planOptions.map((plan, index) => (
                <div key={index} className="relative w-full md:max-w-xs">
                  {plan.destaque && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-700 px-4 py-1 text-xs font-bold text-white shadow-md">
                      {plan.destaque}
                    </div>
                  )}

                  <div
                    className={`flex h-auto w-full flex-col items-center justify-between rounded-xl border-2 bg-white 
                              p-6 shadow-md 
                              ${plan.destaque ? "border-blue-700" : "border-slate-300"}
                              hover:border-azul hover:shadow-xl`}
                  >
                    <span className="mb-2 text-lg font-semibold text-slate-700">
                      {plan.title}
                    </span>

                    {plan.oldPrice && (
                      <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
                        <span className="line-through">R${plan.oldPrice}</span>
                        <span className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700 no-underline">
                          {plan.discount}
                        </span>
                      </div>
                    )}

                    <span className="text-2xl font-bold text-slate-700">
                      R${plan.price}
                    </span>

                    <div className="mt-4 w-full">
                      <ul className="w-full space-y-2 text-left">
                        {plan.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2">
                            <img
                              src={benefit.available ? Check : XIcon}
                              alt={
                                benefit.available
                                  ? "Disponível"
                                  : "Indisponível"
                              }
                              className="mt-1 h-4 w-4"
                            />
                            <span
                              className={`text-sm ${
                                benefit.available
                                  ? "text-azul"
                                  : "text-gray-400"
                              }`}
                            >
                              {benefit.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                    target="_blank" 
                    href="https://wa.me/5511993953519?text=Desejo%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos."
                    rel="noreferrer"
                    className="w-full max-w-sm"
                    >
                    <Button
                      variant="default"
                      className="mt-4 w-full rounded-xl border-2 border-slate-800 bg-azul text-white hover:bg-slate-700"
                    >
                      Contratar
                    </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="h-16 md:h-32"></div>
    </div>
  );
}
