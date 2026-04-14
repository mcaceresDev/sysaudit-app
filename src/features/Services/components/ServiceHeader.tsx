import { Box, Link, Shield } from "lucide-react"
import type { Service } from "../service.types"

const ServiceHeader = ({ service }: { service: Partial<Service> }) => {
    return (
        <>
            <div className="m-3 p-3 bg-white border rounded">
                <div className='d-flex justify-content-between align-items-center'>
                    <h2>{service.name}</h2>
                    <button className="btn btn-sm btn-outline-primary">Editar Servicio</button>
                </div>
                <hr />

                <p>Descripcion breve del servicio web</p>

            </div>
            <div className="m-3 p-3 d-flex justify-content-between gap-3 bg-white border rounded">

                <div><span className="text-primary"><Link /></span> {service.base_path}</div>
                <div><span className="text-primary"><Box /></span> {service.protocol_type}</div>
                <div><span className="text-primary"><Shield /></span> {service.auth_type}</div>
            </div>
        </>
    )
}

export default ServiceHeader