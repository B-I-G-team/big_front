//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../axios-client';
import { useQuery, useMutation } from '@tanstack/react-query';
import type { UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { trimArrayEnd, isParameterObject, getBaseUrl, addMetaToOptions  } from './helpers';
import type { QueryMetaContextValue } from 'react-query-swagger';
import { QueryMetaContext } from 'react-query-swagger';
import { useContext } from 'react';
import { Client as ClientClass } from '../axios-client';
import { createClient, getClientFactory } from './helpers';

export const Client = () => getClientFactory()(ClientClass);
import type { AxiosRequestConfig } from 'axios';

export type CallbackQueryParameters = {
  code: string;
};

export type TeamsAllQueryParameters = {
  offset: string | null | undefined;
  limit: string | null | undefined;
  search: string | null | undefined;
};

    
export function anonymousUrl(): string {
  let url_ = getBaseUrl() + "/";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let anonymousDefaultOptions: UseQueryOptions<void, unknown, void> = {
  queryFn: __anonymous,
};
export function getAnonymousDefaultOptions(): UseQueryOptions<void, unknown, void> {
  return anonymousDefaultOptions;
};
export function setAnonymousDefaultOptions(options: UseQueryOptions<void, unknown, void>) {
  anonymousDefaultOptions = options;
}

export function anonymousQueryKey(): QueryKey;
export function anonymousQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'Client',
      'anonymous',
    ]);
}
function __anonymous() {
  return Client().anonymous(
    );
}

/**
 * @return Default Response
 */
export function useAnonymousQuery<TSelectData = void, TError = unknown>(options?: UseQueryOptions<void, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useAnonymousQuery<TSelectData = void, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<void, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<void, TError, TSelectData>({
    queryFn: __anonymous,
    queryKey: anonymousQueryKey(),
    ...anonymousDefaultOptions as unknown as UseQueryOptions<void, TError, TSelectData>,
    ...options,
  });
}
/**
 * @return Default Response
 */
export function setAnonymousData(queryClient: QueryClient, updater: (data: void | undefined) => void, ) {
  queryClient.setQueryData(anonymousQueryKey(),
    updater
  );
}

/**
 * @return Default Response
 */
export function setAnonymousDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: void | undefined) => void) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function kakaoUrl(): string {
  let url_ = getBaseUrl() + "/auth/kakao";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let kakaoDefaultOptions: UseQueryOptions<void, unknown, void> = {
  queryFn: __kakao,
};
export function getKakaoDefaultOptions(): UseQueryOptions<void, unknown, void> {
  return kakaoDefaultOptions;
};
export function setKakaoDefaultOptions(options: UseQueryOptions<void, unknown, void>) {
  kakaoDefaultOptions = options;
}

export function kakaoQueryKey(): QueryKey;
export function kakaoQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'Client',
      'kakao',
    ]);
}
function __kakao() {
  return Client().kakao(
    );
}

/**
 * @return Default Response
 */
export function useKakaoQuery<TSelectData = void, TError = unknown>(options?: UseQueryOptions<void, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useKakaoQuery<TSelectData = void, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<void, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<void, TError, TSelectData>({
    queryFn: __kakao,
    queryKey: kakaoQueryKey(),
    ...kakaoDefaultOptions as unknown as UseQueryOptions<void, TError, TSelectData>,
    ...options,
  });
}
/**
 * @return Default Response
 */
export function setKakaoData(queryClient: QueryClient, updater: (data: void | undefined) => void, ) {
  queryClient.setQueryData(kakaoQueryKey(),
    updater
  );
}

/**
 * @return Default Response
 */
export function setKakaoDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: void | undefined) => void) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function callbackUrl(code: string): string {
  let url_ = getBaseUrl() + "/auth/kakao/callback?";
  if (code === undefined || code === null)
    throw new Error("The parameter 'code' must be defined and cannot be null.");
  else
    url_ += "code=" + encodeURIComponent("" + code) + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let callbackDefaultOptions: UseQueryOptions<void, unknown, void> = {
  queryFn: __callback,
};
export function getCallbackDefaultOptions(): UseQueryOptions<void, unknown, void> {
  return callbackDefaultOptions;
};
export function setCallbackDefaultOptions(options: UseQueryOptions<void, unknown, void>) {
  callbackDefaultOptions = options;
}

export function callbackQueryKey(code: string): QueryKey;
export function callbackQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { code,  } = params[0] as CallbackQueryParameters;

    return trimArrayEnd([
        'Client',
        'callback',
        code as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'callback',
        ...params
      ]);
  }
}
function __callback(context: QueryFunctionContext) {
  return Client().callback(
      context.queryKey[2] as string    );
}

export function useCallbackQuery<TSelectData = void, TError = unknown>(dto: CallbackQueryParameters, options?: UseQueryOptions<void, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
/**
 * @return Default Response
 * @deprecated
 */
export function useCallbackQuery<TSelectData = void, TError = unknown>(code: string, options?: UseQueryOptions<void, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useCallbackQuery<TSelectData = void, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<void, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let code: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ code,  } = params[0] as CallbackQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [code, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<void, TError, TSelectData>({
    queryFn: __callback,
    queryKey: callbackQueryKey(code),
    ...callbackDefaultOptions as unknown as UseQueryOptions<void, TError, TSelectData>,
    ...options,
  });
}
/**
 * @return Default Response
 * @deprecated
 */
export function setCallbackData(queryClient: QueryClient, updater: (data: void | undefined) => void, code: string) {
  queryClient.setQueryData(callbackQueryKey(code),
    updater
  );
}

/**
 * @return Default Response
 * @deprecated
 */
export function setCallbackDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: void | undefined) => void) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function teamsAllUrl(offset: string | null | undefined, limit: string | null | undefined, search: string | null | undefined): string {
  let url_ = getBaseUrl() + "/teams?";
if (offset !== undefined && offset !== null)
    url_ += "offset=" + encodeURIComponent("" + offset) + "&";
if (limit !== undefined && limit !== null)
    url_ += "limit=" + encodeURIComponent("" + limit) + "&";
if (search !== undefined && search !== null)
    url_ += "search=" + encodeURIComponent("" + search) + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let teamsAllDefaultOptions: UseQueryOptions<Types.Anonymous[], unknown, Types.Anonymous[]> = {
  queryFn: __teamsAll,
};
export function getTeamsAllDefaultOptions(): UseQueryOptions<Types.Anonymous[], unknown, Types.Anonymous[]> {
  return teamsAllDefaultOptions;
};
export function setTeamsAllDefaultOptions(options: UseQueryOptions<Types.Anonymous[], unknown, Types.Anonymous[]>) {
  teamsAllDefaultOptions = options;
}

export function teamsAllQueryKey(dto: TeamsAllQueryParameters): QueryKey;
export function teamsAllQueryKey(offset: string | null | undefined, limit: string | null | undefined, search: string | null | undefined): QueryKey;
export function teamsAllQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { offset, limit, search,  } = params[0] as TeamsAllQueryParameters;

    return trimArrayEnd([
        'Client',
        'teamsAll',
        offset as any,
        limit as any,
        search as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'teamsAll',
        ...params
      ]);
  }
}
function __teamsAll(context: QueryFunctionContext) {
  return Client().teamsAll(
      context.queryKey[2] as string | null | undefined,       context.queryKey[3] as string | null | undefined,       context.queryKey[4] as string | null | undefined    );
}

