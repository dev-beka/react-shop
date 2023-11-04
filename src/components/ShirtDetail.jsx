import React from "react";
import {Link} from "react-router-dom";
import {motion as m} from "framer-motion";
import {items} from "./data";

const DetailCard = ({item, setSelected}) => {
  const containerVariants = {
    initial: {
      borderRadius: "16px",
      scale: 1
    },
    animate: {
      borderRadius: "16px"
    }
  };
  
  return <div
    onClick={() => setSelected(item)}
    className="cursor-pointer">
    <m.img
      variants={containerVariants}
      initial="initial"
      className="w-[256px]" src={item.imageUrl} alt=""/>
  </div>
}
const ShirtDetail = ({selected, setSelected}) => {
  const containerVariants = {
    initial: {
      borderRadius: "16px"
    },
    animate: {
      borderRadius: "16px"
    }
  };
  const detailMap = items.map(item => {
    if (selected.id === item.id) {
      return !item.id
    }
    return <div key={item.id} className="max-w-[256px] mt-10">
      <Link to={`/react-shop/${item.id}`}>
        <DetailCard item={item} setSelected={setSelected}/>
      </Link>
    </div>
  })
  return <div className="container max-w-[1200px] mx-auto px-6">
    <m.div className="">
      <div className="flex mt-10 items-center">
        <Link to="/react-shop">
          <svg className="inline-block" width="40px" height="40px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM13.3634 10.0129C13.5877 9.78859 13.5877 9.42492 13.3634 9.20062C13.1391 8.97631 12.7754 8.97631 12.5511 9.20062L10.1579 11.5938C10.0502 11.7015 9.98967 11.8476 9.98967 12C9.98967 12.1523 10.0502 12.2984 10.1579 12.4061L12.5511 14.7993C12.7754 15.0236 13.1391 15.0236 13.3634 14.7993C13.5877 14.575 13.5877 14.2114 13.3634 13.987L11.3763 12L13.3634 10.0129Z"
                  fill="#ffffff"/>
          </svg>
        </Link>
        <h2>Home</h2></div>
      <div className="flex flex-wrap-reverse md:flex-nowrap xl:flex-nowrap mt-10 gap-9 container max-w-[900px]">
        <m.img
          className="w-[450px] "
          src={selected.imageUrl} alt=""
          layoutId={`card${selected.id}`}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          transition={{duration: 0.2}}
        />
        <div className="flex flex-col justify-between py-4">
          <div >
            <h1 className="text-5xl font-bold">{selected.name}</h1>
            <h2 className="text-base my-4">{selected.description}</h2>
          </div>
          <div className="text-end">
            <h2 className="text-end text-4xl">${selected.price}</h2>
            <button className="p-1 bg-amber-300 rounded-4xl inline-block rounded text-black my-2">Add to cart</button>
          </div>
        </div>
      </div>
      <p className="container max-w-[900px] my-20">Step into a neon-lit realm where fashion meets the digital frontier.
        Our boutique is a portal to tomorrow's
        style, where code and couture collide. Unleash your inner tech fashionista with attire that bridges the gap
        between reality and the virtual cosmos.</p>
      <div className="mt-20">
        <h2 className="font-semibold text-lg">You might also like</h2>
        <div className="container max-w-[900px] grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {detailMap}
        </div>
      </div>
    </m.div>
  </div>
}
export default ShirtDetail
