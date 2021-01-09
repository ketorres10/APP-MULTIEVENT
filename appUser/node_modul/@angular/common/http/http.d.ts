/**
 * @license Angular v9.1.9
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare const HTTP_INTERCEPTORS: InjectionToken<HttpInterceptor[]>;

/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
export declare abstract class HttpBackend implements HttpHandler {
    abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
}

/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * @publicApi
 */
export declare class HttpClient {
    private handler;
    constructor(handler: HttpHandler);
    /**
     * Sends an `HTTPRequest` and returns a stream of `HTTPEvents`.
     *
     * @return An `Observable` of the response, with the response body as a stream of `HTTPEvents`.
     */
    request<R>(req: HttpRequest<any>): Observable<HttpEvent<R>>;
    /**
     * Constructs a request that interprets the body as an `ArrayBuffer` and returns the response in
     * an `ArrayBuffer`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a request that interprets the body as a blob and returns
     * the response as a blob.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type `Blob`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a request that interprets the body as a text string and
     * returns a string value.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a request that interprets the body as an `ArrayBuffer` and returns the
     * the full event stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as an array of `HTTPEvents` for
     *     the
     * request.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a request that interprets the body as a `Blob` and returns
     * the full event stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of of all `HttpEvents` for the request,
     * with the response body of type `Blob`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a request which interprets the body as a text string and returns the full event
     * stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvents` for the reques,
     * with the response body of type string.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the  request.
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     *  with the response body of type `Object`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        reportProgress?: boolean;
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<any>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body of type `R`.
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        reportProgress?: boolean;
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<R>>;
    /**
     * Constructs a request which interprets the body as an `ArrayBuffer`
     * and returns the full `HTTPResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body as an `ArrayBuffer`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a request which interprets the body as a `Blob` and returns the full `HTTPResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `Blob`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a request which interprets the body as a text stream and returns the full
     * `HTTPResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the HTTP response, with the response body of type string.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns the full
     * `HTTPResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HTTPResponse`,
     * with the response body of type `Object`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        reportProgress?: boolean;
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns
     * the full `HTTPResponse` with the response body in the requested type.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return  An `Observable` of the full `HTTPResponse`, with the response body of type `R`.
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        reportProgress?: boolean;
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<R>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns the full
     * `HTTPResponse` as a JSON object.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `Object`.
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a request which interprets the body as a JSON object
     * with the response body of the requested type.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `R`.
     */
    request<R>(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<R>;
    /**
     * Constructs a request where response type and requested observable are not known statically.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the reuested response, wuth body of type `any`.
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        observe?: HttpObserve;
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer`
     *  and returns the response as an `ArrayBuffer`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return  An `Observable` of the response body as an `ArrayBuffer`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `DELETE` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response body as a `Blob`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `DELETE` request that interprets the body as a text string and returns
     * a string.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer`
     *  and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HTTPEvents` for the request,
     * with response body as an `ArrayBuffer`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a `Blob`
     *  and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all the `HTTPEvents` for the request, with the response body as a
     * `Blob`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a text string
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HTTPEvents` for the request, with the response
     *  body of type string.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HTTPEvents` for the request, with response body of
     * type `Object`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `DELETE`request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all the `HTTPEvents` for the request, with a response
     * body in the requested type.
     */
    delete<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer` and returns
     *  the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HTTPResponse`, with the response body as an `ArrayBuffer`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a `Blob` and returns the full
     * `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `Blob`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a text stream and
     *  returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HTTPResponse`, with the response body of type string.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `DELETE` request the interprets the body as a JSON object and returns
     * the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `Object`.
     *
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of the requested type.
     */
    delete<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a JSON object and
     * returns the response body as a JSON object.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type `Object`.
     */
    delete(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a DELETE request that interprets the body as a JSON object and returns
     * the response in a given type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with response body in the requested type.
     */
    delete<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and returns the
     * response in an `ArrayBuffer`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `GET` request that interprets the body as a `Blob`
     * and returns the response as a `Blob`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `GET` request that interprets the body as a text string
     * and returns the response as a string value.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and returns
     *  the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvents` for the request, with the response
     * body as an `ArrayBuffer`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `GET` request that interprets the body as a `Blob` and
     * returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `GET` request that interprets the body as a text string and returns
     * the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type `Object`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with a response body in the requested type.
     */
    get<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `GET` request that interprets the body as a `Blob` and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     *  with the response body as a `Blob`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `GET` request that interprets the body as a text stream and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body of type string.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HttpResponse`,
     * with the response body of type `Object`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HTTPResponse` for the request,
     * with a response body in the requested type.
     */
    get<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and
     * returns the response body as a JSON object.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     *
     * @return An `Observable` of the response body as a JSON object.
     */
    get(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and returns
     * the response body in a given type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with a response body in the requested type.
     */
    get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `HEAD` request that interprets the body as an `ArrayBuffer` and
     * returns the response as an `ArrayBuffer`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `HEAD` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return  An `Observable` of the response, with the response body as a `Blob`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `HEAD` request that interprets the body as a text string and returns the response
     * as a string value.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `HEAD` request that interprets the body as an  `ArrayBuffer`
     *  and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of tall `HttpEvents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a `Blob` and
     * returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as a `Blob`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a text string
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all HttpEvents for the request, with the response body of type
     *     string.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object
     * and returns the full HTTP event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HTTPEvents` for the request, with a response body of
     * type `Object`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object and
     * returns the full event stream.
     *
     * @return An `Observable` of all the `HTTPEvents` for the request
     * , with a response body in the requested type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     */
    head<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `HEAD` request that interprets the body as an `ArrayBuffer`
     *  and returns the full HTTP response.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a `Blob` and returns
     * the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as a blob.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `HEAD` request that interprets the body as text stream
     * and returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body of type string.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body of type `Object`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with a responmse body of the requested type.
     */
    head<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object and
     * returns the response body as a JSON object.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    head(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object and returns
     * the response in a given type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with a response body of the given type.
     */
    head<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `JSONP` request for the given URL and name of the callback parameter.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     * @return An `Observable` of the response object, with response body as an object.
     */
    jsonp(url: string, callbackParam: string): Observable<Object>;
    /**
     * Constructs a `JSONP` request for the given URL and name of the callback parameter.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     * You must install a suitable interceptor, such as one provided by `HttpClientJsonpModule`.
     * If no such interceptor is reached,
     * then the `JSONP` request can be rejected by the configured backend.
     *
     * @return An `Observable` of the response object, with response body in the requested type.
     */
    jsonp<T>(url: string, callbackParam: string): Observable<T>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as an
     * `ArrayBuffer` and returns the response as an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a text string and
     * returns a string value.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as an `ArrayBuffer`
     *  and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return  An `Observable` of all `HttpEvents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a `Blob` and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as a `Blob`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a text string
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPEvents` for the request,
     * with the response body of type string.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvents` for the request with the response
     * body of type `Object`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvents` for the request,
     * with a response body in the requested type.
     */
    options<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as an `ArrayBuffer`
     *  and returns the full HTTP response.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a `Blob`
     *  and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     *  with the response body as a `Blob`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as text stream
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     *  with the response body of type string.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body of type `Object`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object and
     * returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the requested type.
     */
    options<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object and returns the
     * response body as a JSON object.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    options(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object and returns the
     * response in a given type.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HTTPResponse`, with a response body of the given type.
     */
    options<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `PATCH` request that interprets the body as an `ArrayBuffer` and returns
     * the response as an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `PATCH` request that interprets the body as a `Blob` and returns the response
     * as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `PATCH` request that interprets the body as a text string and
     * returns the response as a string value.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with a response body of type string.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `PATCH` request that interprets the body as an `ArrayBuffer` and
     *  returns the the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a `Blob`
     *  and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents` for the request, with the
     * response body as `Blob`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a text string and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents`for the request, with a
     * response body of type string.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents` for the request,
     * with a response body of type `Object`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents` for the request,
     *  with a response body in the requested type.
     */
    patch<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `PATCH` request that interprets the body as an `ArrayBuffer`
     *  and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     *  with the response body as an `ArrayBuffer`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a `Blob` and returns the full
     * `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with the response body as a `Blob`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a text stream and returns the
     * full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with a response body of type string.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the requested type.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the given type.
     */
    patch<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object and
     * returns the response body as a JSON object.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    patch(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the response in a given type.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with a response body in the given type.
     */
    patch<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `POST` request that interprets the body as an `ArrayBuffer` and returns
     * an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `POST` request that interprets the body as a `Blob` and returns the
     * response as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `POST` request that interprets the body as a text string and
     * returns the response as a string value.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with a response body of type string.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `POST` request that interprets the body as an `ArrayBuffer` and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `POST` request that interprets the body as a `Blob`
     * and returns the response in an observable of the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request, with the response body as `Blob`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `POST` request that interprets the body as a text string and returns the full
     * event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of all `HttpEvents` for the request,
     * with a response body of type string.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a POST request that interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of all `HttpEvents` for the request,
     * with a response body of type `Object`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a POST request that interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with a response body in the requested type.
     */
    post<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a POST request that interprets the body as an `ArrayBuffer`
     *  and returns the full `HTTPresponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of the `HTTPResponse` for the request, with the response body as an
     *     `ArrayBuffer`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `POST` request that interprets the body as a `Blob` and returns the full
     * `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as a `Blob`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `POST` request that interprets the body as a text stream and returns
     * the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of the `HTTPResponse` for the request,
     * with a response body of type string.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `POST` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body of type
     * `Object`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `POST` request that interprets the body as a JSON object and returns the full
     * `HTTPResponse`.
     *
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body in the
     *     requested type.
     */
    post<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `POST` request that interprets the body as a
     * JSON object and returns the response body as a JSON object.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    post(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `POST` request that interprets the body as a JSON object
     * and returns an observable of the response.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of the `HTTPResponse` for the request, with a response body in the
     *     requested type.
     */
    post<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `PUT` request that interprets the body as an `ArrayBuffer` and returns the
     * response as an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `PUT` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `PUT` request that interprets the body as a text string and
     * returns the response as a string value.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with a response body of type string.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `PUT` request that interprets the body as an `ArrayBuffer` and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `PUT` request that interprets the body as a `Blob` and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as a `Blob`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `PUT` request that interprets the body as a text string and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all HttpEvents for the request, with a response body
     * of type string.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request, with a response body of
     * type `Object`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the
     * full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with a response body in the requested type.
     */
    put<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `PUT` request that interprets the body as an
     * `ArrayBuffer` and returns an observable of the full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with the response body as an
     *     `ArrayBuffer`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `PUT` request that interprets the body as a `Blob` and returns the
     * full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as a `Blob`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `PUT` request that interprets the body as a text stream and returns the
     * full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body of type
     *     string.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the full HTTP
     * response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body
     * of type 'Object`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the full HTTP
     * response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with a response body in the requested type.
     */
    put<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the response
     * body as a JSON object.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    put(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object
     * and returns an observable of the response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body in the
     *     requested type.
     */
    put<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpClient, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HttpClient>;
}

/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
export declare class HttpClientJsonpModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HttpClientJsonpModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HttpClientJsonpModule>;
}

/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
export declare class HttpClientModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HttpClientModule, never, [typeof HttpClientXsrfModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HttpClientModule>;
}

/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
export declare class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     */
    static disable(): ModuleWithProviders<HttpClientXsrfModule>;
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    static withOptions(options?: {
        cookieName?: string;
        headerName?: string;
    }): ModuleWithProviders<HttpClientXsrfModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HttpClientXsrfModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HttpClientXsrfModule>;
}

/**
 * A download progress event.
 *
 * @publicApi
 */
export declare interface HttpDownloadProgressEvent extends HttpProgressEvent {
    type: HttpEventType.DownloadProgress;
    /**
     * The partial response body as downloaded so far.
     *
     * Only present if the responseType was `text`.
     */
    partialText?: string;
}

/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
export declare class HttpErrorResponse extends HttpResponseBase implements Error {
    readonly name = "HttpErrorResponse";
    readonly message: string;
    readonly error: any | null;
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     */
    readonly ok = false;
    constructor(init: {
        error?: any;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
}

/**
 * Union type for all possible events on the response stream.
 *
 * Typed according to the expected type of the response.
 *
 * @publicApi
 */
export declare type HttpEvent<T> = HttpSentEvent | HttpHeaderResponse | HttpResponse<T> | HttpProgressEvent | HttpUserEvent<T>;

/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
export declare enum HttpEventType {
    /**
     * The request was sent out over the wire.
     */
    Sent = 0,
    /**
     * An upload progress event was received.
     */
    UploadProgress = 1,
    /**
     * The response status code and headers were received.
     */
    ResponseHeader = 2,
    /**
     * A download progress event was received.
     */
    DownloadProgress = 3,
    /**
     * The full response including the body was received.
     */
    Response = 4,
    /**
     * A custom event from an interceptor or a backend.
     */
    User = 5
}

/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
export declare abstract class HttpHandler {
    abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
}

/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
export declare class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    constructor(init?: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
    readonly type: HttpEventType.ResponseHeader;
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    clone(update?: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpHeaderResponse;
}


/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
export declare class HttpHeaders {
    /**
     * Internal map of lowercase header names to values.
     */
    private headers;
    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    private normalizedNames;
    /**
     * Complete the lazy initialization of this object (needed before reading).
     */
    private lazyInit;
    /**
     * Queued updates to be materialized the next initialization.
     */
    private lazyUpdate;
    /**  Constructs a new HTTP header object with the given values.*/
    constructor(headers?: string | {
        [name: string]: string | string[];
    });
    /**
     * Checks for existence of a given header.
     *
     * @param name The header name to check for existence.
     *
     * @returns True if the header exists, false otherwise.
     */
    has(name: string): boolean;
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */
    get(name: string): string | null;
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    keys(): string[];
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    getAll(name: string): string[] | null;
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name: string, value: string | string[]): HttpHeaders;
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or overide for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */
    set(name: string, value: string | string[]): HttpHeaders;
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */
    delete(name: string, value?: string | string[]): HttpHeaders;
    private maybeSetNormalizedName;
    private init;
    private copyFrom;
    private clone;
    private applyUpdate;
}

/**
 * Intercepts and handles an `HttpRequest` or `HttpResponse`.
 *
 * Most interceptors transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 * An interceptor may transform the
 * response event stream as well, by applying additional RxJS operators on the stream
 * returned by `next.handle()`.
 *
 * More rarely, an interceptor may handle the request entirely,
 * and compose a new event stream instead of invoking `next.handle()`. This is an
 * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
 *
 * It is also rare but valid for an interceptor to return multiple responses on the
 * event stream for a single request.
 *
 * @publicApi
 *
 * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
 *
 * @usageNotes
 *
 * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
 * only in your `AppModule`, and add the interceptors to the root application injector .
 * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
 * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the
 * interceptors provided in the root module.
 *
 */
export declare interface HttpInterceptor {
    /**
     * Identifies and handles a given HTTP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}

declare type HttpObserve = 'body' | 'events' | 'response';


/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * @publicApi
 **/
export declare interface HttpParameterCodec {
    encodeKey(key: string): string;
    encodeValue(value: string): string;
    decodeKey(key: string): string;
    decodeValue(value: string): string;
}

/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
export declare class HttpParams {
    private map;
    private encoder;
    private updates;
    private cloneFrom;
    constructor(options?: HttpParamsOptions);
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param: string): boolean;
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param: string): string | null;
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param: string): string[] | null;
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    keys(): string[];
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    append(param: string, value: string): HttpParams;
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    set(param: string, value: string): HttpParams;
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param: string, value?: string): HttpParams;
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    toString(): string;
    private clone;
    private init;
}

