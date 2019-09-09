import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE,
 } from '@/utils/mutationTypes'

const notifications = {
  state: {
      notification: {},
  },
  mutations: {
    [NOTIFICATION_SHOW] (state, payload) {
        return state.notification = {...payload, show: true};
    },
    [NOTIFICATION_HIDE] (state) {
        return state.notification = {...state.notification, show: false};
    },
  },
  actions: {
    showNotification ({commit, dispatch, state}, payload) {
      let timeout;
      if (state.notification.timeout) {
        clearTimeout(state.notification.timeout);
      }
      if(payload.type !== "loading")  {
          timeout = setTimeout(function() {dispatch('hideNotification')}, 3000);
      }
      commit(NOTIFICATION_SHOW, {...payload, timeout});
    },
    hideNotification ({commit}) {
      commit(NOTIFICATION_HIDE)
    },
  }
};

export default notifications;
