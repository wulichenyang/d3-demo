export interface SunburstChild {
  name: string,
  children: SunburstChild[] | SunburstLeaf[]
}

export interface SunburstLeaf {
  name: string,
  value: number
}

export interface IGraphViewData {
  name: string,
  children: SunburstChild[] | SunburstLeaf[] | [],
}

export interface D3dom {
  [key: string]: any
}