import Nav from "./components/nav/Nav"
import {CustomerReviews, Footer, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality, TopHero} from "./sections"

const App = () => (

    <main className='relative'>
    <Nav />

    <section className='xl:padding-l wide:padding-r padding-b'>
      <TopHero />
    </section>

    <section className='padding'>
      <PopularProducts />
    </section>

    <section className='padding'>
      <SuperQuality />
    </section>

    <section className='padding-x py-10'>
      <Services />
    </section>

    <section className='padding'>
      <SpecialOffer />
    </section>

    <section className='bg-[#fcf7fa] padding'>
      <CustomerReviews />
    </section>

    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>

    <section className='bg-indigo-950 padding-x padding-y pb-8'>
      <Footer />
    </section>
    </main>
  )


export default App
