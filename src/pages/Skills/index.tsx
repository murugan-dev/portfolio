
import Box from "./Box"


import {techStack} from "../../utils/constants.ts";
const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-10 text-white">
        <h1 className="text-3xl  w-50 lg:text-4xl xl:text-6xl lg:w-full font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 text-center ">
          EXPERTISE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((item) => (
            <Box
              key={item.techName}
              techName={item.techName}
              logo={item.logo}
              color={item.color}
            />
          ))}
        </div>
    </div>
  )
}

export default Skills