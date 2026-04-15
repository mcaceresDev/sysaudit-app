import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const EndpointSection = ({ endpoints }: any) => {

    const navigate = useNavigate()

    const selectMethodClassTag = (method:any) => {

        if (method === "GET") {
            return "text-success"
        }
        if (method === "POST") {
            return "text-primary"
        }
        return method === "DELETE" ? "text-danger" : "text-warning"
    }

    return (
        <div className="m-3 p-3 bg-white border rounded">
            <div className='d-flex justify-content-between align-items-center'>
                <h4>Endpoints: {endpoints.length}</h4>
                <button className="btn btn-sm btn-outline-primary">Agregar nuevo</button>
            </div>
            <hr />

            {
                endpoints.length > 0 ?
                    endpoints.map((endpoint: any) => (
                        <div className="p-2 my-3 rounded border d-flex justify-content-between align-items-center" key={endpoint.id}>
                            <div className='d-flex'>
                                <div className='border-end me-3' style={{ width: "80px" }}>
                                    <span className={selectMethodClassTag(endpoint.method)}>{endpoint.method}</span>
                                </div>
                                <span>{endpoint.path}</span>
                            </div>
                            <button className="btn btn-sm btn-outline-primary" onClick={()=> navigate(`/endpoint/${endpoint.id}`)}> <ArrowUpRight size={16} /> </button>
                        </div>
                    ))
                    :
                    <div className="p-2 my-3 rounded border d-flex justify-content-center align-items-center">
                        <h5>NO HAY ENDPOINTS ASOCIADOS A ESTE SERVICIO</h5>
                    </div>
            }
        </div>
    )
}

export default EndpointSection