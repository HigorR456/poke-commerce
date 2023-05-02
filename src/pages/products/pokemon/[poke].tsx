import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { CartContext } from '../../../context/CartContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useState, useContext } from 'react'

import { BsShieldCheck, BsArrowReturnLeft, BsChevronDown } from 'react-icons/bs'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1&offset=0');
  const list = await response.json();

  const promises = list.results.map((e:any) => {
    return {params: {poke: e.name}}
  })
  const pokemon = await Promise.all(promises);

  return {
    paths: pokemon,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (content) => {
  const { params }: any = content;
  const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${params.poke}`);
  const data = await response.json();

  return {
    props: {
      info: {
        name: data.name,
        exp: data.base_experience,
        image: data.sprites.other.dream_world.front_default,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map((e: any) => {return e.type.name}),
        abilities: data.abilities.map((e: any) => { return e.ability.name}),
      }
    },
  }
}

const Pokemon = ({info}: any) => {
  const [description, setDescription] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();

  const { handleAddToCart } = useContext(CartContext);

  return (
    <>
      <Header />

      <main className='main-pokemon-wrap'>
        <section>
          <div className="container">

            <div className='pokemon-wrap'>
              <div className='return-button-wrap'>
                <button onClick={() => router.back()}><BsArrowReturnLeft /></button>
              </div>
              <div className='first-row'>
                <div className='image-wrap'>
                  <img src={info.image} alt={info.name}></img>
                </div>
                <div className='buy-wrap'>
                  <div className='rows-wrap'>
                    <div className='price-wrap'>
                      <div className='name'>Pokemon {info.name}</div>
                      <div className='price-info'>
                        <div className='price'>${info.exp}<span>00</span></div>

                        <div className='quantity'>
                          <button onClick={() => setQuantity(quantity-1)} disabled={quantity === 1? true : false}>-</button>
                          <div>{quantity}</div>
                          <button onClick={() => setQuantity(quantity+1)}>+</button>
                        </div>
                      </div>
                    </div>

                    <div className='button-wrap'>
                      <Link className='buy-now' href='/' onClick={() => console.log('hey')}>Buy Now</Link>
                      <div className='add-to-cart' onClick={() => handleAddToCart(info, quantity)}>Add To Cart</div>
                    </div>

                    <div className='claim-wrap'>
                      <div className='text-wrap'>
                        <BsArrowReturnLeft className='icon' />
                        <div>
                          <span>Free return.</span> You have 7 days from the date of receipt.</div>
                      </div>
                      <div className='text-wrap'>
                        <BsShieldCheck className='icon' />
                        <div>
                          <span>Guaranteed Purchase.</span> Get the product you've been waiting for or your money back.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='second-row'>
                <div className='description-wrap'>
                  <div className='description-title'>Description</div>
                  <div className={description? 'description show' : 'description'}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris velit, convallis aliquet lacus non, hendrerit tempus nisi. Nunc vel justo dignissim, scelerisque justo vel, tempor elit. Mauris sit amet lacus erat. Aenean mollis odio quis lacus efficitur tempor. Duis gravida aliquet viverra. Mauris blandit dolor non tristique vehicula. Morbi interdum ut dolor eget vulputate. Nunc porttitor ultrices nisi vitae faucibus.
                    </p>

                    <p>
                      Praesent eu mollis est, eu tincidunt nulla. Suspendisse dignissim turpis augue, quis rhoncus neque ultrices tincidunt. Suspendisse eu laoreet risus. Nunc ac aliquet tellus. Aliquam pellentesque diam porttitor dui volutpat, sed vehicula magna lobortis. Fusce mollis nibh nec eros eleifend finibus. Donec mollis imperdiet iaculis. Donec tincidunt ut purus eget tristique. Integer ut consectetur nulla.
                    </p>

                    <p>
                      Maecenas commodo vestibulum tortor, sed gravida nibh tristique nec. Quisque interdum lacus nec leo dignissim vehicula. Cras vel lorem dictum justo venenatis tincidunt in sed lacus. Vestibulum non dolor risus. Fusce gravida tristique orci vitae condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor vitae enim ac dapibus. Vivamus rhoncus ante massa, a tincidunt metus porta quis.
                    </p>

                    <p>
                      Vestibulum vel nisi quam. Donec quam mauris, egestas at gravida et, elementum luctus est. In at risus ac erat convallis ultrices dignissim id magna. Quisque gravida ipsum lorem, quis congue ex varius a. Nullam cursus et felis vel hendrerit. Nullam aliquam lobortis magna, eget commodo ligula porttitor sed. Cras a justo eu dui bibendum laoreet sit amet faucibus mauris. Aenean in lectus quis justo luctus tristique. Morbi nisl massa, vehicula ut iaculis vel, dapibus sed nisi.
                    </p>

                    <p>
                      Duis ac tincidunt augue. Integer sed ante nec justo viverra finibus. Aenean ac pellentesque nibh. Sed suscipit est id mattis laoreet. Phasellus porttitor arcu ut purus vestibulum fermentum. Sed non arcu ante. Nullam luctus, ipsum et condimentum rhoncus, mauris ex vehicula tellus, aliquet ornare justo ante ut risus. Aliquam ut magna et libero feugiat dapibus. Curabitur in mauris non eros mattis egestas.
                    </p>

                    <p>
                      Nulla a est eu nibh viverra sollicitudin et sed augue. Nunc eu volutpat nisl, a faucibus sem. Cras sem neque, mollis vitae blandit vel, bibendum nec augue. Phasellus vel nunc sed massa maximus dapibus. Integer sollicitudin, arcu ac dignissim egestas, nisl nunc pellentesque quam, at molestie turpis enim vel purus. Praesent velit nibh, fermentum dignissim convallis id, rutrum nec dui. Donec vitae erat in lacus egestas efficitur.
                    </p>
                  </div>
                  <div className={description? 'see-more see-less' : 'see-more'}>
                    <button onClick={() => description? setDescription(false) : setDescription(true)}>
                      <span>{description? 'See less' : 'See more'}</span>
                      <BsChevronDown className='icon' />
                    </button>
                  </div>
                  <div className='characteristics-title'>Characteristics</div>
                  <div className='characteristics'>
                    
                    <div className='text'>{info.name} is the pokemon of ID number {info.id}, and is one of the best Pokemon to acquire in any circumstances.</div>

                    <div className='table'>
                      
                      <ul>
                        <b>Height</b>
                        <li>{(info.height/10).toFixed(1)}m</li>
                      </ul>

                      <ul>
                        <b>Weight</b>
                        <li>{info.weight/10}kg</li>
                      </ul>

                      <ul>
                        <b>Exp</b>
                        <li>{info.exp}</li>
                      </ul>

                    </div>

                    <div className='table'>
                      
                      <ul>
                        <b>ID</b>
                        <li>{info.id}</li>
                      </ul>

                      <ul>
                        <b>Types</b>
                        <div className='types'>{info.types.map((e:any) => {return <li key={e} className={'box ' + e}>{e}</li>})}</div>
                      </ul>

                      <ul>
                        <b>Abilities</b>
                        <div>{info.abilities.map((e:any) => {return <li key={e}>{e}</li>})}</div>
                      </ul>

                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Pokemon;