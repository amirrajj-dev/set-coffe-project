"use client";
import React from "react";
import MainProductBreadCrumb from "../MainProductBreadCrumb/MainProductBreadCrumb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import Link from "next/link";
import MainProductPoint from "../MainProductPoint/MainProductPoint";
import MainProductScore from "../MainProductScore/MainProductScore";
import MainProductDesc from "../MainProductDesc/MainProductDesc";
import { FaCheck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import MainProductMeta from "../MainProductMeta/MainProductMeta";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-toastify";
import { getUsersWishList } from "@/utils/validations/getUsersWishList";
import {CircularProgress } from "@mui/material";
import { FaRegSmile } from "react-icons/fa";
import { useBaket } from "@/utils/validations/BasketContext";
import { useRouter } from "next/navigation";
function MainProductSummery({product , usersWishList , discount , userId}) {
  
  const [productCount, setProductCount] = React.useState(1);
  const [showLoader , setShowLoader] = React.useState(false)
  const router = useRouter()
  const {openBasket} = useBaket() 
  const handleAddToWishList = async ()=>{
    const authUser = await fetch('/api/auth/me')
    if (authUser.status === 200){
      try {
        const response = await fetch('/api/products/wishlist' , {
          method : 'POST' ,
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            user : userId || null ,
            product : product._id
          })
        })
        const result = await response.json()
        
  
        if (response.status === 201){
          toast.success('محصول مورد نظر با موفقیت به لیست علاقه مندی ها اضافه شد :)' , {
            position : 'top-left' ,
            autoClose : 3000 ,
            hideProgressBar  : true ,    
          })
          router.refresh()
        }
        
  
      } catch (error) {
        
        toast.error('محصول مورد نظر به لیست علاقه مندی ها اضافه نشد :(' , {
          position : 'top-left' ,
          autoClose : 3000 ,
          hideProgressBar  : true ,
        })
      }
    }else{
      toast.error('برای اضافه کردن محصولی به علاقه مندی ها باید لاگین کنید :)' , {
        position : 'top-left' ,
        autoClose : 3000 ,
        hideProgressBar  : true ,
      })
    }
    
  }
  
  const wishlistProducts = usersWishList.map(item=>item.product?.title)

  const addProductToBasket = () => {
    setShowLoader(true);
    
    setTimeout(() => {
      setShowLoader(false);
      openBasket();
    }, 3000);
  
    const newProduct = {
      id: product._id,
      title: product.title,
      scoreYouGet : product.scoreYouGet,
      price : product.price,
      fever : product.feverAmount , 
      img : product.image ,
      amount : 1
    };
    
    const existingProducts = JSON.parse(localStorage.getItem('basket')) || [];
    const mappedProducts = existingProducts.map(product=>{
      if (product.title === newProduct.title){
        return {...product , amount : product.amount + 1}
      }else{
        return product
      }
    })
    const sommedProducts = mappedProducts.some(product => product.title === newProduct?.title)
    const updatedProducts = sommedProducts ? [...mappedProducts] :  [...mappedProducts, newProduct];
    
    localStorage.setItem('basket', JSON.stringify(updatedProducts));
  };  
  
  return (
    <>
      <MainProductBreadCrumb title={product?.title} />
      <div className="flex items-center justify-between mt-1">
        <span className="text-slate-950 font-medium text-sm">
          {product?.title}
        </span>
        <div className="flex items-center gap-x-1 text-slate-900">
          <Link href={""}>
            <IoIosArrowForward />
          </Link>
          <Link href={""}>
            <FaShop />
          </Link>
          <Link href={""}>
            <IoIosArrowBack />
          </Link>
        </div>
      </div>
      <h2 className="text-slate-700 font-Shabnam-bold text-3xl mt-6 relative">
        {product.title}
        {discount && (
          <span className="bg-emerald-600 text-white rounded-md text-base font-Shabnam-light-digit p-1 absolute -rotate-45 -left-1">{discount} %</span>
        )}
      </h2>
      <MainProductPoint score={product.scoreYouGet} />
      <div className="flex gap-x-2 mt-6">
        <MainProductScore score={product.score} />
        <Link href={""} className="text-gray-500 text-sm">
          (دیدگاه {product.comments.length} کاربر)
        </Link>
      </div>
      <span className="text-black/90 font-medium text-2xl inline-block mt-6 font-Shabnam-light-digit">
     {discount ? (
      <>
      <span className="mx-5 line-through text-gray-500">{product.price} تومان</span>
      <span>{(product.price * (Number(discount) / 100)).toLocaleString()} تومان</span>
      </>
     ) : (
      <span>{product.price.toLocaleString()} تومان</span>
     ) }
     
      </span>
      <MainProductDesc />
      <div className="flex items-center mt-4 text-slate-950 gap-x-1">
        <FaCheck className="translate-y-px" />
        {product.isAvailable ? <span>موجود در انبار</span> : <span>تمام شده :(</span>}
      </div>
      <div className="flex items-center gap-x-4 mt-16">
        <div className="flex text-gray-500">
          <button
            className="h-11 font-bold border border-gray-300 p-2 flex items-center justify-center transition-colors hover:bg-amber-950 hover:text-white"
            onClick={() => setProductCount((prev) => prev - 1)}
          >
            -
          </button>
          <span className="h-11 border border-gray-300 p-2 flex items-center justify-center">
            {productCount}
          </span>
          <button
            className="h-11 font-bold border border-gray-300 p-2 flex items-center justify-center transition-colors hover:bg-amber-950 hover:text-white"
            onClick={() => setProductCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="bg-emerald-700 text-white rounded w-36 shadow-lg border-b border-emerald-900 h-11 flex items-center justify-center transition-colors hover:bg-amber-950 ">
        {showLoader ? (
          <CircularProgress size={'20px'} color="white" />
        ) : (
          <span onClick={addProductToBasket}>افرودن به سبد خرید</span>
        )}
        </button>
      </div>
      <div className="flex items-center gap-x-4 text-slate-900 mt-6 pb-6 border-b border-gray-300">
        <div className="flex items-center justify-center gap-x-1">
          <MdCompareArrows className="translate-y-1 text-xl" />
          <span className="text-sm font-medium translate-y-1">مقایسه</span>
        </div>
        <div className="flex items-center justify-center gap-x-1 cursor-pointer group">
          {wishlistProducts.join('').includes(product.title) ? (
            <>
            <span className="text-sm font-medium translate-y-1">این محصول جزو علاقه مندی های شماست</span>
            <FaRegSmile className="translate-y-[2px]"/>
            </>
            
          ) : (
           <>
            <FaHeart className="translate-y-1 text-xl hidden group-hover:inline"/>
            <CiHeart className="translate-y-1 text-xl group-hover:hidden" />
            <span className="text-sm font-medium translate-y-1" onClick={handleAddToWishList}>افرودن به علاقه مندی ها</span>
           </>
          )}
        </div>
      </div>
      <MainProductMeta id={product._id} tags={product.tags} />
    </>
  );
}

export default MainProductSummery;
