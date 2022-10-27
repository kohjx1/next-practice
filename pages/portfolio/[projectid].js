import { useRouter } from "next/router"

function PortfolioPorjectPage() {
  const router = useRouter()

  console.log(router.pathname)
  console.log(router.query.projectid)

  return (
    <div>
      <h1>The Portfolio Project Page {router.query.projectid}</h1>
    </div>
  )
}

export default PortfolioPorjectPage
