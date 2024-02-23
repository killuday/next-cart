'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {useDispatch} from "react-redux";
import {add} from "@/Redux/CartSlice";
import Cart from "@/Components/Cart";


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}
export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [isLoading,setIsLoading]=useState(false);
    const dispatch=useDispatch();
    const handleAdd=(product:Product)=>{
        dispatch(add(product));
        setIsCartOpen(true);
    }
    const getProducts = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('https://fakestoreapi.com/products');
            return await res.json();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        });
    }, []);


    return (
  <>
      {isLoading ?(<>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto p-16">
              {[...Array(12)].map((_, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow-md animate-pulse">
                      <div className="h-48 bg-gray-200 rounded"></div>
                      <div className="mt-4">
                          <div className="h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded"></div>
                      </div>
                  </div>
              ))}
          </div>


      </>) : (
          <div className={'md:grid md:grid-cols-4 md:gap-4 grid grid-cols-1 gap-2 container mx-auto p-16'}>
              {products?.map((product: any) => (
                  <div
                      className={' rounded-xl p-5 [box-shadow:rgba(14,_30,_37,_0.12)_0px_2px_4px_0px,_rgba(14,_30,_37,_0.32)_0px_2px_16px_0px]'}
                      key={product.id}>
                      <div className='flex justify-center'>

                          <Image height={100} width={200} className={'h-[250px]'} src={product.image}
                                 alt={product.title}/>
                      </div>
                      <div className=' text-left'>
                          <div className='mt-5'>

                              <h5 className='truncate font-bold'>
                                  {product.title}
                              </h5>
                              <h5 className='mb-2 text-sm'>

                                  ${product.price}

                              </h5>
                              <button onClick={() => handleAdd(product)}
                                      className={'focus:ring-offset-2 w-full focus:ring-2 rounded-lg bg-blue-500 text-white text-[14px] py-2 px-4'}>Add
                                  to cart
                              </button>
                          </div>


                      </div>
                      <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen}/>


                  </div>
              ))}

          </div>
      )}
  </>
    );
}
