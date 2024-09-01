import { ReactNode } from "react"


type Props = {
    children: ReactNode
}


export default function Container({children}:Props) {
  return (
    <div className="relative flex flex-col h-max overflow-hidden">
        {children}
    </div>  
  )
}