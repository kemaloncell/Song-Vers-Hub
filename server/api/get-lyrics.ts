import {serviceRequest} from "~/server/_services/service";


export default defineEventHandler(async (event) => {
    const { path }  = getQuery(event);
    // @ts-ignore
    if(!path?.includes('-')) return {}
    // @ts-ignore
    const params = path.split('-');
    const id = params.pop();
    return serviceRequest("get-lyrics", {
        query: {
            id,
        }
    })
})
