export type NoLeadingSlash<T extends string> = T extends `/${infer U}` ? U : T;

export type PromiseType<T extends Promise<unknown>> = T extends Promise<infer P> ? P : never;

// 注意: 自動生成スクリプトによって参照される
export type ElementInfo = {
  name: string;
  url: string;
  deprecated: boolean;
  experimental: boolean;
};
