import react,{FC } from "react"

interface ContainerProps {
  children:React.ReactNode
}

const Wrapper:FC<ContainerProps> = ({children}) => {
  return(
    <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 ">
      {children}
    </div>
  )
}
export default Wrapper