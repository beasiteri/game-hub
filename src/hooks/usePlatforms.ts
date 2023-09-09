import platform from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platform, isLoading: false, error: null})

export default usePlatforms;