/**
 * Options used to construct an `HttpParams` instance.
 *
 * @publicApi
 */
declare interface HttpParamsOptions {
    /**
     * String representation of the HTTP parameters in URL-query-string format.
     * Mutually exclusive with `fromObject`.
     */
    fromString?: string;
    /** Object map of the HTTP parameters. Mutually exclusive with `fromString`. */
    fromObject?: {
        [param: string]: string | ReadonlyArray<string>;
    };
    /** Encoding codec used to parse and serialize the parameters. */
    encoder?: HttpParameterCodec;
}

/**
 * Base interface for progress events.
 *
 * @publicApi
 */
export declare interface HttpProgressEvent {
    /**
     * Progress event type is either upload or download.
     */
    type: HttpEventType.DownloadProgress | HttpEventType.UploadProgress;
    /**
     * Number of bytes uploaded or downloaded.
     */
    loaded: number;
    /**
     * Total number of bytes to upload or download. Depending on the request or
     * response, this may not be computable and thus may not be present.
     */
    total?: number;
}

/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
export declare class HttpRequest<T> {
    readonly url: string;
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     */
    readonly body: T | null;
    /**
     * Outgoing headers for this request.
     */
    readonly headers: HttpHeaders;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     */
    readonly reportProgress: boolean;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     */
    readonly withCredentials: boolean;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     */
    readonly responseType: 'arraybuffer' | 'blob' | 'json' | 'text';
    /**
     * The outgoing HTTP request method.
     */
    readonly method: string;
    /**
     * Outgoing URL parameters.
     */
    readonly params: HttpParams;
    /**
     * The outgoing URL with all URL parameters set.
     */
    readonly urlWithParams: string;
    constructor(method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS', url: string, init?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    });
    constructor(method: 'POST' | 'PUT' | 'PATCH', url: string, body: T | null, init?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    });
    constructor(method: string, url: string, body: T | null, init?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    });
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    serializeBody(): ArrayBuffer | Blob | FormData | string | null;
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    detectContentTypeHeader(): string | null;
    clone(): HttpRequest<T>;
    clone(update: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        body?: T | null;
        method?: string;
        url?: string;
        setHeaders?: {
            [name: string]: string | string[];
        };
        setParams?: {
            [param: string]: string;
        };
    }): HttpRequest<T>;
    clone<V>(update: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        body?: V | null;
        method?: string;
        url?: string;
        setHeaders?: {
            [name: string]: string | string[];
        };
        setParams?: {
            [param: string]: string;
        };
    }): HttpRequest<V>;
}

