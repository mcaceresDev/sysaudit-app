import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
// COMPONENTS
import EndpointHeader from "../components/EndpointHeader"
import AuthConfigSection from "../components/AuthConfigSection"
import ParametersSection from "../components/ParametersSection"
import ResponseSection from "../components/ResponseSection"
import { Tabs } from "../components/Tabs"
// SLICES
import { fetchEndpointDetail } from "../endpointDetailSlice"
import { createParameter } from "../parameterSlice"

const EndpointDetailPage = () => {

    const { id } = useParams()
    const dispatch = useAppDispatch()

    const { data, loading } = useAppSelector(
        (s) => s.endpointDetail
    )

    const createParam = useAppSelector(
        (s) => s.parameter.creating
    )

    useEffect(() => {
        if (id) dispatch(fetchEndpointDetail(Number(id)))
    }, [id])

    if (loading) return <p>Cargando...</p>
    if (!data) return <p>No encontrado</p>

    const handleCreateParam = () => {
    dispatch(
      createParameter({
        endpoint_id: data.id,
        name: "test",
        in: "query",
        type: "string"
      })
    )
  }

    return (
        <div className='rounded bg-light border'>
            <EndpointHeader endpoint={data} />

            {/* <AuthConfigSection />

            <div className="row">
                <div className="col-6">
                    <ParametersSection />
                </div>
                <div className="col-6">
                    <ResponseSection />
                </div>
            </div> */}

            <div className="p-3 m-3 bg-white border rounded">
                <Tabs
                    tabs={[
                        // { key: "info", label: "Info", content: <InfoTab /> },
                        { key: "auth", label: "Auth", content: <AuthConfigSection /> },
                        { key: "params", label: "Params", content: <ParametersSection /> },
                        { key: "responses", label: "Responses", content: <ResponseSection /> }
                    ]}
                />
            </div>
        </div>
    )
}

export default EndpointDetailPage