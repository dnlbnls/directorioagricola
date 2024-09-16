// place files you want to import through the `$lib` alias in this folder.

export function toTitleCase(str) {
  return str;
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}