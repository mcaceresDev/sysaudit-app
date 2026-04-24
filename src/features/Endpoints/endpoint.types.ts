// AUTH
export interface EndpointAuthConfig {
  type: string | null
  header_name: string | null
  token_prefix: string | null
}

// PARAMETER
export interface EndpointParameter {
  id: number
  name: string
  in: "query" | "path" | "header"
  type: string
  required: boolean
  description?: string | null
}

// RESPONSE
export interface EndpointResponse {
  id: number
  status_code: number
  type: "json" | "xml" | "text" | "html"
  description?: string | null
  example?: unknown
}

// BODY
export type EndpointBodyType =
  | "json"
  | "form-data"
  | "x-www-form-urlencoded"

export interface EndpointBody {
  type: EndpointBodyType | null
  schema?: unknown | null
  example?: unknown | null
}

// MAIN DETAIL
export interface EndpointDetail {
  id: number
  name: string
  method: string
  path: string
  description?: string | null
  protocol_type: string
  auth_type: string

  auth_config: EndpointAuthConfig | null

  parameters: EndpointParameter[]
  responses: EndpointResponse[]

  body: EndpointBody | null
}