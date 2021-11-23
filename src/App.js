
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <div style={{fontFamily: "Montserrat, sans-serif"}}>
    <div className="flex flex-row">
      <div data-aos="fade-left" className="h-screen text-red-600">
        <div className="p-32 pb-2">
        <h3 className="text-3xl pb-5">Trending Collection 🔥</h3>
        <h1 className="text-7xl">Freshen up your look </h1>
        <button className="w-36 p-2 mt-5 mr-5 bg-purple-600 rounded-3xl text-white">Start Shopping</button>
        <button className="w-16 p-2 mt-5 bg-white text-gray-90 shadow-2xl border-solid border-2 border-red-500 rounded-r-full">▶</button>
        </div>

      </div>
      <div data-aos="fade-right" style={{ backgroundImage: "", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="w-screen h-screen">
        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1538331269258-6c97a6bdeae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
      </div>
    </div>

    <div className="w-full h-full p-10 text-center">
      <h1 className="text-5xl ml-12 pb-10">Category</h1>
      <div className="flex flex-row pb-20 justify-center">
      <img className="mr-10 ml-10 mt-10" src="https://img.icons8.com/cute-clipart/64/000000/jumper.png"/>
      <img className="mr-10 ml-10 mt-10" src="https://img.icons8.com/cute-clipart/64/000000/skirt.png"/>
      <img className="mr-10 ml-10 mt-10" src="https://img.icons8.com/cute-clipart/64/000000/t-shirt.png"/>
      <img className="mr-10 ml-10 mt-10" src="https://img.icons8.com/cute-clipart/64/000000/trilby.png"/>
      <img className="mr-10 ml-10 mt-10" src="https://img.icons8.com/cute-clipart/64/000000/boots.png"/>
      <img className="mr-10 ml-10 mt-10" src="https://img.icons8.com/cute-clipart/64/000000/tie.png"/>
      <img className="mr-10 ml-10 mt-10" src="https://img.icons8.com/cute-clipart/64/000000/socks.png"/>
      </div>

      <div data-aos="fade-up" id="Section1" className="grid grid-cols-4 gap-4">
         <div className="bg-gray-400 ">
          <img className="w-full h-full rounded-3xl" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80"/>
         </div>

         <div className="bg-gray-400">
            <img className="w-full h-full rounded-3xl" src="https://images.unsplash.com/photo-1490092374320-1ca36d69ff6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"/>
        </div>

        <div className="bg-gray-400">
        <img className="w-full h-full rounded-3xl" src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
         </div>

         <div className="bg-gray-400">
         <img className="w-full h-full rounded-3xl" src="https://images.unsplash.com/photo-1520367745676-56196632073f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
         </div>

        <div className="">
         <img className="w-full h-full rounded-3xl" src="https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        </div>

        <div className="">
         <img className="w-full h-full rounded-3xl" src="https://images.unsplash.com/photo-1553808373-92b0bcc3af65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        </div>

        <div className="">
         <img className="w-full h-full rounded-3xl" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80" />
        </div>

        <div className="">
         <img className="w-full h-full rounded-3xl" src="https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        </div>

      </div>

    </div>

    <div id="section2" className="w-full h-full bg-gray-100 pb-28">
      <div className="p-10 m-10 text-5xl text-left">
        <h1>Trending this month</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 ">
        <div data-aos="fade-right"  className="grid grid-cols-2 gap-2 w-full h-full shadow-2xl bg-white">
          <div className="p-10 mt-36">
           <h1 className="text-4xl">Dialo Long Dress</h1>
           <h3>Cotton Dress</h3>
           <h1 className="text-3xl mt-5">4.3 ⭐️</h1>

           <div className="grid grid-cols-3 gap-4 mt-5">
              <h1>Price</h1>
              <h1>Colour</h1>
              <h1>Size</h1>

              <h1>$523</h1>
              <div className="flex flex-row">
              <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
              </div>
              <h1><span>S</span> <span>M</span> <span>L</span></h1>
           </div>

           </div>
           <div>
             <img className="w-full h-full rounded-br-full rounded-tl-full rounded-3xl" src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80" />
           </div>
        </div>

        <div data-aos="fade-left" className="grid grid-cols-2 gap-2 w-full h-full shadow-2xl bg-white">
          <div className="p-10 mt-36">
        <h1 className="text-4xl">Dioramour Dress</h1>
        <h3>Cotton Dress</h3>

        <h1 className="text-3xl mt-5">4.5 ⭐️</h1>

<div className="grid grid-cols-3 gap-4 mt-5">
   <h1>Price</h1>
   <h1>Colour</h1>
   <h1>Size</h1>

   <h1>$523</h1>
   <div className="flex flex-row">
   <div className="w-5 h-5 bg-purple-600 rounded-full"></div>
   <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
   <div className="w-5 h-5 bg-green-500 rounded-full"></div>
   </div>
   <h1><span>S</span> <span>M</span> <span>L</span></h1>
</div>

        </div>
        <div>
          <img className="w-full h-full rounded-br-full rounded-tl-full rounded-3xl" src="https://images.unsplash.com/photo-1573664333795-cca352e9a15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        </div>
        </div>

      </div>

    </div>


    <div id="Section3" className="w-full h-full">
       <div data-aos="flip-right"  className="grid grid-cols-2 gap-5 mt-20 w-full h-full">
          <div className="p-40">
            <img className="rounded-full w-full h-full " src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" />
          </div>
          
          <div className="">
           <h1 className="text-4xl mt-72 pt-10 pb-40 pr-10">Our Products Come From Top Fashion Brands Around The World</h1>
           <div className="grid grid-cols-4 gap-1 pr-20">
           <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0000/1770/brand.gif?itok=xsXFr9gX"/>
           <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/062015/guess.png?itok=wVNOgHKI" />
           <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/122014/prada_logo.png?itok=c7qY_VrQ" />
           <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0003/0046/brand.gif?itok=zB0kQ2vO" />
           </div>
          </div>

       </div>

    </div>



    </div>

  );
}

export default App;
