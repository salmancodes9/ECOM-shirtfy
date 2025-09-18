export const BrandBanner = ({className}) => {
  return (
    <section className={`bg-brand py-10  ${className}`}>
      <div className="container mx-auto px-4 p-7 bg-red-500 text-[20px]">
        <div className="text-center ">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-foreground tracking-wide text-white ">
            HOMEGROWN INDIAN BRAND
          </h2>
        </div>
      </div>
      <div>
      <div className=" pt-[94px] pb-10 text-center text-[50px] font-bold  ">
            Over <span className="text-red-600">6 Million</span> Happy Coustumers
          </div>
            <h3 className=" bg-blck text-center text-[17px] font-bold text-gray-500 p-8 -mt-16">Join millions of fashion enthusiasts who trust us for their style needs. Quality, <br/>comfort, and style - that's our promise.</h3>

         </div>
    </section>
  );
};