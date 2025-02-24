import { FAQPage } from '@/components/faq-page'
import { PlansTable } from '@/components/plans-table'

export function Plans() {
  return (
    <>
      <PlansTable />
      <FAQPage page={'plans'} />
    </>
  )
}
