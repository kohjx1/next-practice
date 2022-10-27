import { useRouter } from "next/router"

function ClientProjectsPage() {
  const router = useRouter()
  function loadprojecthandler() {
    //to navigate to some other link/page. Use push if need to navigate back, else use replace to prevent backwards navigation
    router.replace("/clients/glenn/projecta")
  }

  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadprojecthandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage
