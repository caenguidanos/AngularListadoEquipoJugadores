export interface TeamPlayer {
  player_id: number
  firstname: string
  lastname: string
  position: string
  age: number
  nationality: string
  season: number
  team_id: number
}

export interface TeamPlayerDTO {
  player_id?: number
  firstname?: string
  lastname?: string
  position?: string
  age?: number
  nationality?: string
  season?: number
  team_id?: number
}
