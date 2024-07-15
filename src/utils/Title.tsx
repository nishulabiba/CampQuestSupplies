import { Heading } from "../types/Types";

const Title = ({ heading, subHeading }: Heading) => {
    return (
      <div className="mx-auto md:w-[400px] text-center mt-8 px-6 pt-6 bg-gradient-to-r from-[#ffffff] to-[#e2e8f0] rounded-lg ">
        <p className="text-center text-[#1d667c] mb-2 text-sm font-semibold w-full">
          ----------- {subHeading} ------------
        </p>
        <h2 className="text-4xl text-[#1f2937] font-extrabold uppercase border-y-4 border-[#6487c0] py-4">
          {heading}
        </h2>
        <div className="mt-4">
          <div className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-[#f3f4f6] to-[#e2e8f0] opacity-70 blur-sm -translate-x-4 -translate-y-4 rounded-full"></span>
            <span className="relative text-[#1f2937] text-xs font-medium">Find Your Next Adventure</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Title;
  