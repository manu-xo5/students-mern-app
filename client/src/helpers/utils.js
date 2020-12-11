/**
 *
 * @param {key} key - pulls value from obj
 * @returns pulls value from obj passed in curryed fn
 */
export const pull = key => obj => obj[key];
