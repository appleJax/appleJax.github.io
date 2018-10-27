export const slugify = (name) =>
  name
    .replace(/\s+/g, '_')
    .replace(/\W/g, '')
    .replace(/_/g, '-')
    .toLowerCase()