/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
export declare class HttpResponse<T> extends HttpResponseBase {
    /**
     * The response body, or `null` if one was not returned.
     */
    readonly body: T | null;
    /**
     * Construct a new `HttpResponse`.
     */
    constructor(init?: {
        body?: T | null;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
    readonly type: HttpEventType.Response;
    clone(): HttpResponse<T>;
    clone(update: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpResponse<T>;
    clone<V>(update: {
        body?: V | null;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpResponse<V>;
}

/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
export declare abstract class HttpResponseBase {
    /**
     * All response headers.
     */
    readonly headers: HttpHeaders;
    /**
     * Response status code.
     */
    readonly status: number;
    /**
     * Textual description of response status code.
     *
     * Do not depend on this.
     */
    readonly statusText: string;
    /**
     * URL of the resource retrieved, or null if not available.
     */
    readonly url: string | null;
    /**
     * Whether the status code falls in the 2xx range.
     */
    readonly ok: boolean;
    /**
     * Type of the response, narrowed to either the full response or the header.
     */
    readonly type: HttpEventType.Response | HttpEventType.ResponseHeader;
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    constructor(init: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }, defaultStatus?: number, defaultStatusText?: string);
}

/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * @publicApi
 */
export declare interface HttpSentEvent {
    type: HttpEventType.Sent;
}

/**
 * An upload progress event.
 *
 * @publicApi
 */
export declare interface HttpUploadProgressEvent extends HttpProgressEvent {
    type: HttpEventType.UploadProgress;
}

/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
export declare class HttpUrlEncodingCodec implements HttpParameterCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    encodeKey(key: string): string;
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    encodeValue(value: string): string;
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    decodeKey(key: string): string;
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    decodeValue(value: string): string;
}

/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * @publicApi
 */
export declare interface HttpUserEvent<T> {
    type: HttpEventType.User;
}

/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
export declare class HttpXhrBackend implements HttpBackend {
    private xhrFactory;
    constructor(xhrFactory: XhrFactory);
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpXhrBackend, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HttpXhrBackend>;
}

/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
export declare abstract class HttpXsrfTokenExtractor {
    /**
     * Get the XSRF token to use with an outgoing request.
     *
     * Will be called for every request, so the token may change between requests.
     */
    abstract getToken(): string | null;
}

/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
export declare class JsonpClientBackend implements HttpBackend {
    private callbackMap;
    private document;
    constructor(callbackMap: ɵangular_packages_common_http_http_b, document: any);
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    private nextCallback;
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    handle(req: HttpRequest<never>): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonpClientBackend, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<JsonpClientBackend>;
}

/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
export declare class JsonpInterceptor {
    private jsonp;
    constructor(jsonp: JsonpClientBackend);
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonpInterceptor, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<JsonpInterceptor>;
}

/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
export declare abstract class XhrFactory {
    abstract build(): XMLHttpRequest;
}

export declare class ɵangular_packages_common_http_http_a implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_common_http_http_a, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_common_http_http_a>;
}

/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
export declare abstract class ɵangular_packages_common_http_http_b {
    [key: string]: (data: any) => void;
}

/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
export declare function ɵangular_packages_common_http_http_c(): Object;

/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
export declare class ɵangular_packages_common_http_http_d implements XhrFactory {
    constructor();
    build(): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_common_http_http_d, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_common_http_http_d>;
}

export declare const ɵangular_packages_common_http_http_e: InjectionToken<string>;

export declare const ɵangular_packages_common_http_http_f: InjectionToken<string>;

/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
export declare class ɵangular_packages_common_http_http_g implements HttpXsrfTokenExtractor {
    private doc;
    private platform;
    private cookieName;
    private lastCookieString;
    private lastToken;
    constructor(doc: any, platform: string, cookieName: string);
    getToken(): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_common_http_http_g, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_common_http_http_g>;
}

/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
export declare class ɵangular_packages_common_http_http_h implements HttpInterceptor {
    private tokenService;
    private headerName;
    constructor(tokenService: HttpXsrfTokenExtractor, headerName: string);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_common_http_http_h, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_common_http_http_h>;
}

/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
export declare class ɵHttpInterceptingHandler implements HttpHandler {
    private backend;
    private injector;
    private chain;
    constructor(backend: HttpBackend, injector: Injector);
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵHttpInterceptingHandler, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵHttpInterceptingHandler>;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kLnRzIiwic291cmNlcyI6WyJodHRwLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2OS4xLjlcbiAqIChjKSAyMDEwLTIwMjAgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQSBtdWx0aS1wcm92aWRlciB0b2tlbiB0aGF0IHJlcHJlc2VudHMgdGhlIGFycmF5IG9mIHJlZ2lzdGVyZWRcclxuICogYEh0dHBJbnRlcmNlcHRvcmAgb2JqZWN0cy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgSFRUUF9JTlRFUkNFUFRPUlM6IEluamVjdGlvblRva2VuPEh0dHBJbnRlcmNlcHRvcltdPjtcclxuXHJcbi8qKlxyXG4gKiBBIGZpbmFsIGBIdHRwSGFuZGxlcmAgd2hpY2ggd2lsbCBkaXNwYXRjaCB0aGUgcmVxdWVzdCB2aWEgYnJvd3NlciBIVFRQIEFQSXMgdG8gYSBiYWNrZW5kLlxyXG4gKlxyXG4gKiBJbnRlcmNlcHRvcnMgc2l0IGJldHdlZW4gdGhlIGBIdHRwQ2xpZW50YCBpbnRlcmZhY2UgYW5kIHRoZSBgSHR0cEJhY2tlbmRgLlxyXG4gKlxyXG4gKiBXaGVuIGluamVjdGVkLCBgSHR0cEJhY2tlbmRgIGRpc3BhdGNoZXMgcmVxdWVzdHMgZGlyZWN0bHkgdG8gdGhlIGJhY2tlbmQsIHdpdGhvdXQgZ29pbmdcclxuICogdGhyb3VnaCB0aGUgaW50ZXJjZXB0b3IgY2hhaW4uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEh0dHBCYWNrZW5kIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xyXG4gICAgYWJzdHJhY3QgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xyXG59XHJcblxyXG4vKipcclxuICogUGVyZm9ybXMgSFRUUCByZXF1ZXN0cy5cclxuICogVGhpcyBzZXJ2aWNlIGlzIGF2YWlsYWJsZSBhcyBhbiBpbmplY3RhYmxlIGNsYXNzLCB3aXRoIG1ldGhvZHMgdG8gcGVyZm9ybSBIVFRQIHJlcXVlc3RzLlxyXG4gKiBFYWNoIHJlcXVlc3QgbWV0aG9kIGhhcyBtdWx0aXBsZSBzaWduYXR1cmVzLCBhbmQgdGhlIHJldHVybiB0eXBlIHZhcmllcyBiYXNlZCBvblxyXG4gKiB0aGUgc2lnbmF0dXJlIHRoYXQgaXMgY2FsbGVkIChtYWlubHkgdGhlIHZhbHVlcyBvZiBgb2JzZXJ2ZWAgYW5kIGByZXNwb25zZVR5cGVgKS5cclxuICpcclxuICogTm90ZSB0aGF0IHRoZSBgcmVzcG9uc2VUeXBlYCAqb3B0aW9ucyogdmFsdWUgaXMgYSBTdHJpbmcgdGhhdCBpZGVudGlmaWVzIHRoZVxyXG4gKiBzaW5nbGUgZGF0YSB0eXBlIG9mIHRoZSByZXNwb25zZS5cclxuICogQSBzaW5nbGUgb3ZlcmxvYWQgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGhhbmRsZXMgZWFjaCByZXNwb25zZSB0eXBlLlxyXG4gKiBUaGUgdmFsdWUgb2YgYHJlc3BvbnNlVHlwZWAgY2Fubm90IGJlIGEgdW5pb24sIGFzIHRoZSBjb21iaW5lZCBzaWduYXR1cmUgY291bGQgaW1wbHkuXHJcblxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBTYW1wbGUgSFRUUCByZXF1ZXN0cyBmb3IgdGhlIFtUb3VyIG9mIEhlcm9lc10oL3R1dG9yaWFsL3RvaC1wdDApIGFwcGxpY2F0aW9uLlxyXG4gKlxyXG4gKiAjIyMgSFRUUCBSZXF1ZXN0IEV4YW1wbGVcclxuICpcclxuICogYGBgXHJcbiAqICAvLyBHRVQgaGVyb2VzIHdob3NlIG5hbWUgY29udGFpbnMgc2VhcmNoIHRlcm1cclxuICogc2VhcmNoSGVyb2VzKHRlcm06IHN0cmluZyk6IG9ic2VydmFibGU8SGVyb1tdPntcclxuICpcclxuICogIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtmcm9tU3RyaW5nOiAnbmFtZT10ZXJtJ30pO1xyXG4gKiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3QoJ0dFVCcsIHRoaXMuaGVyb2VzVXJsLCB7cmVzcG9uc2VUeXBlOidqc29uJywgcGFyYW1zfSk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqICMjIyBKU09OUCBFeGFtcGxlXHJcbiAqIGBgYFxyXG4gKiByZXF1ZXN0SnNvbnAodXJsLCBjYWxsYmFjayA9ICdjYWxsYmFjaycpIHtcclxuICogIHJldHVybiB0aGlzLmh0dHBDbGllbnQuanNvbnAodGhpcy5oZXJvZXNVUkwsIGNhbGxiYWNrKTtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFBBVENIIEV4YW1wbGVcclxuICogYGBgXHJcbiAqIC8vIFBBVENIIG9uZSBvZiB0aGUgaGVyb2VzJyBuYW1lXHJcbiAqIHBhdGNoSGVybyAoaWQ6IG51bWJlciwgaGVyb05hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcclxuICogY29uc3QgdXJsID0gYCR7dGhpcy5oZXJvZXNVcmx9LyR7aWR9YDsgICAvLyBQQVRDSCBhcGkvaGVyb2VzLzQyXHJcbiAqICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBhdGNoKHVybCwge25hbWU6IGhlcm9OYW1lfSwgaHR0cE9wdGlvbnMpXHJcbiAqICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigncGF0Y2hIZXJvJykpKTtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHNlZSBbSFRUUCBHdWlkZV0oZ3VpZGUvaHR0cClcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cENsaWVudCB7XHJcbiAgICBwcml2YXRlIGhhbmRsZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyOiBIdHRwSGFuZGxlcik7XHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGFuIGBIVFRQUmVxdWVzdGAgYW5kIHJldHVybnMgYSBzdHJlYW0gb2YgYEhUVFBFdmVudHNgLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIHN0cmVhbSBvZiBgSFRUUEV2ZW50c2AuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3Q8Uj4ocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8Uj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UgaW5cclxuICAgICAqIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxBcnJheUJ1ZmZlcj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGJsb2IgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSByZXNwb25zZSBhcyBhIGJsb2IuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEJsb2I+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmRcclxuICAgICAqIHJldHVybnMgYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgIGFuZCByZXR1cm5zIHRoZVxyXG4gICAgICogdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYXJyYXkgb2YgYEhUVFBFdmVudHNgIGZvclxyXG4gICAgICogICAgIHRoZVxyXG4gICAgICogcmVxdWVzdC5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEJsb2I+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3Qgd2hpY2ggaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50XHJcbiAgICAgKiBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXMsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3Qgd2hpY2ggaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50XHJcbiAgICAgKiBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSAgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqICB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgYE9iamVjdGAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3Qgd2hpY2ggaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50XHJcbiAgICAgKiBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBSYC5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdDxSPihtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3Qgd2hpY2ggaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgXHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kICBUaGUgSFRUUCBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHdoaWNoIGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHdoaWNoIGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmVhbSBhbmQgcmV0dXJucyB0aGUgZnVsbFxyXG4gICAgICogYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBIVFRQIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB3aGljaCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlIGZ1bGxcclxuICAgICAqIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHdoaWNoIGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBSYC5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdDxSPihtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8Uj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB3aGljaCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlIGZ1bGxcclxuICAgICAqIGBIVFRQUmVzcG9uc2VgIGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB3aGljaCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgUmAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3Q8Uj4obWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPFI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB3aGVyZSByZXNwb25zZSB0eXBlIGFuZCByZXF1ZXN0ZWQgb2JzZXJ2YWJsZSBhcmUgbm90IGtub3duIHN0YXRpY2FsbHkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXVlc3RlZCByZXNwb25zZSwgd3V0aCBib2R5IG9mIHR5cGUgYGFueWAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogSHR0cE9ic2VydmU7XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgXHJcbiAgICAgKiAgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlIGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYERFTEVURWAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSByZXNwb25zZSBhcyBhIGBCbG9iYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEJsb2I+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYERFTEVURWAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmQgcmV0dXJuc1xyXG4gICAgICogYSBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBERUxFVEVgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmBcclxuICAgICAqICBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSFRUUEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYFxyXG4gICAgICogIGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIHRoZSBgSFRUUEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFcclxuICAgICAqIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nXHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSFRUUEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIHRoZSByZXNwb25zZVxyXG4gICAgICogIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSFRUUEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIHJlc3BvbnNlIGJvZHkgb2ZcclxuICAgICAqIHR5cGUgYE9iamVjdGAuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYERFTEVURWByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEhUVFBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCBhIHJlc3BvbnNlXHJcbiAgICAgKiBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8VD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYERFTEVURWAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmQgcmV0dXJuc1xyXG4gICAgICogIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmQgcmV0dXJucyB0aGUgZnVsbFxyXG4gICAgICogYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJsb2I+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBERUxFVEVgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJlYW0gYW5kXHJcbiAgICAgKiAgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBERUxFVEVgIHJlcXVlc3QgdGhlIGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBERUxFVEVgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBkZWxldGU8VD4odXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBERUxFVEVgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPE9iamVjdD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBERUxFVEUgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIHJlc3BvbnNlIGluIGEgZ2l2ZW4gdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgLCB3aXRoIHJlc3BvbnNlIGJvZHkgaW4gdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBkZWxldGU8VD4odXJsOiBzdHJpbmcsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmQgcmV0dXJucyB0aGVcclxuICAgICAqIHJlc3BvbnNlIGluIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmBcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZSBhcyBhIGBCbG9iYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxCbG9iPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJpbmdcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZSBhcyBhIHN0cmluZyB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmQgcmV0dXJuc1xyXG4gICAgICogIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsIHdpdGggdGhlIHJlc3BvbnNlXHJcbiAgICAgKiBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIGdldCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgR0VUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIGdldCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGdldCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgR0VUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxPYmplY3Q+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnRcclxuICAgICAqIHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIGdldDxUPih1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgR0VUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiAgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJsb2I+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJlYW0gYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBmdWxsIGBIdHRwUmVzcG9uc2VgLFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZ2V0PFQ+KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgR0VUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIEpTT04gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBKU09OIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIHJlc3BvbnNlIGJvZHkgaW4gYSBnaXZlbiB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAsIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZ2V0PFQ+KHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBIRUFEYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgIGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgcmVzcG9uc2UgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZCByZXR1cm5zXHJcbiAgICAgKiB0aGUgcmVzcG9uc2UgYXMgYSBgQmxvYmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxCbG9iPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBIRUFEYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZVxyXG4gICAgICogYXMgYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgaGVhZCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gIGBBcnJheUJ1ZmZlcmBcclxuICAgICAqICBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgaGVhZCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBoZWFkKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZ1xyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgSHR0cEV2ZW50cyBmb3IgdGhlIHJlcXVlc3QsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZVxyXG4gICAgICogICAgIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgaGVhZCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgSFRUUCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSFRUUEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIGEgcmVzcG9uc2UgYm9keSBvZlxyXG4gICAgICogdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgaGVhZCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgdGhlIGBIVFRQRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3RcclxuICAgICAqICwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgaW4gdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqL1xyXG4gICAgaGVhZDxUPih1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBIRUFEYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgXHJcbiAgICAgKiAgYW5kIHJldHVybnMgdGhlIGZ1bGwgSFRUUCByZXNwb25zZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgaGVhZCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QXJyYXlCdWZmZXI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBIRUFEYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYmxvYi5cclxuICAgICAqL1xyXG4gICAgaGVhZCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgdGV4dCBzdHJlYW1cclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgaGVhZCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBIRUFEYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgaGVhZCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9ubXNlIGJvZHkgb2YgdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBoZWFkPFQ+KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBKU09OIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPE9iamVjdD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIHJlc3BvbnNlIGluIGEgZ2l2ZW4gdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgICovXHJcbiAgICBoZWFkPFQ+KHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBKU09OUGAgcmVxdWVzdCBmb3IgdGhlIGdpdmVuIFVSTCBhbmQgbmFtZSBvZiB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIHJlc291cmNlIFVSTC5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1BhcmFtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBuYW1lLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSBvYmplY3QsIHdpdGggcmVzcG9uc2UgYm9keSBhcyBhbiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGpzb25wKHVybDogc3RyaW5nLCBjYWxsYmFja1BhcmFtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9iamVjdD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSlNPTlBgIHJlcXVlc3QgZm9yIHRoZSBnaXZlbiBVUkwgYW5kIG5hbWUgb2YgdGhlIGNhbGxiYWNrIHBhcmFtZXRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSByZXNvdXJjZSBVUkwuXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tQYXJhbSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gbmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBZb3UgbXVzdCBpbnN0YWxsIGEgc3VpdGFibGUgaW50ZXJjZXB0b3IsIHN1Y2ggYXMgb25lIHByb3ZpZGVkIGJ5IGBIdHRwQ2xpZW50SnNvbnBNb2R1bGVgLlxyXG4gICAgICogSWYgbm8gc3VjaCBpbnRlcmNlcHRvciBpcyByZWFjaGVkLFxyXG4gICAgICogdGhlbiB0aGUgYEpTT05QYCByZXF1ZXN0IGNhbiBiZSByZWplY3RlZCBieSB0aGUgY29uZmlndXJlZCBiYWNrZW5kLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSBvYmplY3QsIHdpdGggcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIGpzb25wPFQ+KHVybDogc3RyaW5nLCBjYWxsYmFja1BhcmFtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhblxyXG4gICAgICogYEFycmF5QnVmZmVyYCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnModXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIHJlc3BvbnNlIGFzIGEgYEJsb2JgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnModXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxCbG9iPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmRcclxuICAgICAqIHJldHVybnMgYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgb3B0aW9ucyh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmBcclxuICAgICAqICBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgb3B0aW9ucyh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgb3B0aW9ucyh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nXHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEhUVFBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnModXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCB3aXRoIHRoZSByZXNwb25zZVxyXG4gICAgICogYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIHRoZSBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCBhIHJlc3BvbnNlIGJvZHkgaW4gdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zPFQ+KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8VD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgXHJcbiAgICAgKiAgYW5kIHJldHVybnMgdGhlIGZ1bGwgSFRUUCByZXNwb25zZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIdHRwUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgb3B0aW9ucyh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QXJyYXlCdWZmZXI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmBcclxuICAgICAqICBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIdHRwUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqICB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJsb2I+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgdGV4dCBzdHJlYW1cclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEh0dHBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnModXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEh0dHBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSHR0cFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnM8VD4odXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJucyB0aGVcclxuICAgICAqIHJlc3BvbnNlIGJvZHkgYXMgYSBKU09OIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnModXJsOiBzdHJpbmcsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPE9iamVjdD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlXHJcbiAgICAgKiByZXNwb25zZSBpbiBhIGdpdmVuIHR5cGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnM8VD4odXJsOiBzdHJpbmcsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgIGFuZCByZXR1cm5zXHJcbiAgICAgKiB0aGUgcmVzcG9uc2UgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEFycmF5QnVmZmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlXHJcbiAgICAgKiBhcyBhIGBCbG9iYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEJsb2I+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nIGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgcmVzcG9uc2UgYXMgYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmRcclxuICAgICAqICByZXR1cm5zIHRoZSB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEhUVFBldmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYFxyXG4gICAgICogIGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIHRoZSBgSFRUUGV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIHRoZVxyXG4gICAgICogcmVzcG9uc2UgYm9keSBhcyBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUEFUQ0hgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJpbmcgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIHRoZSBgSFRUUGV2ZW50c2Bmb3IgdGhlIHJlcXVlc3QsIHdpdGggYVxyXG4gICAgICogcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEhUVFBldmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IG9mIHR5cGUgYE9iamVjdGAuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUEFUQ0hgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIHRoZSBgSFRUUGV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcGF0Y2g8VD4odXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxUPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUEFUQ0hgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmBcclxuICAgICAqICBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiAgQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSHR0cFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiAgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QXJyYXlCdWZmZXI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnMgdGhlIGZ1bGxcclxuICAgICAqIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gZWRpdC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIdHRwUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJsb2I+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmVhbSBhbmQgcmV0dXJucyB0aGVcclxuICAgICAqIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEh0dHBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIdHRwUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIdHRwUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgICovXHJcbiAgICBwYXRjaDxUPih1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIEpTT04gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gZWRpdC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBKU09OIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPE9iamVjdD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUEFUQ0hgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZSBpbiBhIGdpdmVuIHR5cGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEh0dHBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCBhIHJlc3BvbnNlIGJvZHkgaW4gdGhlIGdpdmVuIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoPFQ+KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQT1NUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgIGFuZCByZXR1cm5zXHJcbiAgICAgKiBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxBcnJheUJ1ZmZlcj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUE9TVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnMgdGhlXHJcbiAgICAgKiByZXNwb25zZSBhcyBhIGBCbG9iYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxCbG9iPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQT1NUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nIGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgcmVzcG9uc2UgYXMgYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIGEgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUE9TVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QXJyYXlCdWZmZXI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQT1NUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlIGluIGFuIG9ic2VydmFibGUgb2YgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBPU1RgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJpbmcgYW5kIHJldHVybnMgdGhlIGZ1bGxcclxuICAgICAqIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBQT1NUIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnRcclxuICAgICAqIHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBQT1NUIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnRcclxuICAgICAqIHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcG9zdDxUPih1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIFBPU1QgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYFxyXG4gICAgICogIGFuZCByZXR1cm5zIHRoZSBmdWxsIGBIVFRQcmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuXHJcbiAgICAgKiAgICAgYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QXJyYXlCdWZmZXI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQT1NUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmQgcmV0dXJucyB0aGUgZnVsbFxyXG4gICAgICogYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBPU1RgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJlYW0gYW5kIHJldHVybnNcclxuICAgICAqIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUE9TVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2YgdHlwZVxyXG4gICAgICogYE9iamVjdGAuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBPU1RgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlIGZ1bGxcclxuICAgICAqIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGVcclxuICAgICAqICAgICByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcG9zdDxUPih1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBPU1RgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFcclxuICAgICAqIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPE9iamVjdD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUE9TVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiAgQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZVxyXG4gICAgICogICAgIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBwb3N0PFQ+KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQVVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAgYW5kIHJldHVybnMgdGhlXHJcbiAgICAgKiByZXNwb25zZSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSByZXNwb25zZSBhcyBhIGBCbG9iYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGFkZC91cGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEJsb2I+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIHJlc3BvbnNlIGFzIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgIGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudFxyXG4gICAgICogc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50XHJcbiAgICAgKiBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIEh0dHBFdmVudHMgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIGEgcmVzcG9uc2UgYm9keVxyXG4gICAgICogb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50XHJcbiAgICAgKiBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsIHdpdGggYSByZXNwb25zZSBib2R5IG9mXHJcbiAgICAgKiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxPYmplY3Q+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQVVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlXHJcbiAgICAgKiBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGFkZC91cGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcHV0PFQ+KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQVVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuXHJcbiAgICAgKiBgQXJyYXlCdWZmZXJgIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgb2YgdGhlIGZ1bGwgSFRUUCByZXNwb25zZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGFkZC91cGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuXHJcbiAgICAgKiAgICAgYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnMgdGhlXHJcbiAgICAgKiBmdWxsIEhUVFAgcmVzcG9uc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyZWFtIGFuZCByZXR1cm5zIHRoZVxyXG4gICAgICogZnVsbCBIVFRQIHJlc3BvbnNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsIHdpdGggYSByZXNwb25zZSBib2R5IG9mIHR5cGVcclxuICAgICAqICAgICBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQVVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlIGZ1bGwgSFRUUFxyXG4gICAgICogcmVzcG9uc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCBhIHJlc3BvbnNlIGJvZHlcclxuICAgICAqIG9mIHR5cGUgJ09iamVjdGAuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsIEhUVFBcclxuICAgICAqIHJlc3BvbnNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHB1dDxUPih1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2VcclxuICAgICAqIGJvZHkgYXMgYSBKU09OIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGFkZC91cGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBKU09OIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgaW4gdGhlXHJcbiAgICAgKiAgICAgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHB1dDxUPih1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9ucz86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8VD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmVzIHRoZSBbZGVwZW5kZW5jeSBpbmplY3Rvcl0oZ3VpZGUvZ2xvc3NhcnkjaW5qZWN0b3IpIGZvciBgSHR0cENsaWVudGBcclxuICogd2l0aCBzdXBwb3J0aW5nIHNlcnZpY2VzIGZvciBKU09OUC5cclxuICogV2l0aG91dCB0aGlzIG1vZHVsZSwgSnNvbnAgcmVxdWVzdHMgcmVhY2ggdGhlIGJhY2tlbmRcclxuICogd2l0aCBtZXRob2QgSlNPTlAsIHdoZXJlIHRoZXkgYXJlIHJlamVjdGVkLlxyXG4gKlxyXG4gKiBZb3UgY2FuIGFkZCBpbnRlcmNlcHRvcnMgdG8gdGhlIGNoYWluIGJlaGluZCBgSHR0cENsaWVudGAgYnkgYmluZGluZyB0aGVtIHRvIHRoZVxyXG4gKiBtdWx0aXByb3ZpZGVyIGZvciBidWlsdC1pbiBbREkgdG9rZW5dKGd1aWRlL2dsb3NzYXJ5I2RpLXRva2VuKSBgSFRUUF9JTlRFUkNFUFRPUlNgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwQ2xpZW50SnNvbnBNb2R1bGUge1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlndXJlcyB0aGUgW2RlcGVuZGVuY3kgaW5qZWN0b3JdKGd1aWRlL2dsb3NzYXJ5I2luamVjdG9yKSBmb3IgYEh0dHBDbGllbnRgXHJcbiAqIHdpdGggc3VwcG9ydGluZyBzZXJ2aWNlcyBmb3IgWFNSRi4gQXV0b21hdGljYWxseSBpbXBvcnRlZCBieSBgSHR0cENsaWVudE1vZHVsZWAuXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWRkIGludGVyY2VwdG9ycyB0byB0aGUgY2hhaW4gYmVoaW5kIGBIdHRwQ2xpZW50YCBieSBiaW5kaW5nIHRoZW0gdG8gdGhlXHJcbiAqIG11bHRpcHJvdmlkZXIgZm9yIGJ1aWx0LWluIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkjZGktdG9rZW4pIGBIVFRQX0lOVEVSQ0VQVE9SU2AuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEh0dHBDbGllbnRNb2R1bGUge1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlndXJlcyBYU1JGIHByb3RlY3Rpb24gc3VwcG9ydCBmb3Igb3V0Z29pbmcgcmVxdWVzdHMuXHJcbiAqXHJcbiAqIEZvciBhIHNlcnZlciB0aGF0IHN1cHBvcnRzIGEgY29va2llLWJhc2VkIFhTUkYgcHJvdGVjdGlvbiBzeXN0ZW0sXHJcbiAqIHVzZSBkaXJlY3RseSB0byBjb25maWd1cmUgWFNSRiBwcm90ZWN0aW9uIHdpdGggdGhlIGNvcnJlY3RcclxuICogY29va2llIGFuZCBoZWFkZXIgbmFtZXMuXHJcbiAqXHJcbiAqIElmIG5vIG5hbWVzIGFyZSBzdXBwbGllZCwgdGhlIGRlZmF1bHQgY29va2llIG5hbWUgaXMgYFhTUkYtVE9LRU5gXHJcbiAqIGFuZCB0aGUgZGVmYXVsdCBoZWFkZXIgbmFtZSBpcyBgWC1YU1JGLVRPS0VOYC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cENsaWVudFhzcmZNb2R1bGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNhYmxlIHRoZSBkZWZhdWx0IFhTUkYgcHJvdGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpc2FibGUoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxIdHRwQ2xpZW50WHNyZk1vZHVsZT47XHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZSBYU1JGIHByb3RlY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgdGhhdCBjYW4gc3BlY2lmeSBlaXRoZXIgb3IgYm90aFxyXG4gICAgICogY29va2llIG5hbWUgb3IgaGVhZGVyIG5hbWUuXHJcbiAgICAgKiAtIENvb2tpZSBuYW1lIGRlZmF1bHQgaXMgYFhTUkYtVE9LRU5gLlxyXG4gICAgICogLSBIZWFkZXIgbmFtZSBkZWZhdWx0IGlzIGBYLVhTUkYtVE9LRU5gLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHdpdGhPcHRpb25zKG9wdGlvbnM/OiB7XHJcbiAgICAgICAgY29va2llTmFtZT86IHN0cmluZztcclxuICAgICAgICBoZWFkZXJOYW1lPzogc3RyaW5nO1xyXG4gICAgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SHR0cENsaWVudFhzcmZNb2R1bGU+O1xyXG59XHJcblxyXG4vKipcclxuICogQSBkb3dubG9hZCBwcm9ncmVzcyBldmVudC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEh0dHBEb3dubG9hZFByb2dyZXNzRXZlbnQgZXh0ZW5kcyBIdHRwUHJvZ3Jlc3NFdmVudCB7XHJcbiAgICB0eXBlOiBIdHRwRXZlbnRUeXBlLkRvd25sb2FkUHJvZ3Jlc3M7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXJ0aWFsIHJlc3BvbnNlIGJvZHkgYXMgZG93bmxvYWRlZCBzbyBmYXIuXHJcbiAgICAgKlxyXG4gICAgICogT25seSBwcmVzZW50IGlmIHRoZSByZXNwb25zZVR5cGUgd2FzIGB0ZXh0YC5cclxuICAgICAqL1xyXG4gICAgcGFydGlhbFRleHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHJlc3BvbnNlIHRoYXQgcmVwcmVzZW50cyBhbiBlcnJvciBvciBmYWlsdXJlLCBlaXRoZXIgZnJvbSBhXHJcbiAqIG5vbi1zdWNjZXNzZnVsIEhUVFAgc3RhdHVzLCBhbiBlcnJvciB3aGlsZSBleGVjdXRpbmcgdGhlIHJlcXVlc3QsXHJcbiAqIG9yIHNvbWUgb3RoZXIgZmFpbHVyZSB3aGljaCBvY2N1cnJlZCBkdXJpbmcgdGhlIHBhcnNpbmcgb2YgdGhlIHJlc3BvbnNlLlxyXG4gKlxyXG4gKiBBbnkgZXJyb3IgcmV0dXJuZWQgb24gdGhlIGBPYnNlcnZhYmxlYCByZXNwb25zZSBzdHJlYW0gd2lsbCBiZVxyXG4gKiB3cmFwcGVkIGluIGFuIGBIdHRwRXJyb3JSZXNwb25zZWAgdG8gcHJvdmlkZSBhZGRpdGlvbmFsIGNvbnRleHQgYWJvdXRcclxuICogdGhlIHN0YXRlIG9mIHRoZSBIVFRQIGxheWVyIHdoZW4gdGhlIGVycm9yIG9jY3VycmVkLiBUaGUgZXJyb3IgcHJvcGVydHlcclxuICogd2lsbCBjb250YWluIGVpdGhlciBhIHdyYXBwZWQgRXJyb3Igb2JqZWN0IG9yIHRoZSBlcnJvciByZXNwb25zZSByZXR1cm5lZFxyXG4gKiBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEh0dHBFcnJvclJlc3BvbnNlIGV4dGVuZHMgSHR0cFJlc3BvbnNlQmFzZSBpbXBsZW1lbnRzIEVycm9yIHtcclxuICAgIHJlYWRvbmx5IG5hbWUgPSBcIkh0dHBFcnJvclJlc3BvbnNlXCI7XHJcbiAgICByZWFkb25seSBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBlcnJvcjogYW55IHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogRXJyb3JzIGFyZSBuZXZlciBva2F5LCBldmVuIHdoZW4gdGhlIHN0YXR1cyBjb2RlIGlzIGluIHRoZSAyeHggc3VjY2VzcyByYW5nZS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgb2sgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ6IHtcclxuICAgICAgICBlcnJvcj86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgICAgICAgc3RhdHVzPzogbnVtYmVyO1xyXG4gICAgICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgdXJsPzogc3RyaW5nO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbmlvbiB0eXBlIGZvciBhbGwgcG9zc2libGUgZXZlbnRzIG9uIHRoZSByZXNwb25zZSBzdHJlYW0uXHJcbiAqXHJcbiAqIFR5cGVkIGFjY29yZGluZyB0byB0aGUgZXhwZWN0ZWQgdHlwZSBvZiB0aGUgcmVzcG9uc2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgSHR0cEV2ZW50PFQ+ID0gSHR0cFNlbnRFdmVudCB8IEh0dHBIZWFkZXJSZXNwb25zZSB8IEh0dHBSZXNwb25zZTxUPiB8IEh0dHBQcm9ncmVzc0V2ZW50IHwgSHR0cFVzZXJFdmVudDxUPjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGVudW1lcmF0aW9uIGZvciB0aGUgZGlmZmVyZW50IGtpbmRzIG9mIGBIdHRwRXZlbnRgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBlbnVtIEh0dHBFdmVudFR5cGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVxdWVzdCB3YXMgc2VudCBvdXQgb3ZlciB0aGUgd2lyZS5cclxuICAgICAqL1xyXG4gICAgU2VudCA9IDAsXHJcbiAgICAvKipcclxuICAgICAqIEFuIHVwbG9hZCBwcm9ncmVzcyBldmVudCB3YXMgcmVjZWl2ZWQuXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFByb2dyZXNzID0gMSxcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlc3BvbnNlIHN0YXR1cyBjb2RlIGFuZCBoZWFkZXJzIHdlcmUgcmVjZWl2ZWQuXHJcbiAgICAgKi9cclxuICAgIFJlc3BvbnNlSGVhZGVyID0gMixcclxuICAgIC8qKlxyXG4gICAgICogQSBkb3dubG9hZCBwcm9ncmVzcyBldmVudCB3YXMgcmVjZWl2ZWQuXHJcbiAgICAgKi9cclxuICAgIERvd25sb2FkUHJvZ3Jlc3MgPSAzLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZnVsbCByZXNwb25zZSBpbmNsdWRpbmcgdGhlIGJvZHkgd2FzIHJlY2VpdmVkLlxyXG4gICAgICovXHJcbiAgICBSZXNwb25zZSA9IDQsXHJcbiAgICAvKipcclxuICAgICAqIEEgY3VzdG9tIGV2ZW50IGZyb20gYW4gaW50ZXJjZXB0b3Igb3IgYSBiYWNrZW5kLlxyXG4gICAgICovXHJcbiAgICBVc2VyID0gNVxyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyBhbiBgSHR0cFJlcXVlc3RgIGludG8gYSBzdHJlYW0gb2YgYEh0dHBFdmVudGBzLCBvbmUgb2Ygd2hpY2ggd2lsbCBsaWtlbHkgYmUgYVxyXG4gKiBgSHR0cFJlc3BvbnNlYC5cclxuICpcclxuICogYEh0dHBIYW5kbGVyYCBpcyBpbmplY3RhYmxlLiBXaGVuIGluamVjdGVkLCB0aGUgaGFuZGxlciBpbnN0YW5jZSBkaXNwYXRjaGVzIHJlcXVlc3RzIHRvIHRoZVxyXG4gKiBmaXJzdCBpbnRlcmNlcHRvciBpbiB0aGUgY2hhaW4sIHdoaWNoIGRpc3BhdGNoZXMgdG8gdGhlIHNlY29uZCwgZXRjLCBldmVudHVhbGx5IHJlYWNoaW5nIHRoZVxyXG4gKiBgSHR0cEJhY2tlbmRgLlxyXG4gKlxyXG4gKiBJbiBhbiBgSHR0cEludGVyY2VwdG9yYCwgdGhlIGBIdHRwSGFuZGxlcmAgcGFyYW1ldGVyIGlzIHRoZSBuZXh0IGludGVyY2VwdG9yIGluIHRoZSBjaGFpbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgSHR0cEhhbmRsZXIge1xyXG4gICAgYWJzdHJhY3QgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xyXG59XHJcblxyXG4vKipcclxuICogQSBwYXJ0aWFsIEhUVFAgcmVzcG9uc2Ugd2hpY2ggb25seSBpbmNsdWRlcyB0aGUgc3RhdHVzIGFuZCBoZWFkZXIgZGF0YSxcclxuICogYnV0IG5vIHJlc3BvbnNlIGJvZHkuXHJcbiAqXHJcbiAqIGBIdHRwSGVhZGVyUmVzcG9uc2VgIGlzIGEgYEh0dHBFdmVudGAgYXZhaWxhYmxlIG9uIHRoZSByZXNwb25zZVxyXG4gKiBldmVudCBzdHJlYW0sIG9ubHkgd2hlbiBwcm9ncmVzcyBldmVudHMgYXJlIHJlcXVlc3RlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cEhlYWRlclJlc3BvbnNlIGV4dGVuZHMgSHR0cFJlc3BvbnNlQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBgSHR0cEhlYWRlclJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0Pzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcclxuICAgICAgICBzdGF0dXM/OiBudW1iZXI7XHJcbiAgICAgICAgc3RhdHVzVGV4dD86IHN0cmluZztcclxuICAgICAgICB1cmw/OiBzdHJpbmc7XHJcbiAgICB9KTtcclxuICAgIHJlYWRvbmx5IHR5cGU6IEh0dHBFdmVudFR5cGUuUmVzcG9uc2VIZWFkZXI7XHJcbiAgICAvKipcclxuICAgICAqIENvcHkgdGhpcyBgSHR0cEhlYWRlclJlc3BvbnNlYCwgb3ZlcnJpZGluZyBpdHMgY29udGVudHMgd2l0aCB0aGVcclxuICAgICAqIGdpdmVuIHBhcmFtZXRlciBoYXNoLlxyXG4gICAgICovXHJcbiAgICBjbG9uZSh1cGRhdGU/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xyXG4gICAgICAgIHN0YXR1cz86IG51bWJlcjtcclxuICAgICAgICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIHVybD86IHN0cmluZztcclxuICAgIH0pOiBIdHRwSGVhZGVyUmVzcG9uc2U7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgaGVhZGVyIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgYW4gSFRUUCByZXF1ZXN0LlxyXG4gKiBJbnN0YW5jZXMgYXJlIGltbXV0YWJsZS4gTW9kaWZ5aW5nIG1ldGhvZHMgcmV0dXJuIGEgY2xvbmVkXHJcbiAqIGluc3RhbmNlIHdpdGggdGhlIGNoYW5nZS4gVGhlIG9yaWdpbmFsIG9iamVjdCBpcyBuZXZlciBjaGFuZ2VkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwSGVhZGVycyB7XHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsIG1hcCBvZiBsb3dlcmNhc2UgaGVhZGVyIG5hbWVzIHRvIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBtYXAgb2YgbG93ZXJjYXNlZCBoZWFkZXIgbmFtZXMgdG8gdGhlIG5vcm1hbGl6ZWRcclxuICAgICAqIGZvcm0gb2YgdGhlIG5hbWUgKHRoZSBmb3JtIHNlZW4gZmlyc3QpLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG5vcm1hbGl6ZWROYW1lcztcclxuICAgIC8qKlxyXG4gICAgICogQ29tcGxldGUgdGhlIGxhenkgaW5pdGlhbGl6YXRpb24gb2YgdGhpcyBvYmplY3QgKG5lZWRlZCBiZWZvcmUgcmVhZGluZykuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbGF6eUluaXQ7XHJcbiAgICAvKipcclxuICAgICAqIFF1ZXVlZCB1cGRhdGVzIHRvIGJlIG1hdGVyaWFsaXplZCB0aGUgbmV4dCBpbml0aWFsaXphdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsYXp5VXBkYXRlO1xyXG4gICAgLyoqICBDb25zdHJ1Y3RzIGEgbmV3IEhUVFAgaGVhZGVyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXMuKi9cclxuICAgIGNvbnN0cnVjdG9yKGhlYWRlcnM/OiBzdHJpbmcgfCB7XHJcbiAgICAgICAgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBmb3IgZXhpc3RlbmNlIG9mIGEgZ2l2ZW4gaGVhZGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBoZWFkZXIgbmFtZSB0byBjaGVjayBmb3IgZXhpc3RlbmNlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGhlYWRlciBleGlzdHMsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqL1xyXG4gICAgaGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgZmlyc3QgdmFsdWUgb2YgYSBnaXZlbiBoZWFkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIGhlYWRlciBuYW1lLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBzdHJpbmcgaWYgdGhlIGhlYWRlciBleGlzdHMsIG51bGwgb3RoZXJ3aXNlXHJcbiAgICAgKi9cclxuICAgIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIG5hbWVzIG9mIHRoZSBoZWFkZXJzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIEEgbGlzdCBvZiBoZWFkZXIgbmFtZXMuXHJcbiAgICAgKi9cclxuICAgIGtleXMoKTogc3RyaW5nW107XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIGxpc3Qgb2YgdmFsdWVzIGZvciBhIGdpdmVuIGhlYWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgaGVhZGVyIG5hbWUgZnJvbSB3aGljaCB0byByZXRyaWV2ZSB2YWx1ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgQSBzdHJpbmcgb2YgdmFsdWVzIGlmIHRoZSBoZWFkZXIgZXhpc3RzLCBudWxsIG90aGVyd2lzZS5cclxuICAgICAqL1xyXG4gICAgZ2V0QWxsKG5hbWU6IHN0cmluZyk6IHN0cmluZ1tdIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kcyBhIG5ldyB2YWx1ZSB0byB0aGUgZXhpc3Rpbmcgc2V0IG9mIHZhbHVlcyBmb3IgYSBoZWFkZXJcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZW0gaW4gYSBjbG9uZSBvZiB0aGUgb3JpZ2luYWwgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIGhlYWRlciBuYW1lIGZvciB3aGljaCB0byBhcHBlbmQgdGhlIHZhbHVlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXBwZW5kLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIEEgY2xvbmUgb2YgdGhlIEhUVFAgaGVhZGVycyBvYmplY3Qgd2l0aCB0aGUgdmFsdWUgYXBwZW5kZWQgdG8gdGhlIGdpdmVuIGhlYWRlci5cclxuICAgICAqL1xyXG4gICAgYXBwZW5kKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogSHR0cEhlYWRlcnM7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgb3IgbW9kaWZpZXMgYSB2YWx1ZSBmb3IgYSBnaXZlbiBoZWFkZXIgaW4gYSBjbG9uZSBvZiB0aGUgb3JpZ2luYWwgaW5zdGFuY2UuXHJcbiAgICAgKiBJZiB0aGUgaGVhZGVyIGFscmVhZHkgZXhpc3RzLCBpdHMgdmFsdWUgaXMgcmVwbGFjZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVcclxuICAgICAqIGluIHRoZSByZXR1cm5lZCBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIGhlYWRlciBuYW1lLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvciB2YWx1ZXMgdG8gc2V0IG9yIG92ZXJpZGUgZm9yIHRoZSBnaXZlbiBoZWFkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgQSBjbG9uZSBvZiB0aGUgSFRUUCBoZWFkZXJzIG9iamVjdCB3aXRoIHRoZSBuZXdseSBzZXQgaGVhZGVyIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pOiBIdHRwSGVhZGVycztcclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlcyB2YWx1ZXMgZm9yIGEgZ2l2ZW4gaGVhZGVyIGluIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBoZWFkZXIgbmFtZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb3IgdmFsdWVzIHRvIGRlbGV0ZSBmb3IgdGhlIGdpdmVuIGhlYWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBBIGNsb25lIG9mIHRoZSBIVFRQIGhlYWRlcnMgb2JqZWN0IHdpdGggdGhlIGdpdmVuIHZhbHVlIGRlbGV0ZWQuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlPzogc3RyaW5nIHwgc3RyaW5nW10pOiBIdHRwSGVhZGVycztcclxuICAgIHByaXZhdGUgbWF5YmVTZXROb3JtYWxpemVkTmFtZTtcclxuICAgIHByaXZhdGUgaW5pdDtcclxuICAgIHByaXZhdGUgY29weUZyb207XHJcbiAgICBwcml2YXRlIGNsb25lO1xyXG4gICAgcHJpdmF0ZSBhcHBseVVwZGF0ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyY2VwdHMgYW5kIGhhbmRsZXMgYW4gYEh0dHBSZXF1ZXN0YCBvciBgSHR0cFJlc3BvbnNlYC5cclxuICpcclxuICogTW9zdCBpbnRlcmNlcHRvcnMgdHJhbnNmb3JtIHRoZSBvdXRnb2luZyByZXF1ZXN0IGJlZm9yZSBwYXNzaW5nIGl0IHRvIHRoZVxyXG4gKiBuZXh0IGludGVyY2VwdG9yIGluIHRoZSBjaGFpbiwgYnkgY2FsbGluZyBgbmV4dC5oYW5kbGUodHJhbnNmb3JtZWRSZXEpYC5cclxuICogQW4gaW50ZXJjZXB0b3IgbWF5IHRyYW5zZm9ybSB0aGVcclxuICogcmVzcG9uc2UgZXZlbnQgc3RyZWFtIGFzIHdlbGwsIGJ5IGFwcGx5aW5nIGFkZGl0aW9uYWwgUnhKUyBvcGVyYXRvcnMgb24gdGhlIHN0cmVhbVxyXG4gKiByZXR1cm5lZCBieSBgbmV4dC5oYW5kbGUoKWAuXHJcbiAqXHJcbiAqIE1vcmUgcmFyZWx5LCBhbiBpbnRlcmNlcHRvciBtYXkgaGFuZGxlIHRoZSByZXF1ZXN0IGVudGlyZWx5LFxyXG4gKiBhbmQgY29tcG9zZSBhIG5ldyBldmVudCBzdHJlYW0gaW5zdGVhZCBvZiBpbnZva2luZyBgbmV4dC5oYW5kbGUoKWAuIFRoaXMgaXMgYW5cclxuICogYWNjZXB0YWJsZSBiZWhhdmlvciwgYnV0IGtlZXAgaW4gbWluZCB0aGF0IGZ1cnRoZXIgaW50ZXJjZXB0b3JzIHdpbGwgYmUgc2tpcHBlZCBlbnRpcmVseS5cclxuICpcclxuICogSXQgaXMgYWxzbyByYXJlIGJ1dCB2YWxpZCBmb3IgYW4gaW50ZXJjZXB0b3IgdG8gcmV0dXJuIG11bHRpcGxlIHJlc3BvbnNlcyBvbiB0aGVcclxuICogZXZlbnQgc3RyZWFtIGZvciBhIHNpbmdsZSByZXF1ZXN0LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqXHJcbiAqIEBzZWUgW0hUVFAgR3VpZGVdKGd1aWRlL2h0dHAjaW50ZXJjZXB0aW5nLXJlcXVlc3RzLWFuZC1yZXNwb25zZXMpXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFRvIHVzZSB0aGUgc2FtZSBpbnN0YW5jZSBvZiBgSHR0cEludGVyY2VwdG9yc2AgZm9yIHRoZSBlbnRpcmUgYXBwLCBpbXBvcnQgdGhlIGBIdHRwQ2xpZW50TW9kdWxlYFxyXG4gKiBvbmx5IGluIHlvdXIgYEFwcE1vZHVsZWAsIGFuZCBhZGQgdGhlIGludGVyY2VwdG9ycyB0byB0aGUgcm9vdCBhcHBsaWNhdGlvbiBpbmplY3RvciAuXHJcbiAqIElmIHlvdSBpbXBvcnQgYEh0dHBDbGllbnRNb2R1bGVgIG11bHRpcGxlIHRpbWVzIGFjcm9zcyBkaWZmZXJlbnQgbW9kdWxlcyAoZm9yIGV4YW1wbGUsIGluIGxhenlcclxuICogbG9hZGluZyBtb2R1bGVzKSwgZWFjaCBpbXBvcnQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIHRoZSBgSHR0cENsaWVudE1vZHVsZWAsIHdoaWNoIG92ZXJ3cml0ZXMgdGhlXHJcbiAqIGludGVyY2VwdG9ycyBwcm92aWRlZCBpbiB0aGUgcm9vdCBtb2R1bGUuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSHR0cEludGVyY2VwdG9yIHtcclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyBhbmQgaGFuZGxlcyBhIGdpdmVuIEhUVFAgcmVxdWVzdC5cclxuICAgICAqIEBwYXJhbSByZXEgVGhlIG91dGdvaW5nIHJlcXVlc3Qgb2JqZWN0IHRvIGhhbmRsZS5cclxuICAgICAqIEBwYXJhbSBuZXh0IFRoZSBuZXh0IGludGVyY2VwdG9yIGluIHRoZSBjaGFpbiwgb3IgdGhlIGJhY2tlbmRcclxuICAgICAqIGlmIG5vIGludGVyY2VwdG9ycyByZW1haW4gaW4gdGhlIGNoYWluLlxyXG4gICAgICogQHJldHVybnMgQW4gb2JzZXJ2YWJsZSBvZiB0aGUgZXZlbnQgc3RyZWFtLlxyXG4gICAgICovXHJcbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xyXG59XHJcblxyXG5kZWNsYXJlIHR5cGUgSHR0cE9ic2VydmUgPSAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEEgY29kZWMgZm9yIGVuY29kaW5nIGFuZCBkZWNvZGluZyBwYXJhbWV0ZXJzIGluIFVSTHMuXHJcbiAqXHJcbiAqIFVzZWQgYnkgYEh0dHBQYXJhbXNgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEh0dHBQYXJhbWV0ZXJDb2RlYyB7XHJcbiAgICBlbmNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBlbmNvZGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgZGVjb2RlS2V5KGtleTogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgZGVjb2RlVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIEhUVFAgcmVxdWVzdC9yZXNwb25zZSBib2R5IHRoYXQgcmVwcmVzZW50cyBzZXJpYWxpemVkIHBhcmFtZXRlcnMsXHJcbiAqIHBlciB0aGUgTUlNRSB0eXBlIGBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRgLlxyXG4gKlxyXG4gKiBUaGlzIGNsYXNzIGlzIGltbXV0YWJsZTsgYWxsIG11dGF0aW9uIG9wZXJhdGlvbnMgcmV0dXJuIGEgbmV3IGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwUGFyYW1zIHtcclxuICAgIHByaXZhdGUgbWFwO1xyXG4gICAgcHJpdmF0ZSBlbmNvZGVyO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVzO1xyXG4gICAgcHJpdmF0ZSBjbG9uZUZyb207XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogSHR0cFBhcmFtc09wdGlvbnMpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvcnRzIHdoZXRoZXIgdGhlIGJvZHkgaW5jbHVkZXMgb25lIG9yIG1vcmUgdmFsdWVzIGZvciBhIGdpdmVuIHBhcmFtZXRlci5cclxuICAgICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXJhbWV0ZXIgaGFzIG9uZSBvciBtb3JlIHZhbHVlcyxcclxuICAgICAqIGZhbHNlIGlmIGl0IGhhcyBubyB2YWx1ZSBvciBpcyBub3QgcHJlc2VudC5cclxuICAgICAqL1xyXG4gICAgaGFzKHBhcmFtOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGZpcnN0IHZhbHVlIGZvciBhIHBhcmFtZXRlci5cclxuICAgICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmlyc3QgdmFsdWUgb2YgdGhlIGdpdmVuIHBhcmFtZXRlcixcclxuICAgICAqIG9yIGBudWxsYCBpZiB0aGUgcGFyYW1ldGVyIGlzIG5vdCBwcmVzZW50LlxyXG4gICAgICovXHJcbiAgICBnZXQocGFyYW06IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbGwgdmFsdWVzIGZvciBhICBwYXJhbWV0ZXIuXHJcbiAgICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtZXRlciBuYW1lLlxyXG4gICAgICogQHJldHVybnMgQWxsIHZhbHVlcyBpbiBhIHN0cmluZyBhcnJheSxcclxuICAgICAqIG9yIGBudWxsYCBpZiB0aGUgcGFyYW1ldGVyIG5vdCBwcmVzZW50LlxyXG4gICAgICovXHJcbiAgICBnZXRBbGwocGFyYW06IHN0cmluZyk6IHN0cmluZ1tdIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGFsbCB0aGUgcGFyYW1ldGVycyBmb3IgdGhpcyBib2R5LlxyXG4gICAgICogQHJldHVybnMgVGhlIHBhcmFtZXRlciBuYW1lcyBpbiBhIHN0cmluZyBhcnJheS5cclxuICAgICAqL1xyXG4gICAga2V5cygpOiBzdHJpbmdbXTtcclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kcyBhIG5ldyB2YWx1ZSB0byBleGlzdGluZyB2YWx1ZXMgZm9yIGEgcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlIHRvIGFkZC5cclxuICAgICAqIEByZXR1cm4gQSBuZXcgYm9keSB3aXRoIHRoZSBhcHBlbmRlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgYXBwZW5kKHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBIdHRwUGFyYW1zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlcyB0aGUgdmFsdWUgZm9yIGEgcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlLlxyXG4gICAgICogQHJldHVybiBBIG5ldyBib2R5IHdpdGggdGhlIG5ldyB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgc2V0KHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBIdHRwUGFyYW1zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgZ2l2ZW4gdmFsdWUgb3IgYWxsIHZhbHVlcyBmcm9tIGEgcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVtb3ZlLCBpZiBwcm92aWRlZC5cclxuICAgICAqIEByZXR1cm4gQSBuZXcgYm9keSB3aXRoIHRoZSBnaXZlbiB2YWx1ZSByZW1vdmVkLCBvciB3aXRoIGFsbCB2YWx1ZXNcclxuICAgICAqIHJlbW92ZWQgaWYgbm8gdmFsdWUgaXMgc3BlY2lmaWVkLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUocGFyYW06IHN0cmluZywgdmFsdWU/OiBzdHJpbmcpOiBIdHRwUGFyYW1zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoZSBib2R5IHRvIGFuIGVuY29kZWQgc3RyaW5nLCB3aGVyZSBrZXktdmFsdWUgcGFpcnMgKHNlcGFyYXRlZCBieSBgPWApIGFyZVxyXG4gICAgICogc2VwYXJhdGVkIGJ5IGAmYHMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxuICAgIHByaXZhdGUgY2xvbmU7XHJcbiAgICBwcml2YXRlIGluaXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIHVzZWQgdG8gY29uc3RydWN0IGFuIGBIdHRwUGFyYW1zYCBpbnN0YW5jZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZGVjbGFyZSBpbnRlcmZhY2UgSHR0cFBhcmFtc09wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIEhUVFAgcGFyYW1ldGVycyBpbiBVUkwtcXVlcnktc3RyaW5nIGZvcm1hdC5cclxuICAgICAqIE11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBmcm9tT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgZnJvbVN0cmluZz86IHN0cmluZztcclxuICAgIC8qKiBPYmplY3QgbWFwIG9mIHRoZSBIVFRQIHBhcmFtZXRlcnMuIE11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBmcm9tU3RyaW5nYC4gKi9cclxuICAgIGZyb21PYmplY3Q/OiB7XHJcbiAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBSZWFkb25seUFycmF5PHN0cmluZz47XHJcbiAgICB9O1xyXG4gICAgLyoqIEVuY29kaW5nIGNvZGVjIHVzZWQgdG8gcGFyc2UgYW5kIHNlcmlhbGl6ZSB0aGUgcGFyYW1ldGVycy4gKi9cclxuICAgIGVuY29kZXI/OiBIdHRwUGFyYW1ldGVyQ29kZWM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGludGVyZmFjZSBmb3IgcHJvZ3Jlc3MgZXZlbnRzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSHR0cFByb2dyZXNzRXZlbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9ncmVzcyBldmVudCB0eXBlIGlzIGVpdGhlciB1cGxvYWQgb3IgZG93bmxvYWQuXHJcbiAgICAgKi9cclxuICAgIHR5cGU6IEh0dHBFdmVudFR5cGUuRG93bmxvYWRQcm9ncmVzcyB8IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M7XHJcbiAgICAvKipcclxuICAgICAqIE51bWJlciBvZiBieXRlcyB1cGxvYWRlZCBvciBkb3dubG9hZGVkLlxyXG4gICAgICovXHJcbiAgICBsb2FkZWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVG90YWwgbnVtYmVyIG9mIGJ5dGVzIHRvIHVwbG9hZCBvciBkb3dubG9hZC4gRGVwZW5kaW5nIG9uIHRoZSByZXF1ZXN0IG9yXHJcbiAgICAgKiByZXNwb25zZSwgdGhpcyBtYXkgbm90IGJlIGNvbXB1dGFibGUgYW5kIHRodXMgbWF5IG5vdCBiZSBwcmVzZW50LlxyXG4gICAgICovXHJcbiAgICB0b3RhbD86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIG91dGdvaW5nIEhUVFAgcmVxdWVzdCB3aXRoIGFuIG9wdGlvbmFsIHR5cGVkIGJvZHkuXHJcbiAqXHJcbiAqIGBIdHRwUmVxdWVzdGAgcmVwcmVzZW50cyBhbiBvdXRnb2luZyByZXF1ZXN0LCBpbmNsdWRpbmcgVVJMLCBtZXRob2QsXHJcbiAqIGhlYWRlcnMsIGJvZHksIGFuZCBvdGhlciByZXF1ZXN0IGNvbmZpZ3VyYXRpb24gb3B0aW9ucy4gSW5zdGFuY2VzIHNob3VsZCBiZVxyXG4gKiBhc3N1bWVkIHRvIGJlIGltbXV0YWJsZS4gVG8gbW9kaWZ5IGEgYEh0dHBSZXF1ZXN0YCwgdGhlIGBjbG9uZWBcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwUmVxdWVzdDxUPiB7XHJcbiAgICByZWFkb25seSB1cmw6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlcXVlc3QgYm9keSwgb3IgYG51bGxgIGlmIG9uZSBpc24ndCBzZXQuXHJcbiAgICAgKlxyXG4gICAgICogQm9kaWVzIGFyZSBub3QgZW5mb3JjZWQgdG8gYmUgaW1tdXRhYmxlLCBhcyB0aGV5IGNhbiBpbmNsdWRlIGEgcmVmZXJlbmNlIHRvIGFueVxyXG4gICAgICogdXNlci1kZWZpbmVkIGRhdGEgdHlwZS4gSG93ZXZlciwgaW50ZXJjZXB0b3JzIHNob3VsZCB0YWtlIGNhcmUgdG8gcHJlc2VydmVcclxuICAgICAqIGlkZW1wb3RlbmNlIGJ5IHRyZWF0aW5nIHRoZW0gYXMgc3VjaC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYm9keTogVCB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIE91dGdvaW5nIGhlYWRlcnMgZm9yIHRoaXMgcmVxdWVzdC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyByZXF1ZXN0IHNob3VsZCBiZSBtYWRlIGluIGEgd2F5IHRoYXQgZXhwb3NlcyBwcm9ncmVzcyBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogUHJvZ3Jlc3MgZXZlbnRzIGFyZSBleHBlbnNpdmUgKGNoYW5nZSBkZXRlY3Rpb24gcnVucyBvbiBlYWNoIGV2ZW50KSBhbmQgc29cclxuICAgICAqIHRoZXkgc2hvdWxkIG9ubHkgYmUgcmVxdWVzdGVkIGlmIHRoZSBjb25zdW1lciBpbnRlbmRzIHRvIG1vbml0b3IgdGhlbS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyByZXF1ZXN0IHNob3VsZCBiZSBzZW50IHdpdGggb3V0Z29pbmcgY3JlZGVudGlhbHMgKGNvb2tpZXMpLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSB3aXRoQ3JlZGVudGlhbHM6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBleHBlY3RlZCByZXNwb25zZSB0eXBlIG9mIHRoZSBzZXJ2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHBhcnNlIHRoZSByZXNwb25zZSBhcHByb3ByaWF0ZWx5IGJlZm9yZSByZXR1cm5pbmcgaXQgdG9cclxuICAgICAqIHRoZSByZXF1ZXN0ZWUuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG91dGdvaW5nIEhUVFAgcmVxdWVzdCBtZXRob2QuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG1ldGhvZDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRnb2luZyBVUkwgcGFyYW1ldGVycy5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgcGFyYW1zOiBIdHRwUGFyYW1zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3V0Z29pbmcgVVJMIHdpdGggYWxsIFVSTCBwYXJhbWV0ZXJzIHNldC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgdXJsV2l0aFBhcmFtczogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IobWV0aG9kOiAnREVMRVRFJyB8ICdHRVQnIHwgJ0hFQUQnIHwgJ0pTT05QJyB8ICdPUFRJT05TJywgdXJsOiBzdHJpbmcsIGluaXQ/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pO1xyXG4gICAgY29uc3RydWN0b3IobWV0aG9kOiAnUE9TVCcgfCAnUFVUJyB8ICdQQVRDSCcsIHVybDogc3RyaW5nLCBib2R5OiBUIHwgbnVsbCwgaW5pdD86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXM7XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIGJvZHk6IFQgfCBudWxsLCBpbml0Pzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcztcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtIHRoZSBmcmVlLWZvcm0gYm9keSBpbnRvIGEgc2VyaWFsaXplZCBmb3JtYXQgc3VpdGFibGUgZm9yXHJcbiAgICAgKiB0cmFuc21pc3Npb24gdG8gdGhlIHNlcnZlci5cclxuICAgICAqL1xyXG4gICAgc2VyaWFsaXplQm9keSgpOiBBcnJheUJ1ZmZlciB8IEJsb2IgfCBGb3JtRGF0YSB8IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIEV4YW1pbmUgdGhlIGJvZHkgYW5kIGF0dGVtcHQgdG8gaW5mZXIgYW4gYXBwcm9wcmlhdGUgTUlNRSB0eXBlXHJcbiAgICAgKiBmb3IgaXQuXHJcbiAgICAgKlxyXG4gICAgICogSWYgbm8gc3VjaCB0eXBlIGNhbiBiZSBpbmZlcnJlZCwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYG51bGxgLlxyXG4gICAgICovXHJcbiAgICBkZXRlY3RDb250ZW50VHlwZUhlYWRlcigpOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY2xvbmUoKTogSHR0cFJlcXVlc3Q8VD47XHJcbiAgICBjbG9uZSh1cGRhdGU6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXM7XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgICAgIGJvZHk/OiBUIHwgbnVsbDtcclxuICAgICAgICBtZXRob2Q/OiBzdHJpbmc7XHJcbiAgICAgICAgdXJsPzogc3RyaW5nO1xyXG4gICAgICAgIHNldEhlYWRlcnM/OiB7XHJcbiAgICAgICAgICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFBhcmFtcz86IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgIH0pOiBIdHRwUmVxdWVzdDxUPjtcclxuICAgIGNsb25lPFY+KHVwZGF0ZToge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcztcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICAgICAgYm9keT86IFYgfCBudWxsO1xyXG4gICAgICAgIG1ldGhvZD86IHN0cmluZztcclxuICAgICAgICB1cmw/OiBzdHJpbmc7XHJcbiAgICAgICAgc2V0SGVhZGVycz86IHtcclxuICAgICAgICAgICAgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0UGFyYW1zPzoge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZztcclxuICAgICAgICB9O1xyXG4gICAgfSk6IEh0dHBSZXF1ZXN0PFY+O1xyXG59XHJcblxyXG4vKipcclxuICogQSBmdWxsIEhUVFAgcmVzcG9uc2UsIGluY2x1ZGluZyBhIHR5cGVkIHJlc3BvbnNlIGJvZHkgKHdoaWNoIG1heSBiZSBgbnVsbGBcclxuICogaWYgb25lIHdhcyBub3QgcmV0dXJuZWQpLlxyXG4gKlxyXG4gKiBgSHR0cFJlc3BvbnNlYCBpcyBhIGBIdHRwRXZlbnRgIGF2YWlsYWJsZSBvbiB0aGUgcmVzcG9uc2UgZXZlbnRcclxuICogc3RyZWFtLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwUmVzcG9uc2U8VD4gZXh0ZW5kcyBIdHRwUmVzcG9uc2VCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlc3BvbnNlIGJvZHksIG9yIGBudWxsYCBpZiBvbmUgd2FzIG5vdCByZXR1cm5lZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYm9keTogVCB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBgSHR0cFJlc3BvbnNlYC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IHtcclxuICAgICAgICBib2R5PzogVCB8IG51bGw7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xyXG4gICAgICAgIHN0YXR1cz86IG51bWJlcjtcclxuICAgICAgICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIHVybD86IHN0cmluZztcclxuICAgIH0pO1xyXG4gICAgcmVhZG9ubHkgdHlwZTogSHR0cEV2ZW50VHlwZS5SZXNwb25zZTtcclxuICAgIGNsb25lKCk6IEh0dHBSZXNwb25zZTxUPjtcclxuICAgIGNsb25lKHVwZGF0ZToge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcclxuICAgICAgICBzdGF0dXM/OiBudW1iZXI7XHJcbiAgICAgICAgc3RhdHVzVGV4dD86IHN0cmluZztcclxuICAgICAgICB1cmw/OiBzdHJpbmc7XHJcbiAgICB9KTogSHR0cFJlc3BvbnNlPFQ+O1xyXG4gICAgY2xvbmU8Vj4odXBkYXRlOiB7XHJcbiAgICAgICAgYm9keT86IFYgfCBudWxsO1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcclxuICAgICAgICBzdGF0dXM/OiBudW1iZXI7XHJcbiAgICAgICAgc3RhdHVzVGV4dD86IHN0cmluZztcclxuICAgICAgICB1cmw/OiBzdHJpbmc7XHJcbiAgICB9KTogSHR0cFJlc3BvbnNlPFY+O1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgYm90aCBgSHR0cFJlc3BvbnNlYCBhbmQgYEh0dHBIZWFkZXJSZXNwb25zZWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEh0dHBSZXNwb25zZUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgcmVzcG9uc2UgaGVhZGVycy5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICAvKipcclxuICAgICAqIFJlc3BvbnNlIHN0YXR1cyBjb2RlLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBzdGF0dXM6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGV4dHVhbCBkZXNjcmlwdGlvbiBvZiByZXNwb25zZSBzdGF0dXMgY29kZS5cclxuICAgICAqXHJcbiAgICAgKiBEbyBub3QgZGVwZW5kIG9uIHRoaXMuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHN0YXR1c1RleHQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVVJMIG9mIHRoZSByZXNvdXJjZSByZXRyaWV2ZWQsIG9yIG51bGwgaWYgbm90IGF2YWlsYWJsZS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgdXJsOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSBzdGF0dXMgY29kZSBmYWxscyBpbiB0aGUgMnh4IHJhbmdlLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBvazogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBvZiB0aGUgcmVzcG9uc2UsIG5hcnJvd2VkIHRvIGVpdGhlciB0aGUgZnVsbCByZXNwb25zZSBvciB0aGUgaGVhZGVyLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSB0eXBlOiBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlIHwgSHR0cEV2ZW50VHlwZS5SZXNwb25zZUhlYWRlcjtcclxuICAgIC8qKlxyXG4gICAgICogU3VwZXItY29uc3RydWN0b3IgZm9yIGFsbCByZXNwb25zZXMuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHNpbmdsZSBwYXJhbWV0ZXIgYWNjZXB0ZWQgaXMgYW4gaW5pdGlhbGl6YXRpb24gaGFzaC4gQW55IHByb3BlcnRpZXNcclxuICAgICAqIG9mIHRoZSByZXNwb25zZSBwYXNzZWQgdGhlcmUgd2lsbCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGluaXQ6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgICAgICAgc3RhdHVzPzogbnVtYmVyO1xyXG4gICAgICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgdXJsPzogc3RyaW5nO1xyXG4gICAgfSwgZGVmYXVsdFN0YXR1cz86IG51bWJlciwgZGVmYXVsdFN0YXR1c1RleHQ/OiBzdHJpbmcpO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgaW5kaWNhdGluZyB0aGF0IHRoZSByZXF1ZXN0IHdhcyBzZW50IHRvIHRoZSBzZXJ2ZXIuIFVzZWZ1bFxyXG4gKiB3aGVuIGEgcmVxdWVzdCBtYXkgYmUgcmV0cmllZCBtdWx0aXBsZSB0aW1lcywgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlblxyXG4gKiByZXRyaWVzIG9uIHRoZSBmaW5hbCBldmVudCBzdHJlYW0uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBIdHRwU2VudEV2ZW50IHtcclxuICAgIHR5cGU6IEh0dHBFdmVudFR5cGUuU2VudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHVwbG9hZCBwcm9ncmVzcyBldmVudC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEh0dHBVcGxvYWRQcm9ncmVzc0V2ZW50IGV4dGVuZHMgSHR0cFByb2dyZXNzRXZlbnQge1xyXG4gICAgdHlwZTogSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcztcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGVuY29kaW5nIGFuZCBkZWNvZGluZyBvZiBVUkwgcGFyYW1ldGVyIGFuZCBxdWVyeS1zdHJpbmcgdmFsdWVzLlxyXG4gKlxyXG4gKiBTZXJpYWxpemVzIGFuZCBwYXJzZXMgVVJMIHBhcmFtZXRlciBrZXlzIGFuZCB2YWx1ZXMgdG8gZW5jb2RlIGFuZCBkZWNvZGUgdGhlbS5cclxuICogSWYgeW91IHBhc3MgVVJMIHF1ZXJ5IHBhcmFtZXRlcnMgd2l0aG91dCBlbmNvZGluZyxcclxuICogdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgY2FuIGJlIG1pc2ludGVycHJldGVkIGF0IHRoZSByZWNlaXZpbmcgZW5kLlxyXG4gKlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwVXJsRW5jb2RpbmdDb2RlYyBpbXBsZW1lbnRzIEh0dHBQYXJhbWV0ZXJDb2RlYyB7XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZXMgYSBrZXkgbmFtZSBmb3IgYSBVUkwgcGFyYW1ldGVyIG9yIHF1ZXJ5LXN0cmluZy5cclxuICAgICAqIEBwYXJhbSBrZXkgVGhlIGtleSBuYW1lLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVuY29kZWQga2V5IG5hbWUuXHJcbiAgICAgKi9cclxuICAgIGVuY29kZUtleShrZXk6IHN0cmluZyk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlcyB0aGUgdmFsdWUgb2YgYSBVUkwgcGFyYW1ldGVyIG9yIHF1ZXJ5LXN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZW5jb2RlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlcyBhbiBlbmNvZGVkIFVSTCBwYXJhbWV0ZXIgb3IgcXVlcnktc3RyaW5nIGtleS5cclxuICAgICAqIEBwYXJhbSBrZXkgVGhlIGVuY29kZWQga2V5IG5hbWUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCBrZXkgbmFtZS5cclxuICAgICAqL1xyXG4gICAgZGVjb2RlS2V5KGtleTogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgVVJMIHBhcmFtZXRlciBvciBxdWVyeS1zdHJpbmcgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVuY29kZWQgdmFsdWUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZGVjb2RlVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgdXNlci1kZWZpbmVkIGV2ZW50LlxyXG4gKlxyXG4gKiBHcm91cGluZyBhbGwgY3VzdG9tIGV2ZW50cyB1bmRlciB0aGlzIHR5cGUgZW5zdXJlcyB0aGV5IHdpbGwgYmUgaGFuZGxlZFxyXG4gKiBhbmQgZm9yd2FyZGVkIGJ5IGFsbCBpbXBsZW1lbnRhdGlvbnMgb2YgaW50ZXJjZXB0b3JzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSHR0cFVzZXJFdmVudDxUPiB7XHJcbiAgICB0eXBlOiBIdHRwRXZlbnRUeXBlLlVzZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVc2VzIGBYTUxIdHRwUmVxdWVzdGAgdG8gc2VuZCByZXF1ZXN0cyB0byBhIGJhY2tlbmQgc2VydmVyLlxyXG4gKiBAc2VlIGBIdHRwSGFuZGxlcmBcclxuICogQHNlZSBgSnNvbnBDbGllbnRCYWNrZW5kYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwWGhyQmFja2VuZCBpbXBsZW1lbnRzIEh0dHBCYWNrZW5kIHtcclxuICAgIHByaXZhdGUgeGhyRmFjdG9yeTtcclxuICAgIGNvbnN0cnVjdG9yKHhockZhY3Rvcnk6IFhockZhY3RvcnkpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzZXMgYSByZXF1ZXN0IGFuZCByZXR1cm5zIGEgc3RyZWFtIG9mIHJlc3BvbnNlIGV2ZW50cy5cclxuICAgICAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgQW4gb2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UgZXZlbnRzLlxyXG4gICAgICovXHJcbiAgICBoYW5kbGUocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgWFNSRiB0b2tlbiB0byB1c2Ugd2l0aCB0aGUgbmV4dCBvdXRnb2luZyByZXF1ZXN0LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBIdHRwWHNyZlRva2VuRXh0cmFjdG9yIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBYU1JGIHRva2VuIHRvIHVzZSB3aXRoIGFuIG91dGdvaW5nIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgZm9yIGV2ZXJ5IHJlcXVlc3QsIHNvIHRoZSB0b2tlbiBtYXkgY2hhbmdlIGJldHdlZW4gcmVxdWVzdHMuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldFRva2VuKCk6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgYW4gYEh0dHBSZXF1ZXN0YCB3aXRoIHRoZSBKU09OUCBtZXRob2QsXHJcbiAqIGJ5IHBlcmZvcm1pbmcgSlNPTlAgc3R5bGUgcmVxdWVzdHMuXHJcbiAqIEBzZWUgYEh0dHBIYW5kbGVyYFxyXG4gKiBAc2VlIGBIdHRwWGhyQmFja2VuZGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSnNvbnBDbGllbnRCYWNrZW5kIGltcGxlbWVudHMgSHR0cEJhY2tlbmQge1xyXG4gICAgcHJpdmF0ZSBjYWxsYmFja01hcDtcclxuICAgIHByaXZhdGUgZG9jdW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFja01hcDogybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9odHRwX2h0dHBfYiwgZG9jdW1lbnQ6IGFueSk7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgbmV4dCBjYWxsYmFjayBtZXRob2QsIGJ5IGluY3JlbWVudGluZyB0aGUgZ2xvYmFsIGBuZXh0UmVxdWVzdElkYC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBuZXh0Q2FsbGJhY2s7XHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3NlcyBhIEpTT05QIHJlcXVlc3QgYW5kIHJldHVybnMgYW4gZXZlbnQgc3RyZWFtIG9mIHRoZSByZXN1bHRzLlxyXG4gICAgICogQHBhcmFtIHJlcSBUaGUgcmVxdWVzdCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBoYW5kbGUocmVxOiBIdHRwUmVxdWVzdDxuZXZlcj4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIElkZW50aWZpZXMgcmVxdWVzdHMgd2l0aCB0aGUgbWV0aG9kIEpTT05QIGFuZFxyXG4gKiBzaGlmdHMgdGhlbSB0byB0aGUgYEpzb25wQ2xpZW50QmFja2VuZGAuXHJcbiAqXHJcbiAqIEBzZWUgYEh0dHBJbnRlcmNlcHRvcmBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSnNvbnBJbnRlcmNlcHRvciB7XHJcbiAgICBwcml2YXRlIGpzb25wO1xyXG4gICAgY29uc3RydWN0b3IoanNvbnA6IEpzb25wQ2xpZW50QmFja2VuZCk7XHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgYW5kIGhhbmRsZXMgYSBnaXZlbiBKU09OUCByZXF1ZXN0LlxyXG4gICAgICogQHBhcmFtIHJlcSBUaGUgb3V0Z29pbmcgcmVxdWVzdCBvYmplY3QgdG8gaGFuZGxlLlxyXG4gICAgICogQHBhcmFtIG5leHQgVGhlIG5leHQgaW50ZXJjZXB0b3IgaW4gdGhlIGNoYWluLCBvciB0aGUgYmFja2VuZFxyXG4gICAgICogaWYgbm8gaW50ZXJjZXB0b3JzIHJlbWFpbiBpbiB0aGUgY2hhaW4uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIG9mIHRoZSBldmVudCBzdHJlYW0uXHJcbiAgICAgKi9cclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHdyYXBwZXIgYXJvdW5kIHRoZSBgWE1MSHR0cFJlcXVlc3RgIGNvbnN0cnVjdG9yLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBYaHJGYWN0b3J5IHtcclxuICAgIGFic3RyYWN0IGJ1aWxkKCk6IFhNTEh0dHBSZXF1ZXN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2h0dHBfaHR0cF9hIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBESSB0b2tlbi9hYnN0cmFjdCB0eXBlIHJlcHJlc2VudGluZyBhIG1hcCBvZiBKU09OUCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEluIHRoZSBicm93c2VyLCB0aGlzIHNob3VsZCBhbHdheXMgYmUgdGhlIGB3aW5kb3dgIG9iamVjdC5cclxuICpcclxuICpcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25faHR0cF9odHRwX2Ige1xyXG4gICAgW2tleTogc3RyaW5nXTogKGRhdGE6IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXJlIHRvIHN0b3JlIEpTT05QIGNhbGxiYWNrcy5cclxuICpcclxuICogT3JkaW5hcmlseSBKU09OUCBjYWxsYmFja3MgYXJlIHN0b3JlZCBvbiB0aGUgYHdpbmRvd2Agb2JqZWN0LCBidXQgdGhpcyBtYXkgbm90IGV4aXN0XHJcbiAqIGluIHRlc3QgZW52aXJvbm1lbnRzLiBJbiB0aGF0IGNhc2UsIGNhbGxiYWNrcyBhcmUgc3RvcmVkIG9uIGFuIGFub255bW91cyBvYmplY3QgaW5zdGVhZC5cclxuICpcclxuICpcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25faHR0cF9odHRwX2MoKTogT2JqZWN0O1xyXG5cclxuLyoqXHJcbiAqIEEgZmFjdG9yeSBmb3IgYEh0dHBYaHJCYWNrZW5kYCB0aGF0IHVzZXMgdGhlIGBYTUxIdHRwUmVxdWVzdGAgYnJvd3NlciBBUEkuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2h0dHBfaHR0cF9kIGltcGxlbWVudHMgWGhyRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgYnVpbGQoKTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2h0dHBfaHR0cF9lOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+O1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9odHRwX2h0dHBfZjogSW5qZWN0aW9uVG9rZW48c3RyaW5nPjtcclxuXHJcbi8qKlxyXG4gKiBgSHR0cFhzcmZUb2tlbkV4dHJhY3RvcmAgd2hpY2ggcmV0cmlldmVzIHRoZSB0b2tlbiBmcm9tIGEgY29va2llLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9odHRwX2h0dHBfZyBpbXBsZW1lbnRzIEh0dHBYc3JmVG9rZW5FeHRyYWN0b3Ige1xyXG4gICAgcHJpdmF0ZSBkb2M7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgcHJpdmF0ZSBjb29raWVOYW1lO1xyXG4gICAgcHJpdmF0ZSBsYXN0Q29va2llU3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBsYXN0VG9rZW47XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2M6IGFueSwgcGxhdGZvcm06IHN0cmluZywgY29va2llTmFtZTogc3RyaW5nKTtcclxuICAgIGdldFRva2VuKCk6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBgSHR0cEludGVyY2VwdG9yYCB3aGljaCBhZGRzIGFuIFhTUkYgdG9rZW4gdG8gZWxpZ2libGUgb3V0Z29pbmcgcmVxdWVzdHMuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2h0dHBfaHR0cF9oIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICAgIHByaXZhdGUgdG9rZW5TZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJOYW1lO1xyXG4gICAgY29uc3RydWN0b3IodG9rZW5TZXJ2aWNlOiBIdHRwWHNyZlRva2VuRXh0cmFjdG9yLCBoZWFkZXJOYW1lOiBzdHJpbmcpO1xyXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGluamVjdGFibGUgYEh0dHBIYW5kbGVyYCB0aGF0IGFwcGxpZXMgbXVsdGlwbGUgaW50ZXJjZXB0b3JzXHJcbiAqIHRvIGEgcmVxdWVzdCBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGUgZ2l2ZW4gYEh0dHBCYWNrZW5kYC5cclxuICpcclxuICogVGhlIGludGVyY2VwdG9ycyBhcmUgbG9hZGVkIGxhemlseSBmcm9tIHRoZSBpbmplY3RvciwgdG8gYWxsb3dcclxuICogaW50ZXJjZXB0b3JzIHRvIHRoZW1zZWx2ZXMgaW5qZWN0IGNsYXNzZXMgZGVwZW5kaW5nIGluZGlyZWN0bHlcclxuICogb24gYEh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyYCBpdHNlbGYuXHJcbiAqIEBzZWUgYEh0dHBJbnRlcmNlcHRvcmBcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1SHR0cEludGVyY2VwdGluZ0hhbmRsZXIgaW1wbGVtZW50cyBIdHRwSGFuZGxlciB7XHJcbiAgICBwcml2YXRlIGJhY2tlbmQ7XHJcbiAgICBwcml2YXRlIGluamVjdG9yO1xyXG4gICAgcHJpdmF0ZSBjaGFpbjtcclxuICAgIGNvbnN0cnVjdG9yKGJhY2tlbmQ6IEh0dHBCYWNrZW5kLCBpbmplY3RvcjogSW5qZWN0b3IpO1xyXG4gICAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xyXG59XHJcblxyXG5leHBvcnQgeyB9XHJcbiJdfQ==