import { Rocket } from "lucide-react"
import { RequestTabs } from "../components/RequestTabs"

const TestPage = () => {
    return (
        <div>
            <h2>Nombre del endpoint</h2>
            <hr />

            <div className="my-3">
                <select name="" id="" className="form-select form-select-sm" style={{maxWidth: "250px"}}>
                    <option value="">Selecciona un ambiente</option>
                    <option value="">Desarrollo</option>
                    <option value="">Producción</option>
                </select>
            </div>

            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex align-items-center my-3 border rounded p-2 flex-fill">
                    <div className="border-end mx-2 fw-bold text-success" style={{width:"50px"}}>GET</div>
                    <span>/all</span>
                </div>
                <button className="btn btn-sm btn-outline-primary">Enviar <Rocket size={16} /></button>
            </div>

            <div className="my-3 d-flex ">
                {/* <div className='badge bg-success'>GET</div>
                <span>/analytics/logs</span> */}
                <div style={{}} className=""></div>
            </div>

            <RequestTabs />

            <div className="my-3">
                <h4>Respuesta</h4>
                <hr />

                <div className="p-3 border rounded">
                    bloque de respuesta
                </div>
            </div>
        </div>
    )
}

export default TestPage