import { zodResolver } from '@hookform/resolvers/zod'
import { Calculator } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Banner from '@/assets/banner-vertical.png'
import { Progress } from '@/components/progress-bar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// eslint-disable-next-line prefer-regex-literals
const phoneValidation = new RegExp(/^\(?\d{2}\)?\s?9\d{4}\s?\d{4}$/)

const profileFormSchema = z.object({
  namecomplete: z
    .string()
    .min(2, {
      message: 'O campo nome deve conter mais de 2 caracteres',
    })
    .max(50, {
      message: 'O campo nome deve conter menos que 50 caracteres.',
    }),
  email: z.string().email({
    message: 'Email inválido',
  }),
  phone: z
    .string()
    .regex(phoneValidation, { message: 'Numero de telefone inválido' }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function InputForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange',
  })

  function onSubmit(data: ProfileFormValues) {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-16 w-full items-center justify-between gap-6 bg-gray-800 px-6">
        <a href="/">
          <div className="flex cursor-pointer items-center justify-center">
            <span className="mr-2 text-2xl font-semibold text-white">
              ContabilSim
            </span>
            <Calculator className="h-6 w-6 fill-white" />
          </div>
        </a>
        <div>
          <span className="text-2xl text-white">
            Cadastro de abertura de empresa
          </span>
        </div>
      </div>
      <Form {...form}>
        <div className="mt-10 w-[59%] gap-6 px-4 text-xl text-gray-800">
          <span>1/2 - Dados pessoais</span>
          <Progress value={50} className="" />
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 w-[60%] gap-6 space-y-8 px-6"
        >
          <FormField
            control={form.control}
            name="namecomplete"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="Nome completo" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Celular</FormLabel>
                <FormControl>
                  <Input placeholder="Celular" maxLength={11} {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="outline"
            className="bg-gray-900 text-white hover:bg-gray-300 md:flex"
            disabled={!form.formState.isValid}
          >
            Enviar
          </Button>
        </form>
      </Form>
      <div className="mt-10 w-[60%] px-6 text-center">
        <h2 className="text-2xl text-gray-800">Já tem uma empresa aberta?</h2>
        <Button
          variant="outline"
          className="mt-4 bg-gray-900 text-white hover:bg-gray-300"
          onClick={() => (window.location.href = '/solicite-uma-proposta')}
        >
          Solicite uma Proposta
        </Button>
      </div>
      <div className="hidden lg:flex lg:w-1/2">
        <a href="/solicite-uma-proposta">
          <img
            src={Banner}
            alt="banner"
            className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-auto object-cover"
          />
        </a>
      </div>
    </div>
  )
}
