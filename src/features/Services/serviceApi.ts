import { request } from "../../services/api/axiosClient";
import type { Service, ServiceDetail } from "./service.types";

//GET DETAILS
export const fetchServiceDetailRequest = async (id:number) => {
    return await request<ServiceDetail>({
        url: `/services/${id}/details`
    })
}