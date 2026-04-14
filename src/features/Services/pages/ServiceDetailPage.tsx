import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchServiceDetails } from "../serviceDetailSlice"
import { selectServiceDetail, selectServiceDetailLoading } from "../serviceDetails.selectors"
import ServiceHeader from "../components/ServiceHeader"
import InfrastructureSection from "../components/InfrastructureSection"
import EndpointSection from "../components/EndpointSection"

export const ServiceDetailPage = () => {

    const { id } = useParams()
    const dispatch = useAppDispatch()

    const service = useAppSelector(selectServiceDetail)
    const loading = useAppSelector(selectServiceDetailLoading)

    useEffect(() => {
        if (id) dispatch(fetchServiceDetails(Number(id)))
    }, [id, dispatch])

    if (loading) return <p>Cargando...</p> 
    if (!service) return <p>No encontrado</p> 

    return (
        <div className="rounded bg-light border">
            <ServiceHeader service={service}/>

            <InfrastructureSection environments={service.environments} />

            <EndpointSection endpoints={service.endpoints}/>

        </div>
    )
}