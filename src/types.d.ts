// See https://docs.battlesnake.com/references/api for all details and examples.

export interface InfoResponse {
    apiversion: string;
    author?: string;
    color?: string;
    head?: string;
    tail?: string;
    version?: string;
}

export interface MoveResponse {
    move: string;
    shout?: string;
}

export interface RoyaleSettings {
    shrinkEveryNTurns: number
}

export interface SquadSettings {
    allowBodyCollisions: boolean;
    sharedElimination: boolean;
    sharedHealth: boolean;
    sharedLength: boolean
}

export interface RulesetSettings {
    foodSpawnChance: number;
    minimumFood: number;
    hazardDamagePerTurn: number;
    royale:RoyaleSettings;
    squad:SquadSettings;
}

export interface Ruleset {
    name: string;
    version: string;
    settings: RulesetSettings;
}

export interface Game {
    id: string;
    ruleset: Ruleset;
    timeout: number;
    source: string;
}

export interface Coord {
    x: number;
    y: number;
}

export interface Battlesnake {
    id: string;
    name: string;
    health: number;
    body: Coord[];
    latency: string;
    head: Coord;
    length: number;

    // Used in non-standard game modes
    shout: string;
    squad: string;
}

export interface Board {
    height: number;
    width: number;
    food: Coord[];
    snakes: Battlesnake[];

    // Used in non-standard game modes
    hazards: Coord[];
}

export interface GameState {
    game: Game;
    turn: number;
    board: Board;
    you: Battlesnake;
}
