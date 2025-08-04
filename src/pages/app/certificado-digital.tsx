import Img from '@/assets/img-certificado.png'
import { Button } from '@/components/ui/button'

export function CertificadoDigital() {
  return (
    <article className="flex min-h-screen w-full flex-col items-center bg-white">
      <div className="max-[90rem] flex h-[550px] w-full items-center justify-around border-b-2 bg-white">
        <div className="flex w-[600px] flex-col gap-6">
          <h1 className="w-[600px] text-7xl font-semibold text-[#11B856]">
            Certificado Digital Fácil e Rápido com a Facilita
          </h1>
          <span>
            Garanta seu certificado digital com a Facilita agora mesmo!
          </span>
          <Button className="h-12 w-[250px] border-2 border-[#11B856] bg-white font-semibold text-[#11B856] hover:bg-[#11B856] hover:text-white">
            Garantir Certificado Digital
          </Button>
        </div>
        <img src={Img} alt="banner" className="h-[28.125rem] w-[28.125rem]" />
      </div>
    </article>
  )
}
