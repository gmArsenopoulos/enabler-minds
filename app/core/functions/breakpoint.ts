import { useEffect, useState } from "react";

export const belowBreakPoint = (maxWidth:number)=>{
const [isBelow, setIsBelow] = useState(
    typeof window !== 'undefined' ? window.innerWidth < maxWidth : false
  );

  useEffect(() => {
    const handleResize = () => setIsBelow(window.innerWidth < maxWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [maxWidth]);

  return isBelow;
}