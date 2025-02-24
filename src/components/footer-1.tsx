import Facebook from '@/assets/facebook.svg'
import Instagram from '@/assets/instagram.svg'
import Email from '@/assets/Message.svg'
import Whatsapp from '@/assets/whatsapp.svg'

export function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-gray-300">
      <div className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-4xl">Facilita</span>

        <div className="flex flex-col">
          <span className="text-lg font-semibold">Fale com a gente</span>
          <div className="mt-1 flex py-1">
            <img src={Whatsapp} alt="whats" />
            <span className="ml-4 font-semibold">(85) 9 9444-9862</span>
          </div>
          <div className="flex py-1">
            <img src={Email} alt="email" />
            <span className="ml-4 font-semibold">catabilsim@gmail.com</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col">
          <span className="text-lg font-semibold">Rede Sociais</span>
          <div className="flex">
            <img src={Facebook} className="mr-1 w-8 border-black" alt="icon" />
            <img src={Instagram} className="w-8" alt="icon" />
          </div>
        </div>
      </div>
    </footer>
  )
}
