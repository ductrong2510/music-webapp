/* eslint-disable @next/next/no-img-element */
export default function CardInfo(props: any) {
  const { image = "", title = "", description = "" } = props;

  return (
    <>
      <div className="flex items-center">
        <div className="w-[180px] aspect-square mr-[20px] rounded-[15px] truncate">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
        <div className="flex-1">
          <h1 className="p-0 m-0 font-[700] text-[35px] text-primary mb-[10px]">
            {title}
          </h1>
          <p className="p-0 m-0 font-[400] text-[14px] text-[#EFEEE0]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
