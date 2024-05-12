import {serviceRequest} from "~/server/_services/service";
export default defineEventHandler(async (event) => {
    const { page, size }  = getQuery(event);
    let response = await serviceRequest("get-songs", {
        query: {
            page,
            size
        }
    })
    response.content = response.content?.map((item: { path: any; lyrics_id: any; }) => ({...item, path: `${item.path}-${item.lyrics_id}`}))
    return response;
})
