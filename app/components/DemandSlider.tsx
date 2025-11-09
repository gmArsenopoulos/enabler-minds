import { ChangeEvent, useState } from 'react';

import Slider from '@mui/material/Slider';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

const DemandSlider = () => {
  const [demand, setDemand] = useState(50);

  const valueText = (value: number) => `${value}%`;

  const onSliderChange = (e: Event, value: number) => setDemand(value);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setDemand(+e.target.value);

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor='top'
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
      >
        <div className='relative flex gap-10 py-3 px-10 text-black dark:text-white items-center justify-center border-b dark:bg-gray-900  dark:border-gray-600'>
          <h3 className='inline'>Demand</h3>
          <Slider
            onChange={onSliderChange}
            aria-label="Demand"
            defaultValue={50}
            value={demand}
            getAriaValueText={valueText}
            valueLabelDisplay="off"
            shiftStep={10}
            step={1}
            marks
            min={-50}
            max={100}
          />
          <div className='flex items-center p-2 dark:bg-gray-800 border border-gray-950 dark:border-gray-500 rounded-lg'>
            <input onChange={onInputChange} type="number" name="demand" id="demand" value={demand} min={-50} max={100} className='text-center' />
          <p>%</p>
          </div>
          <CloseIcon onClick={() => setOpenDrawer(!openDrawer)} className='cursor-pointer' />
        </div>
      </Drawer>
      <button onClick={() => setOpenDrawer(!openDrawer)} className='absolute top-0 right-9 p-1 cursor-pointer text-sm bg-white dark:bg-gray-900 border border-t-0 dark:border-gray-600 rounded-b-sm hover:bg-gray-7zzz00 transition-all'>Change demand </button>
    </>
  )
}

export default DemandSlider