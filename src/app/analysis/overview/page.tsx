import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { IdeasUpload } from '@/components/IdeasUpload'
import { DashboardHeader } from '@/components/DashboardHeader'
import { Overview } from '@/components/Overview'

export default function Home() {
  return (
    <>
      <DashboardHeader />
      <main>
        <Overview />
      </main>
      <Footer />
    </>
  )
}
