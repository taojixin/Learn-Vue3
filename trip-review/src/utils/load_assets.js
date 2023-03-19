export const getAssetURL = (img) => {
    return new URL(`../assets/img/${img}`, import.meta.url).href
}