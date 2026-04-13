import { Box, Link } from "lucide-react"

export const ProjectServicesList = ({ services }: any) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {services.map((s: any) => (
          <div
            key={s.id}
            className="list-group-item"
          >
            <div className="w-100 d-flex justify-content-between">
              <strong>{s.name}</strong>
              <button className="btn btn-sm btn-outline-primary">Administrar</button>
            </div>
            <hr />

            <div>
              <span className="text-primary"><Box /> </span>
                {s.protocol_type}
            </div>
            <div>
              <span className="text-primary"><Link /> </span>
                {s.endpoints} endpoints
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}