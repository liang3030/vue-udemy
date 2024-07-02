let timer;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
    // const response = await fetch(
    //   `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${replaceBykey}`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: payload.email,
    //       password: payload.password,
    //       returnSecureToken: true,
    //     }),
    //   }
    // );
    // const responseData = await response.json();
    // if (!response.ok) {
    //   const error = new Error(
    //     responseData.message || 'Failed to authenticate. Check your login data.'
    //   );
    //   throw error;
    // }

    // console.log(responseData);
    // context.commit('setUser', {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   tokenExpiration: responseData.expiresIn,
    // });
  },
  // TODO: remove token when push the code
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
    // const response = await fetch(
    //   `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${replaceBykey}`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: payload.email,
    //       password: payload.password,
    //       returnSecureToken: true,
    //     }),
    //   }
    // );
    // const responseData = await response.json();
    // if (!response.ok) {
    //   const error = new Error(
    //     responseData.message || 'Failed to authenticate. Check your login data.'
    //   );
    //   throw error;
    // }

    // console.log(responseData);
    // context.commit('setUser', {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   tokenExpiration: responseData.expiresIn,
    // });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${replaceBykey}';

    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${replaceBykey}';
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }

    const expiresIn = +responseData.expiresIn * 1000;

    // Test 5 seconds
    // const expiresIn = 5000;
    const expirationData = new Date().getTime() + expiresIn;

    // store in the browser local storage
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationData);

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    // console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      // tokenExpiration: responseData.expiresIn,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }
    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        // tokenExpiration: null,
      });
    }
  },

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },
};
