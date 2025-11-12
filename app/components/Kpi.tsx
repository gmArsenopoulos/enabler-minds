import { Card, CardContent } from "../../components/ui/card"

interface KpiProps {
  title: string
  value: string | number
  valueClassName?: string
  subtitle?: any
}

const Kpi = ({ title, value, valueClassName, subtitle }: KpiProps) => {
  return (
    <Card>
      <CardContent >
        <h3 className='text-sm'>{title}</h3>
        <p className={`${valueClassName} text-3xl mt-1 ${subtitle && 'mb-3'}`}>{value}</p>
        {subtitle}
      </CardContent>
    </Card>
  )
}

export default Kpi