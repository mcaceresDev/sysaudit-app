import { useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import { ParameterModal } from "./ParameterModal"
import { CircleCheck } from "lucide-react"

const ParametersSection = () => {
  const endpoint = useAppSelector(s => s.endpointDetail.data)
  const creating = useAppSelector(s => s.parameter.creating)
  const [open, setOpen] = useState(false)

  if (!endpoint) return null

  return (
    <div>

      <div className="d-flex justify-content-between mb-3">
        <h5>Parámetros</h5>

        {/* <button className="btn btn-sm btn-outline-primary" disabled={creating}>
          {creating ? "Guardando..." : "Agregar"}
        </button> */}
        <button onClick={() => setOpen(true)} className="btn btn-sm btn-outline-primary">
          Agregar
        </button>
      </div>

      {endpoint.parameters.length === 0 ? (
        <p className="text-muted">No hay parámetros configurados</p>
      ) : (
        
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Ubicación</th>
                <th>Tipo</th>
                <th>Requerido</th>
              </tr>
            </thead>

            <tbody>
              {endpoint.parameters.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.in}</td>
                  <td>{p.type}</td>
                  <td>{p.required ? <span className="fw-bold text-danger">SI</span> : <span className="fw-bold text-success">NO</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {open && (
        <ParameterModal
          endpointId={endpoint.id}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}

export default ParametersSection