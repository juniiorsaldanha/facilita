import Whatsapp from '@/assets/whatsapp.svg'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function WhatsappCard() {
  const sendWhatsAppMessage = () => {
    const message = `Olá, tudo bem? Meu nome é ${name}\n. Desejo saber mais informações sobre como abrir minha empresa.`
    const url = `https://wa.me/5511993953519?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed bottom-10 right-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-green-700 p-4 text-white shadow-lg transition duration-300 hover:bg-green-900">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild onClick={sendWhatsAppMessage}>
            <img
              src={Whatsapp}
              className="h-9 w-9 cursor-pointer"
              alt="link-whatsapp"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Entrar em contato</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
