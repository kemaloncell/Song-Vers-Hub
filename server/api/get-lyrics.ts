import {serviceRequest} from "~/server/_services/service";


export default defineEventHandler(async (event) => {
    const { path }  = getQuery(event);

    if(!path?.includes('-')) return {}

    const params = path.split('-');
    const id = params.pop();

    return serviceRequest("get-lyrics", {
        query: {
            id,
        }
    })
})
