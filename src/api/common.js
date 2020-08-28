import server from '../utils/request'

export function getVideo(data) {
    return server({
        method: 'post',
        url: '/api/video/list',
        data
    })
}

export function getMoveList(data) {
    return server({
        method: 'get',
        url: '/api/movetype/list',
        params: data
    })
}

export function getFilm(data) {
    return server({
        method: 'get',
        url: '',
        param: data
    })
}

export function getTV(data) {
    return server({
        method: 'get',
        url: '/api/tv/lisst',
        param: data
    })
}

export function getOne(data) {
    return server({
        method: 'get',
        url: '/api/one',
        params: data
    })
}

export function getNavList(data) {
    return server({
        method: 'get',
        url: '/api/navList',
        params: data
    })
}