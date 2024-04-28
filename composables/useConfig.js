import locales from "~/pageConfigs/locales";

export const useConfig = () => {
    const route = useRoute();
    const { params } = route;

    const getLanguage = computed(() => {
        return params.language || "tr"
    })

    const languageBasedConfigs = computed(() => {
        return {
            settings: locales[getLanguage.value].settings || {}
        }
    })


    return {
        languageBasedConfigs,
        getLanguage
    }
}
