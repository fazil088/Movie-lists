/* The code is importing the `api_key` variable from the `./Constants/constants` file. It then exports
four constants: `popular`, `trending`, `topRated`, and `upComing`. */
import { api_key } from "./Constants/constants";

export const popular = `movie/popular?api_key=${api_key}`;
export const trending = `trending/all/day`
export const topRated = `movie/top_rated`;
export const upComing = `movie/upcoming`;