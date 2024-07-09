import { Button } from "antd"
import { useState } from "react"

const CompanyPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      CompanyPage
      <Button onClick={() => setCount(count + 1)}>
        {count}
      </Button>
    </div>
  )
}

export default CompanyPage