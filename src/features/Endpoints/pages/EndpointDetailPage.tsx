import EndpointHeader from "../components/EndpointHeader"
import AuthConfigSection from "../components/AuthConfigSection"
import ParametersSection from "../components/ParametersSection"
import ResponseSection from "../components/ResponseSection"

const EndpointDetailPage = () => {
    return (
        <div className='rounded bg-light border'>
            <EndpointHeader />
            <AuthConfigSection />

            <div className="row">
                <div className="col-6">
                    <ParametersSection />
                </div>
                <div className="col-6">
                    <ResponseSection />
                </div>
            </div>
        </div>
    )
}

export default EndpointDetailPage