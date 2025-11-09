interface KpiProps {
  title: string
  value: string
  valueClassName?:string
  subtitle?: string
}

const Kpi = ({ title, value,valueClassName, subtitle }: KpiProps) => {
  return (
    <div className='p-3 dark:text-white dark:bg-gray-900 dark:border-gray-600 border rounded-md'>
      <h3 className='text-sm'>{title}</h3>
      <p className={`${valueClassName} text-4xl mt-1 ${subtitle && 'mb-3'}`}>{value}</p>
      {subtitle && (
        <p>
          {subtitle}
        </p>
      )}
    </div>
    // <Card classes={'dark:border-gray-600 border dark:bg-gray-900'}>
    //   <CardContent classes={'text-black dark:text-white items-center justify-center dark:bg-gray-900'}>
    //     <h3>{title}</h3>
    //     <p>{value}</p>
    //     {subtitle && (
    //       <p>
    //         {subtitle}
    //       </p>
    //     )}
    //   </CardContent>
    // </Card>
  )
}

export default Kpi