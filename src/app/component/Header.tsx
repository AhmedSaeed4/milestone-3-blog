"use client";

import Card from "./Card";
import Link from "next/link";
import Data from '@/app/component/Data';

const data = Data

const Header = () => {
 // const router = useRouter();

  return (
    <div className="w-auto min-h-full font-mono py-[10vh] px-[40px] flex flex-col items-center gap-10 bg-gradient-to-b from-[#eceeed] to-[#d3d6dc]">
      <div className="flex flex-col gap-10">
        <div className="w-full">
          <h1 className="font-mono font-semibold text-[38px] leading-[48px] tracking-[0.2px] text-[#121c26]">
          Trusted Tools  <br /> for Creative Professionals
          </h1>
        </div>
        <div
          id="card-div"
          className="w-full h-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3"
        >
          {data.map((item, index) => {
            return (
              <Link href={`blog/${item.id}`}
                key={index}
                
                className="cursor-pointer"
              >
                <Card
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 mt-10 ">
        <p className="text-[#6b7280] text-[16px]">Ready to start your journey?</p>
       <Link href={"/"}> <button className="bg-[#121c26] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1e2a36] hover:scale-105 transition-transform duration-500">
          Get Started
        </button></Link>
      </div>
    </div>
  );
};

export default Header;
