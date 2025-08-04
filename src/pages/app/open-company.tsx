import 'leaflet/dist/leaflet.css'

import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type LocationType = [number, number]

function MapView({ location }: { location: LocationType }) {
  const map = useMap()
  map.setView(location, 15)
  return null
}

export function OpenCompany() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [observation, setObservation] = useState('')

  const TELEGRAM_BOT_TOKEN = '7289008410:AAF-VFOIVfwSwgyLRdUkrm56PJ_i_90ZTHs' // Substitua pelo seu token
  const TELEGRAM_CHAT_ID = '-4578405093'

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

  const addresses = [
    {
      id: '1',
      location: [-3.7281863612750463, -38.51556091895315] as LocationType,
      address: 'Rua Costa Barros, 915, Sala 30',
    },
    {
      id: '2',
      location: [-5.890377233489384, -38.62126426153381] as LocationType,
      address: 'Rua Dom Carloto, 399',
    },
  ]

  const [selectedLocation, setSelectedLocation] = useState(addresses[0])

  return (
    <main className="flex w-full flex-col p-6">
      <div className="flex w-full flex-col items-center justify-center">
        <span className="text-center text-4xl font-bold text-[#004AAD]">
          Entre em contato
        </span>
        <p className="text-center text-lg text-[#004AAD]">
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

          <a
            target="_blank"
            href="https://wa.me/5511993953519?text=Desejo%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20abrir%20minha%20empresa"
            rel="noreferrer"
            className="w-full max-w-sm"
          >
            <Button
              className="w-full max-w-sm border border-[#11B856] bg-[#11B856] text-white hover:bg-white hover:text-[#11B856]"
              onClick={() => {
                sendTelegramMessage()
              }}
            >
              Enviar
            </Button>
          </a>
        </div>

        <article className="flex w-full max-w-full flex-col items-center gap-4 md:max-w-lg">
          <span className="text-center text-2xl font-semibold text-[#004AAD]">
            Nossos escritórios
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {addresses.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedLocation(item)}
                className={`flex cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-center text-sm
                  ${selectedLocation.id === item.id ? 'border-white bg-[#11B856] text-white' : 'border-[#FF914D] text-[#FF914D] hover:bg-[#FF914D] hover:text-[#004AAD]'}`}
              >
                {item.address}
              </div>
            ))}
          </div>

          <div className="mt-8 h-96 w-full rounded-lg bg-gray-200">
            <MapContainer
              center={selectedLocation.location}
              zoom={15}
              className="h-full w-full rounded-lg"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <MapView location={selectedLocation.location} />
              <Marker position={selectedLocation.location}>
                <Popup>{selectedLocation.address}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </article>
      </section>
    </main>
  )
}
