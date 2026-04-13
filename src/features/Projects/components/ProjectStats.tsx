import { Cloudy, Link, Users } from "lucide-react"

export const ProjectStats = ({ stats }: any) => {
  return (
    <div className="m-3 p-3 d-flex justify-content-between gap-3 bg-white border rounded">

      <div><span className="text-primary"><Cloudy /></span> {stats.services} Servicios</div>
      <div><span className="text-primary"><Link /></span> {stats.endpoints} Endpoints</div>
      <div><span className="text-primary"><Users /></span> {stats.members} Miembros</div>

    </div>
  )
}