const login_details = {
  client_id: 'cda66e3f-3dbd-4f35-8fce-057cddd40852',
  redirect_uri: 'http://localhost:8080/login',
  response_type: 'code',
  scope: 'cvut:umapi:read',
};

const login_fit_api = 'https://auth.fit.cvut.cz/oauth/oauth/authorize?';

export const LOGIN = {
  LOGIN_URL:
    login_fit_api +
    Object.entries(login_details)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&'),
};
