import { fetchData } from '@/utils';
import {
  COMMENT_ADD,
  COMMENT_DELETE,
  COMMENTS_GET,
  COMMENTS_UPLOAD,
  COMMENT_START_EDIT,
  COMMENT_UPDATE,
  COMMENT_CANCEL_EDIT
} from '@/utils/mutationTypes';

import {
 LOADING,
 ERROR_FETCH,
 SUCCESS_FETCH
} from '@/utils/notificationTypes';

import {
 DEFAULT_COMMENT_TITLE,
 DEFAULT_COMMENT_TEXT
} from '@/utils/strings'

const comments = {
  state: {
      comments: [],
      editedCommentInfo: {}
  },
  mutations: {
    [COMMENTS_GET] (state, payload) {
        return state.comments = payload;
    },
    [COMMENTS_UPLOAD] (state, payload) {
        return state.comments = payload;
    },
    [COMMENT_DELETE] (state, payload) {
      const filterComments = state.comments.filter((comment) => {
          return comment.id !== payload.id
      });
      state.comments = filterComments;
    },
    [COMMENT_ADD] (state, payload) {
        const newComments =  [...state.comments, payload];
        state.comments = newComments;
    },
    [COMMENT_UPDATE] (state, payload) {
        const currentType = state.editedCommentInfo.type;
        const updatedComments = state.comments.map((comment) => {
            if (payload.id === comment.id && currentType in comment)
              return {...comment, [currentType]: payload.data}
            return comment
        });

        state.comments = updatedComments;
    },
    [COMMENT_START_EDIT] (state, payload) {
        state.editedCommentInfo = payload;
    },
    [COMMENT_CANCEL_EDIT] (state) {
        state.editedCommentInfo = {};
    },
  },
  actions: {
        deleteComment ({commit}, payload) {
          commit(COMMENT_DELETE, payload)
        },
        addComment ({commit, state}) {
          const lastComment = state.comments[state.comments.length -1] || {id: 0}
          const commentId = lastComment.id + 1;
          const payload = {
            id: commentId,
            voice: DEFAULT_COMMENT_TITLE,
            text: DEFAULT_COMMENT_TEXT
          };
          commit(COMMENT_ADD, payload)
        },
        async getComments ({commit, dispatch}) {
          dispatch('showNotification', LOADING);
          try {
            const payload = await fetchData('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c');
            commit(COMMENTS_GET, payload);
            dispatch('showNotification', SUCCESS_FETCH);
          } catch(error) {
              dispatch('showNotification', ERROR_FETCH);
          }
        },
        async uploadComments ({commit, dispatch}) {
          dispatch('showNotification', LOADING);
          try {
            const payload = await fetchData('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
            {method: 'POST'});
            commit(COMMENTS_UPLOAD, payload);
            dispatch('showNotification', SUCCESS_FETCH);
          } catch(error) {
              dispatch('showNotification', ERROR_FETCH);
          }
        },
        startCommentEdit({commit, dispatch}, payload) {
            dispatch('cancelCommentEdit');
            commit(COMMENT_START_EDIT, payload);
        },
        updateComment ({commit, dispatch}, payload) {
            commit(COMMENT_UPDATE, payload);
            dispatch('cancelCommentEdit');
        },
        cancelCommentEdit({commit}) {
           commit(COMMENT_CANCEL_EDIT);
        }
    }
};

export default comments;
