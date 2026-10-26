export type WorldId = 'mango_grove' | 'small_chops' | 'good_energy' | 'japan' | 'summit';

export interface WorldInfo {
  id: WorldId;
  /** The display name. */
  name: string;
  /** A Phosphor icon name without the prefix. */
  glyph: string;
  /** One line on what belongs in this world. */
  blurb: string;
  /** A short note on the scenery, for people drawing it. */
  scenery: string;
}

/** Every world by id. The ids match the data contract. */
export const WORLDS: Record<WorldId, WorldInfo>;
/** The order the worlds appear along the road. */
export const WORLD_ORDER: WorldId[];
