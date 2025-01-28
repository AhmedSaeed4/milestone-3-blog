import { StaticImageData } from "next/image";

interface CardProps {
    title: string;
    description: string;
    image: string | StaticImageData;
}

const Card = (props : CardProps) => {
    const { title, description, image } = props;
  return (
    <div className=" h-[400px] flex flex-col   rounded-lg border border-[#121c2668] bg-[#eceeed] drop-shadow-2xl  hover:scale-105 transition-transform duration-500 ">
            <div className={`${image}   h-[250px] rounded-lg bg-cover bg-center `}></div>
            <div id="text-div" className="p-3 flex flex-col gap-1">
              <h3 className="font-sans font-bold text-[20px] leading-[30px] text-[#121c26] ">{title} </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[16px] text-[#121c26] ">{description}</p>
            </div>
          </div>
  )
}

export default Card