import React from 'react'
import {Hero,Footer,CustonerReviews,PopularProducts,Services,SpacialOffer,SuperQuality,Subscribe} from './sections/imports'
import Nav from './components/Nav'




export const App = () => {
  return (
    <main>
      <Nav/>
    <section className='xl:padding-1 wide:padding-r padding-p'>
      <Hero/>
    </section>
    <section className='padding'>
      <PopularProducts/>
    </section>
    <section className='padding'>
      <SuperQuality/>
    </section>
    <section className='padding-x py-10'>
      <Services/>
    </section>
    <section className='padding'>
      <SpacialOffer/>
    </section>
    <section className='bg-pale-blue padding'>
      <CustonerReviews/>
    </section>
    <section className='padding-x sm:pu-32 py-16 w-full'>
      <Subscribe/>
    </section>
    <section className='bg-black padding-x padding-t pb-8'>
      <Footer/>
    </section>
    </main>
  )
}
