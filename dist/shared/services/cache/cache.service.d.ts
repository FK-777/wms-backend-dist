import { Cache } from "cache-manager";
export declare class CacheService {
    private cacheManager;
    private readonly ttl;
    constructor(cacheManager: Cache);
    set(key: string, value: any, ttl?: number): Promise<any>;
    get(key: string): Promise<unknown>;
    delete(key: string): Promise<any>;
    reset(): Promise<void>;
}
