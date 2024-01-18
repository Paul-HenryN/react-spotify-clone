const base = "/react-spotify-clone";

export const routes = {
  HOME: base,
  LOGIN: `${base}/login`,
  SEARCH: `${base}/`,
  PLAYLIST: `${base}/playlist`,
};

export const paths = {
  HOME: routes.HOME,
  LOGIN: routes.LOGIN,
  SEARCH: routes.SEARCH,
  PLAYLIST: `${routes.PLAYLIST}/:playlistId`,
};
