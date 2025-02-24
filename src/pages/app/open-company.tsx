import 'leaflet/dist/leaflet.css'

import { useState } from 'react'

// import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// interface AddressType {
//   id: string;
//   localtion: number[];
//   address: string;
// }

export function OpenCompany() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [observation, setObservation] = useState('')

  const TELEGRAM_BOT_TOKEN = '7289008410:AAF-VFOIVfwSwgyLRdUkrm56PJ_i_90ZTHs' // Substitua pelo seu token
  const TELEGRAM_CHAT_ID = '-4578405093'

  const sendWhatsAppMessage = () => {
    const message = `Olá, tudo bem? Meu nome é ${name}\n. Desejo saber mais informações sobre como abrir minha empresa.`
    const url = `https://wa.me/5585992004669?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const sendTelegramMessage = () => {
    const message = `Nome: ${name}\nEmail: ${email}\nCelular: ${phone}\nObservações: ${observation}`

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log('Mensagem enviada para o Telegram com sucesso!')
        } else {
          console.error(
            'Erro ao enviar mensagem para o Telegram:',
            data.description,
          )
        }
      })
      .catch((error) => {
        console.error('Erro ao enviar mensagem para o Telegram:', error)
      })
  }

  const address = [
    {
      id: '1',
      location: [-5.8975026, -38.6421575],
      address: 'Rua Dom Carloto - 399, Jaguaribe - CE',
    },
    {
      id: '2',
      location: [-3.7931392, -38.6020165],
      address: 'Fortaleza - CE',
    },
  ]
  const [selectAddress, setSelectAddress] = useState(address[0])
  return (
    <main className="flex w-full flex-col p-6">
      <div className="flex w-full flex-col items-center justify-center">
        <span className="text-center text-4xl font-bold text-azul">
          Entre em contato
        </span>
        <p className="text-center text-lg text-azul">
          Entre em contato conosco. Estamos aqui para ajudá-lo com suas
          necessidades contábeis.
        </p>
      </div>

      <section className="mt-10 flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
        <div className="flex w-full max-w-full flex-col space-y-4 md:max-w-lg">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              id="name"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone">Celular</Label>
            <Input
              type="text"
              id="phone"
              placeholder="Seu principal número"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="observation">Observações</Label>
            <Textarea
              id="observation"
              placeholder="Observações"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
            />
          </div>

          <Button
            className="w-full max-w-sm bg-azul text-white hover:bg-blue-900"
            onClick={() => {
              sendWhatsAppMessage()
              sendTelegramMessage()
            }}
          >
            Enviar
          </Button>
        </div>

        <article className="flex w-full max-w-full flex-col items-center gap-4 md:max-w-lg">
          <span className="text-center text-2xl font-semibold text-azul">
            Nossos escritórios
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {address.map(
              (item: { id: string; location: number[]; address: string }) => (
                <div
                  key={item.id}
                  onClick={() => setSelectAddress(item)}
                  className={`flex cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-center text-sm
                        ${selectAddress.id === item.id ? 'border-white bg-azul text-white' : 'border-dourado-leve text-gray-900 hover:bg-azul hover:text-white'}`}
                >
                  {item.address}
                </div>
              ),
            )}
          </div>

          {/* <div className="h-64 w-full max-w-full md:h-96">
            <MapContainer
              center={selectAddress.location}
              zoom={7}
              className="h-full w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={selectAddress.location}>
                <Tooltip>{selectAddress.address}</Tooltip>
              </Marker>
            </MapContainer>
          </div> */}
          <div className="mt-8 aspect-video rounded-lg bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0998641325437!2d-46.65390492529836!3d-23.561356178927773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1709899123456!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </article>
      </section>
    </main>
  )
}
