
const AuthConfigSection = () => {
    return (
        <div className="p-3 m-3 bg-white border rounded">
            <div className='d-flex justify-content-between align-items-center'>
                <h4>Configuración de Autenticación</h4>
                <div>
                    <button className="mx-2 btn btn-sm btn-outline-primary">Editar configuración</button>
                </div>
            </div>
            <hr />

            <form action="">
                <div className="form-group mb-3">
                    <label htmlFor="" className="form-label">Tipo de Autenticación</label>
                    <select name="" id="" className="form-select form-select-sm">
                        <option value="">Basic</option>
                        <option value="">Token</option>
                        <option value="">Api Key</option>
                        <option value="">Oauth2</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="" className="form-label">Header</label>
                    <select name="" id="" className="form-select form-select-sm">
                        <option value="">Authorization</option>
                        <option value="">X-API-KEY</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="" className="form-label">Prefijo de token</label>
                    <select name="" id="" className="form-select form-select-sm">
                        <option value="">Bearer</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default AuthConfigSection