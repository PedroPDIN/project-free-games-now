type SystemRequirements = {
  os: string,
  processor: string,
  memory: string,
  graphics: string,
  storage: string,
}

type ScreensGame = {
  id: number,
  image: string,
}

export interface IGame {
  id: number,
  title: string,
  thumbnail: string,
  short_description: string,
  game_url: string,
  genre: string,
  platform: string,
  publisher: string,
  developer: string,
  release_date: string,
  freetogame_profile_url: string,
}

export interface IGameId {
  id: number,
  title: string,
  thumbnail: string,
  status: string,
  short_description: string,
  description: string,
  game_url: string,
  genre: string,
  platform: string,
  publisher: string,
  developer: string,
  release_date: string,
  freetogame_profile_url: string,
  minimum_system_requirements: SystemRequirements,
  screenshots: ScreensGame[]
}
