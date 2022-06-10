export type HttpMethod = 'post' | 'get' | 'put' | 'delete'
export enum HttpStatusCode {
    OK = 200,
    NO_CONTENT = 204,
    CREATE = 201,
    BAD_REQUEST = 400
}

export type HttpRequest = {
    url: string;
    method: HttpMethod;
    data?:any;
    headers? : any;
}

export type HttpResponse<T = any> = {
    statusCode: HttpStatusCode;
    headers?: any,
    data?: T;
    error?: T
}

export type HttpClient<R = any> = {
    request: (option: HttpRequest) => Promise<HttpResponse<R>>;
    get: (
        path:string,
        data?:any,
        option?: HttpRequest
    ) => Promise<HttpResponse<R>>;
    
    put: (
        path:string,
        data?:any,
        option?: HttpRequest
    ) => Promise<HttpResponse<R>>;
    
    post: (
        path:string,
        data?:any,
        option?: HttpRequest
    ) => Promise<HttpResponse<R>>;
    
    delete: (
        path:string,
        data?:any,
        option?: HttpRequest
    ) => Promise<HttpResponse<R>>;
    
}