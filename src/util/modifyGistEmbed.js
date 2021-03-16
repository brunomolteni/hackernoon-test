// Used to change gist embeds to use https://github.com/bvanderhoof/gist-embed
export default (originalMarkup) => {
  const findGistIframe = /(<iframe[^>]+id="gist-([^"]+)"><\/iframe>)/g; // magic regex 🐱‍👤
  let modifiedMarkup = originalMarkup;
  let found;
  while ((found = findGistIframe.exec(originalMarkup)) !== null) {
    let gistId = found[2];
    modifiedMarkup = modifiedMarkup.replace(
      found[1],
      `<code data-gist-id="${gistId}"></code>`
    );
  }
  return modifiedMarkup;
};
