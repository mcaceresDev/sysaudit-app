import React from 'react'
import { CodeBlock } from '../../../components/CodeBlockFormater'

const ResponseSection = () => {

    const codeExample = {
        "name": "John",
        "lastname": "Doe",
        "City": "Managua",
        "Job": "Analist"
    }

    const xmlExample = `
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <RespuestaSMSResponse xmlns="http://tempuri.org/">
      <RespuestaSMSResult>
        <codigoEstado>int</codigoEstado>
        <MensajeRespuesta>string</MensajeRespuesta>
        <lista>
          <clListaRespuestas>
            <codigo>int</codigo>
            <remitente>string</remitente>
            <destinatario>string</destinatario>
            <mensaje>string</mensaje>
            <fechaIngreso>dateTime</fechaIngreso>
          </clListaRespuestas>
          <clListaRespuestas>
            <codigo>int</codigo>
            <remitente>string</remitente>
            <destinatario>string</destinatario>
            <mensaje>string</mensaje>
            <fechaIngreso>dateTime</fechaIngreso>
          </clListaRespuestas>
        </lista>
      </RespuestaSMSResult>
    </RespuestaSMSResponse>
  </soap:Body>
</soap:Envelope>`
    return (
        <div className="p-3 m-3 bg-white border rounded">
            <div className="d-flex justify-content-between align-items-center">
                <h4>Respuestas</h4>
                <button className="btn btn-sm btn-outline-primary">Agregar nueva</button>
            </div>
            <hr />

            <p>Acá se muestra una lista de respuestas esperadas. Estas servirán de referencia cuando realices pruebas</p>

            <div className='border rounded p-3 bg-success-subtle mb-3'>
                <p>Ejemplo de respuesta exitosa</p>

                <CodeBlock type={"json"} content={codeExample} />
            </div>
            
            <div className='border rounded p-3 bg-success-subtle'>
                <p>Ejemplo de respuesta exitosa xml</p>

                <CodeBlock type={"xml"} content={xmlExample} />
            </div>

        </div>
    )
}

export default ResponseSection