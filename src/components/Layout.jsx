import React from 'react'
import {items} from "./data";
import {Link} from "react-router-dom";
import {motion as m} from "framer-motion";

const Card = ({setSelected, item}) => {
  const containerVariants = {
    initial: {
      borderRadius: "16px"
    },
    animate: {
      borderRadius: "16px"
    }
  };
  return (
    <m.div
      onClick={() => setSelected(item)}
      whileHover={{scale: 1.025}}
      className="bg-white rounded-xl"
    >
      <m.img
        className="w-[256px] " src={item.imageUrl} alt=""
        layoutId={`card${item.id}`}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={{duration: 0.2}}
      />
      <m.div
        className="p-6 desc-plate bg-white rounded-b-xl">
        <h2 className="text-black text-base font-semibold bg-white">{item.name}</h2>
        <h2
          className="text-sm text-black whitespace-nowrap overflow-ellipsis overflow-hidden bg-white">{item.description}</h2>
        <br/>
        <h2 className="text-base font-semibold text-end text-black price bg-white">${item.price}</h2>
      </m.div>
    </m.div>
  )
}
const Layout = ({setSelected}) => {
  const itemMap = items.map(item => {
    return <div key={item.id} className="max-w-[256px] mt-10">
      <Link to={`/react-shop/${item.id}`}>
        <Card setSelected={setSelected} item={item}/>
      </Link>
    </div>
  })
  return <div className="container max-w-[1200px] mx-auto px-6">
    <div>
      <h1 className="mt-10 text-4xl text-bold">React Shop</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
        {itemMap}
      </div>
    </div>
  </div>
}
export default Layout
