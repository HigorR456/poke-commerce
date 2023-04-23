import {useState} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const list = await response.json();

    let pages = [];
    for (let i = 0; i < (Math.ceil(list.count/20)); i++) {
        pages.push({ params: { id: i.toString() } });
        console.log(pages);
    }
    
    return { paths: pages, fallback: false, }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { params }: any = context
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${params.id === 1 ? 1 : (params.id - 1) * 20}`);
    const list = await response.json();

    const promises = list.results.map((pokemon: any) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(res => res.json());
    })

    const products = await Promise.all(promises);
    const page = params.id;
    
    return {
        props: {products: {products}, pageNumber: {page}},
    }
}

const Products = ({products, pageNumber}: any) => {
    const [data, setData] = useState(products?.products);
    const [page, setPage] = useState([...pageNumber?.page]);

    const handleNavigation = (e: any) => {
        console.log(+page[0] +page[1])
    }

    return (
        <>
            <Header />

            <main className="main-products-wrap">
                <section>
                    <div className='container'>
                        <div className="products-wrap">
                            {data?.map((e: any) => {
                                const results = 
                                <div key={e.name} className='product'> 
                                    <div className='image-wrap'>
                                        <img className='image' src={e.sprites.other.dream_world.front_default ? e.sprites.other.dream_world.front_default : e.sprites.other['official-artwork'].front_default} alt={e.name}></img>
                                    </div>

                                    <div className='description-wrap'>
                                        <div className='price'>${e.base_experience? e.base_experience.toFixed(2) : (e.id/3).toFixed(2)}</div>
                                        <div className='name'>{e.name}</div>
                                    </div>
                                </div>
                                return results
                            })}
                        </div>



                        <div className="navigation-wrap">
                            <div>Page {page}</div>
                            <Link href={'/products/'+(page?.length > 1 ? +(page[0] +page[1]) -1 : (+page[0] - 1))}>
                            <button id='prev' onClick={handleNavigation}>Prev</button></Link>
                           <Link href={'/products/'+(page?.length > 1 ? +(page[0] +page[1]) +1 : (+page[0] +1))}>
                            <button id='next' onClick={handleNavigation}>Next</button></Link>
                        </div>
                    </div>
                </section>


            </main>

            <Footer />
        </>
    );
};

export default Products;