'use client'
import { useState } from 'react';

const Tabs = () => {
    const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <></>
    // <TabContext value={value}>
    //     <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:'var(--dark:color-gray-600)' }}>
    //       <TabList onChange={handleChange} aria-label="stock and demand overview">
    //         <Tab label="Graph overview" value="1" />
    //         <Tab label="Orders" value="2" />
    //       </TabList>
    //     </Box>
    //     <TabPanel value="1">Item One</TabPanel>
    //     <TabPanel value="2">Item Two</TabPanel>
    //   </TabContext>
  )
}

export default Tabs