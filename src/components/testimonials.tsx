import { Star } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const testimonials = [
  {
    name: 'João Silva',
    role: 'Diretor Financeiro',
    company: 'Tech Solutions',
    content:
      'Excelente serviço! A equipe é muito profissional e nos ajudou a otimizar nossos processos contábeis.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Maria Santos',
    role: 'Proprietária',
    company: 'Café & Co',
    content:
      'Trabalho excepcional no planejamento tributário. Recomendo fortemente!',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Pedro Oliveira',
    role: 'CEO',
    company: 'Construtech',
    content:
      'Parceria de sucesso há mais de 5 anos. Profissionais altamente capacitados.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Histórias de sucesso de quem confia em nosso trabalho
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-azul"
                        />
                      ))}
                    </div>
                    <p className="mb-6 text-gray-600">{testimonial.content}</p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role} - {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
