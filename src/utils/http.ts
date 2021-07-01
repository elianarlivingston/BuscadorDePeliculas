import { params } from "."
import storage from "./storage"

interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: any;
    body?: any;
    params?: any;
}

const token = storage.get('token')

const defaultHeaders: any = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
}

const _fetch = (_url: string, options: RequestOptions = {}): Promise<any> => {
    const { headers: _headers = {}, params: _params = {}, method = 'GET', body: _body = {} } = options

    const headers = { ...defaultHeaders, ..._headers }
    const url = params.setParams(_url, _params) || ''
    const body = JSON.stringify(_body)

    const OPTIONS: any = { method, headers }

    if(Object.keys(_body).length !== 0) {
        OPTIONS.body = body
    }

    return fetch(url, OPTIONS)
            .then(async (res) => {
                const data = await res.json()
                if(!res.ok) throw Error('Response ok in false')
                return data
            })
            .catch(error => {
                console.error(error)
                window.alert('Ocurrió un error :(')
            })
}

export default {
    get: (url: string, options: RequestOptions = {}): Promise<any> => {
        return _fetch(url, { ...options, method: 'GET' })
    },
    post: (url: string, options: RequestOptions = {}): Promise<any> => {
        return _fetch(url, { ...options, method: 'POST' })
    },
    put: (url: string, options: RequestOptions = {}): Promise<any> => {
        return _fetch(url, { ...options, method: 'PUT' })
    },
    delete: (url: string, options: RequestOptions = {}): Promise<any> => {
        return _fetch(url, { ...options, method: 'DELETE' })
    }
}