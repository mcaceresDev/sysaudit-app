import { Container, Database, DatabaseZap, Link, Server } from "lucide-react"
import type { ServiceDetail } from "../service.types"

const InfrastructureSection = ({ environments }: any) => {
    return (
        <div className="m-3 p-3 bg-white border rounded">
            <h3>Infraestructura</h3>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                <h5>Ambientes: {environments.length}</h5>
                <button className="btn btn-sm btn-outline-primary">Agregar nuevo</button>
            </div>

            <div className="row g-3">
                {
                    environments.length > 0 ?
                        environments.map((env:any, id:number) => (
                            <div className="col-4 border rounded mt-3 py-3" key={id}>
                                <p><span className='text-primary fw-bold'><Container /> Ambiente:</span> {env.name}</p>
                                <p><span className='text-primary fw-bold'><Link /> Ruta base:</span> {env.base_url}</p>
                                <p><span className='text-primary fw-bold'><Database /> Motor BD:</span> {env.db_engine}</p>
                                <p><span className='text-primary fw-bold'><DatabaseZap /> Host BD:</span> {env.server_hostname}</p>
                                <p><span className='text-primary fw-bold'><Server /> Servidor:</span> {env.db_host}</p>
                                <hr />
                                <div className='d-flex'>
                                    <button className="btn btn-sm btn-outline-primary">Editar</button>
                                </div>
                            </div>
                        ))
                        :
                        <div className="col-12 text-center">NO HAY AMBIENTES DISPONIBLES</div>
                }
            </div>

        </div>
    )
}

export default InfrastructureSection