export function useTeamsAllQuery<TSelectData = Types.Anonymous[], TError = unknown>(dto: TeamsAllQueryParameters, options?: UseQueryOptions<Types.Anonymous[], TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
/**
 * @param offset (optional) number
 * @param limit (optional) number
 * @param search (optional) 검색어
 * @return Default Response
 */
export function useTeamsAllQuery<TSelectData = Types.Anonymous[], TError = unknown>(offset: string | null | undefined, limit: string | null | undefined, search: string | null | undefined, options?: UseQueryOptions<Types.Anonymous[], TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useTeamsAllQuery<TSelectData = Types.Anonymous[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.Anonymous[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let offset: any = undefined;
  let limit: any = undefined;
  let search: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ offset, limit, search,  } = params[0] as TeamsAllQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [offset, limit, search, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Types.Anonymous[], TError, TSelectData>({
    queryFn: __teamsAll,
    queryKey: teamsAllQueryKey(offset, limit, search),
    ...teamsAllDefaultOptions as unknown as UseQueryOptions<Types.Anonymous[], TError, TSelectData>,
    ...options,
  });
}
/**
 * @param offset (optional) number
 * @param limit (optional) number
 * @param search (optional) 검색어
 * @return Default Response
 */
export function setTeamsAllData(queryClient: QueryClient, updater: (data: Types.Anonymous[] | undefined) => Types.Anonymous[], offset: string | null | undefined, limit: string | null | undefined, search: string | null | undefined) {
  queryClient.setQueryData(teamsAllQueryKey(offset, limit, search),
    updater
  );
}

/**
 * @param offset (optional) number
 * @param limit (optional) number
 * @param search (optional) 검색어
 * @return Default Response
 */
export function setTeamsAllDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.Anonymous[] | undefined) => Types.Anonymous[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function teamsUrl(): string {
  let url_ = getBaseUrl() + "/teams";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function teamsMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'teams',
    ]);
}

/**
 * @param body (optional) 
 * @return Default Response
 */
export function useTeamsMutation<TContext>(options?: Omit<UseMutationOptions<Types.Anonymous2, unknown, Types.Body, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.Anonymous2, unknown, Types.Body, TContext> {
  const key = teamsMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.Body) => Client().teams(body), {...options, mutationKey: key});
}
  
    
export function meGETUrl(): string {
  let url_ = getBaseUrl() + "/users/me";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let meGETDefaultOptions: UseQueryOptions<Types.Anonymous3, unknown, Types.Anonymous3> = {
  queryFn: __meGET,
};
export function getMeGETDefaultOptions(): UseQueryOptions<Types.Anonymous3, unknown, Types.Anonymous3> {
  return meGETDefaultOptions;
};
export function setMeGETDefaultOptions(options: UseQueryOptions<Types.Anonymous3, unknown, Types.Anonymous3>) {
  meGETDefaultOptions = options;
}

export function meGETQueryKey(): QueryKey;
export function meGETQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'Client',
      'meGET',
    ]);
}
function __meGET() {
  return Client().meGET(
    );
}

/**
 * @return Default Response
 */
export function useMeGETQuery<TSelectData = Types.Anonymous3, TError = unknown>(options?: UseQueryOptions<Types.Anonymous3, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useMeGETQuery<TSelectData = Types.Anonymous3, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.Anonymous3, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Types.Anonymous3, TError, TSelectData>({
    queryFn: __meGET,
    queryKey: meGETQueryKey(),
    ...meGETDefaultOptions as unknown as UseQueryOptions<Types.Anonymous3, TError, TSelectData>,
    ...options,
  });
}
/**
 * @return Default Response
 */
export function setMeGETData(queryClient: QueryClient, updater: (data: Types.Anonymous3 | undefined) => Types.Anonymous3, ) {
  queryClient.setQueryData(meGETQueryKey(),
    updater
  );
}

/**
 * @return Default Response
 */
export function setMeGETDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.Anonymous3 | undefined) => Types.Anonymous3) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function mePUTUrl(): string {
  let url_ = getBaseUrl() + "/users/me";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function mePUTMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'mePUT',
    ]);
}

/**
 * @param body (optional) 
 * @return Default Response
 */
export function useMePUTMutation<TContext>(options?: Omit<UseMutationOptions<Types.Anonymous4, unknown, Types.Body2, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.Anonymous4, unknown, Types.Body2, TContext> {
  const key = mePUTMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.Body2) => Client().mePUT(body), {...options, mutationKey: key});
}