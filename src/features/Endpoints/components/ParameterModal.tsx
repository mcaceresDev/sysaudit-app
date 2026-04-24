// ParameterModal.tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { parameterSchema } from "../schemas/parameter.schema"
import { useAppDispatch } from "../../../app/hooks"
import { createParameter } from "../parameterSlice"
import { showAlert } from "../../../shared/alerts/alert.service"

type Props = {
  endpointId: number
  onClose: () => void
}

export const ParameterModal = ({ endpointId, onClose }: Props) => {
  const dispatch = useAppDispatch()
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(parameterSchema),
    defaultValues: {
      in: "query",
      type: "string",
      required: false,
      endpoint_id: endpointId
    }
  })

  const onSubmit = async (data: any) => {
    try {
      await dispatch(createParameter(data)).unwrap()
      showAlert("Parámetro creado")
      onClose()
    } catch (e: any) {
      showAlert(e.message || "Error", "error")
    }
  }

  return (
    <div className="modal show fade d-block" style={{ background: "#00000066" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5>Nuevo Parámetro</h5>
          </div>

          <div className="modal-body">

            <input placeholder="Nombre" className="form-control mb-2" {...register("name")} />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}

            <select className="form-select mb-2" {...register("in")}>
              <option value="query">Query</option>
              <option value="path">Path</option>
              <option value="header">Header</option>
            </select>

            <select className="form-select mb-2" {...register("type")}>
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
            </select>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" {...register("required")} />
              <label className="form-check-label">Requerido</label>
            </div>

            <textarea placeholder="Descripción" className="form-control mt-2" {...register("description")} />

          </div>

          <div className="modal-footer">
            <button className="btn btn-sm btn-secondary" onClick={onClose}>Cancelar</button>
            <button className="btn btn-sm btn-outline-primary" onClick={handleSubmit(onSubmit)}>Guardar</button>
          </div>

        </div>
      </div>
    </div>
  )
}