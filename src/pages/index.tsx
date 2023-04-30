import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'

import {MdDiscount} from 'react-icons/md'
import {RiCoupon3Line} from 'react-icons/ri'
import {BsCoin, BsFillPatchCheckFill} from 'react-icons/bs'
import {HiTrendingUp} from 'react-icons/hi'
import {TbTruckDelivery} from 'react-icons/tb'
import {CiDiscount1} from 'react-icons/ci'
import {GiPodium} from 'react-icons/gi'

export default function Home() {
  return (
    <>
      <Head>
        <title>PokEcommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="hero-section">
          <div className='hero-container'>
            <div className='content-wrap'>
              <div className="title-wrap">
                <span className='title'>Buy the best Pokemon Here!</span>
                <div className='description'>
                  <BsFillPatchCheckFill className='icon' />
                  <span>Hundreds of products with fast local delivery.</span></div>
                <div className='description'>
                  <BsFillPatchCheckFill className='icon' />
                  <span>New sales everyday, find the best prices.</span></div>
                <div className='description'>
                  <BsFillPatchCheckFill className='icon' />
                  <span>Track your order live.</span></div>
              </div>

              <div className='poke-wrap'>
                <div className='poke-div'>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'></img>
                </div>

                <div className='poke-div'>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'></img>
                </div>

                <div className='poke-div'>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'></img>
                </div>

                <div className='poke-div'>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg'></img>
                </div>
              </div>
              <div className='buy-now-wrap'>
                <Link href='/products/1' className='buy-now-link' >Buy your Pokemon Now!</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="offers-section">
          <div className='container'>
          
            <div className='content-wrap'>

              <div className="deals-wrap">

                <div className='deal-box'>
                  <CiDiscount1 className='deal-icon'  />
                  <div className="deal-text">Under 50% off</div>
                </div>

                <div className='deal-box'>
                  <RiCoupon3Line className='deal-icon'  />
                  <div className="deal-text">
                  Discount coupon</div>
                </div>

                <div className='deal-box'>
                  <BsCoin className='deal-icon'  />
                  <div className="deal-text">
                  Essentials under $25</div>
                </div>

                <div className='deal-box'>
                  <HiTrendingUp className='deal-icon'  />
                  <div className="deal-text">
                  Trending</div>
                </div>

                <div className='deal-box'>
                  <GiPodium className='deal-icon'  />
                  <div className="deal-text">
                  Most popular</div>
                </div>

                <div className='deal-box'>
                  <TbTruckDelivery className='deal-icon'  />
                  <div className="deal-text">
                  Free delivery</div>
                </div>

                <div className='deal-box'>
                  <MdDiscount className='deal-icon' />
                  <div className="deal-text">
                  Exclusive offers</div>
                </div>

                </div>

              <div className='types-wrap'>
                <div className='box'>
                  <div className='back-box'></div>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png'></img>
                  <div className='text-wrap'>
                    <span>Fire Type</span>
                    <button>See more</button>
                  </div>
                </div>

                <div className='box'>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png'></img>
                  <div className='text-wrap'>
                    <span>Water Type</span>
                    <button>See more</button>
                  </div>
                </div>

                <div className='box'>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/135.png'></img>
                  <div className='text-wrap'>
                    <span>Electric Type</span>
                    <button>See more</button>
                  </div>
                </div>

                <div className='box'>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png'></img>
                  <div className='text-wrap'>
                    <span>Normal Type</span>
                    <button>See more</button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
