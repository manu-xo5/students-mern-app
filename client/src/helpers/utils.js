/**
 *
 * @param {key} key - pulls value from obj
 * @returns pulls value from obj passed in curryed fn
 */
export const pull = key => obj => obj[key];

export const mult = (...files) =>
  files.reduce((acc, filesArgs) => {
    acc.append(...filesArgs);
    return acc;
  }, new FormData());
