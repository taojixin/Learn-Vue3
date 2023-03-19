import hyRequest from '../request/index'

export function getDetailInfos(houseId) {
    return hyRequest.get({
        url: '/detail/infos',
        params: {
            houseId
        }
    })
}