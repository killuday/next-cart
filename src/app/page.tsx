'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {useDispatch} from "react-redux";
import {add} from "@/Redux/CartSlice";



interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}
export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch=useDispatch();
    const handleAdd=(product:Product)=>{
        dispatch(add(product))
    }
    const getProducts=async()=>{
        const res=await fetch('https://fakestoreapi.com/products')
        const data=await res.json()
        setProducts(data)

        return data;
    }
    useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        });
    }, []);

    return (
   <div className={'grid grid-cols-4 gap-4 container mx-auto p-16'}>
       {products?.map((product:any)=>(
           <div className={' rounded-xl p-5 [box-shadow:rgba(14,_30,_37,_0.12)_0px_2px_4px_0px,_rgba(14,_30,_37,_0.32)_0px_2px_16px_0px]'} key={product.id}>
               <div className='flex justify-center'>

               <Image height={100} width={200} className={'h-[250px]'} src={product.image} alt={product.title}/>
               </div>
               <div className=' text-left'>
                   <div className='mt-5'>

                   <h5 className='truncate font-bold'>
                       {product.title}
                   </h5>
                   <h5 className='mb-2 text-sm'>

                       ${product.price}

                   </h5>
                   <button onClick={()=>handleAdd(product)} className={'focus:ring-offset-2 w-full focus:ring-2 rounded-lg bg-blue-500 text-white text-[14px] py-2 px-4'}>Add to cart</button>
                   </div>


               </div>





           </div>
       ))}

   </div>
  );
}
