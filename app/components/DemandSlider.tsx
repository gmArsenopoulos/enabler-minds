import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Slider } from '@/components/ui/slider'
import { useEffect, useRef, useState } from 'react';
import { XIcon } from 'lucide-react';
import { useQueryClient } from '@tanstack/react-query';


const DemandSlider = () => {
  const queryClient = useQueryClient();
  const [demand, setDemand] = useState([50]);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const onSliderChange = (value: number[]) => {
    setDemand(value);

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      const percent = value[0];
      queryClient.setQueryData(["demand"], percent);
    }, 500);
  }

  useEffect(() => {
      const demandPercent = queryClient.getQueryData(["demand"]);
      if (demandPercent !== undefined) console.log("🧭 Cached demand value:", demandPercent);
    }, [demand]);



  return (

    <Drawer>
      <DrawerTrigger asChild>
        <button className=' bg-accent border border-t-0 ml-4 cursor-pointer p-2 rounded-b-lg fixed z-10 hover:scale-110 transition-all'>Change demand</button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerClose asChild>
            <XIcon className='cursor-pointer' />
            {/* <Button variant="outline">Cancel</Button> */}
          </DrawerClose>
          <DrawerTitle>Change customer demand</DrawerTitle>
          <DrawerDescription>Current demand percentage: {`${demand[0]}%`}</DrawerDescription>
        </DrawerHeader>
        <div className='w-full flex justify-center items-center gap-10 pb-5 px-10 '>
          <h3>Demand</h3>
          <Slider
            onValueChange={onSliderChange}
            defaultValue={demand}
            aria-label="Demand"
            step={1}
            min={-50}
            max={100}
          />

        </div>
      </DrawerContent>
    </Drawer>

  )
}

export default DemandSlider