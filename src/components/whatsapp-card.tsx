import Whatsapp from '@/assets/whatsapp.svg'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function WhatsappCard() {
  return (
    <div className="fixed bottom-10 right-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-green-700 p-4 text-white shadow-lg transition duration-300 hover:bg-green-900">
      <a
      target="_blank" 
      href="https://wa.me/5511993953519?text=Desejo%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Facilita"
      rel='noreferrer'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
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
      </a>
    </div>
  )
}
