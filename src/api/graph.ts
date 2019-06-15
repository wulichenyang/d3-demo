import {
  get,
} from "./http"

export const getForceDirectedGraphData = async (): Promise<any> => {
  return get('/graph/forceDirectedGraph')
}

export const getSunburstGraphData = async (): Promise<any> => {
  return get('/graph/sunburstGraphData')
}

// export const getSongDetail = async (id: number): Promise<any> => {
//   return get(`/song/detail?ids=${id}`)
// }

// export const getAlbumDetail = async (id: number): Promise<any> => {
//   return get(`/album?id=${id}`)
// }

// export const getRecommendList = async (): Promise<any> => {
//   return get('/recommend/resource')
// }

// export const getRecommendSongs = async (): Promise<any> => {
//   return get('/recommend/songs')
// }

// export const fetchMusicList = async (id: number): Promise<any> => {
//   return get(`/playlist/detail?id=${id}`)
// }

