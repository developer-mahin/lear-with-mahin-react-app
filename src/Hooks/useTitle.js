import { useEffect } from "react"

const useTitle = (title)=>{
    useEffect(()=>{
        document.title = (`${title} - Learn With Mahin`)
    },[title])
}

export default useTitle;