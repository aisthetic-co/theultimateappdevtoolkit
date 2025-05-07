// Extract the type excluding null
export type WithoutNull<T> = T extends null ? never : T;