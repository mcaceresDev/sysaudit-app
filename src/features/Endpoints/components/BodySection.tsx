// BodySection.tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bodySchema } from "../schemas/body.schema"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { upsertBody } from "../bodySlice"

const BodySection = () => {

    const endpoint = useAppSelector(state => state.endpointDetail.data)

  if (!endpoint) return <div><h3 className="text-center">Endpoint no encontrado</h3></div>

  const body = endpoint.body

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    watch
  } = useForm({
    resolver: zodResolver(bodySchema),
    defaultValues: {
      type: endpoint.body?.type || "json",
      example: JSON.stringify(endpoint.body?.example || {}, null, 2),
      endpoint_id: endpoint.id
    }
  })

  const type = watch("type")

  const onSubmit = async (data: any) => {
    let parsedExample = data.example

    if (data.type === "json") {
      try {
        parsedExample = JSON.parse(data.example)
      } catch {
        alert("JSON inválido")
        return
      }
    }

    await dispatch(upsertBody({
      endpointId: endpoint.id,
      data: {
        type: data.type,
        example: parsedExample
      }
    }))
  }

  if (!body) {
    
    return <h4>No hay body configurado para este Endpoint</h4>
}

  return (
    <div className="card p-3">

      <div className="mb-2">
        <label>Tipo</label>
        <select className="form-select" {...register("type")}>
          <option value="json">JSON</option>
          <option value="form-data">Form Data</option>
          <option value="x-www-form-urlencoded">URL Encoded</option>
        </select>
      </div>

      {/* JSON EDITOR */}
      {type === "json" && (
        <textarea
          className="form-control"
          rows={10}
          {...register("example")}
        />
      )}

      {/* FUTURO: FORM DATA */}
      {type === "form-data" && (
        <p className="text-muted">Editor form-data próximamente</p>
      )}

      <button className="btn btn-primary mt-3" onClick={handleSubmit(onSubmit)}>
        Guardar Body
      </button>

    </div>
  )
}

export default BodySection