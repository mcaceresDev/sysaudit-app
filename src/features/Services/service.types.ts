export interface Service {
    id?: number
    project_id: number
    name: string
    base_path: string
    protocol_type?: 'rest' | 'soap' | 'graphql' | null
    auth_type?: 'none' | 'basic' | 'bearer' | 'api_key' | 'oauth2' | null
}

export interface ServiceDetail {
    id: number
    name: string
    base_path: string
    protocol_type: 'rest' | 'soap' | 'graphql' | null
    auth_type: 'none' | 'basic' | 'bearer' | 'api_key' | 'oauth2' | null
    environments:
    {
        name: string
        db_host: string
        base_url: string
        db_engine: string
        server_hostname: string
    }[]
    ,
    "endpoints":
    {
        id: number,
        path: string,
        method: string
    }[]
}