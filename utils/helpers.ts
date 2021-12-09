export const youTubeGetID = (url: string) => {
  const [a, , b] = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (b !== undefined) {
    return b.split(/[^0-9a-z_-]/i)[0];
  } else {
    return a;
  }
};

export const getSongAttributeValue = (attributes, attrName) => {
  const attr = attributes?.find((a) => a.trait_type === attrName);
  return attr?.value;
};
