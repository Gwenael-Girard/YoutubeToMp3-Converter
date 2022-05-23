import { createStore } from 'vuex'
import axios from "axios";

const ETAT = {
  off: {
    state: "off",
    msg: ""
  },
  searching: {
    state: "searching",
    msg: "Recherche de la video..."
  },
  downloading: {
    state: "downloading",
    msg: "Conversion en cours..."
  },
  downloaded: {
    state: "downloaded",
    msg: "Conversion terminée !"
  },
  failed: {
    state: "failed",
    msg: "Erreur !"
  },
}

export default createStore({
  state: {
    youtubeLink: "",
    downloadDatas: {},

    downloadState: ETAT.off,
    failedMsg: "",
  },

  getters: {
    shortYoutubeLink(state) {
      return state.youtubeLink.slice(-11);
    }
  },

  mutations: {

    setDatas(state, downloadData) {
      state.downloadDatas = downloadData
    },

    setDownloadState(state, downloadState) {
      state.downloadState = downloadState;
    },

    setFailedMsg(state, msg) {
      state.failedMsg = msg
    }

  },

  actions: {

    startDownload({dispatch, commit}, videoId) {
      commit('setDownloadState', ETAT.searching);
      commit('setFailedMsg', "")
      dispatch('getDatas', videoId)
    },

    getDatas( {dispatch, commit, state}, videoId, ) {

      let options = {
        method: 'GET',
        url: 'https://youtube-mp3-download1.p.rapidapi.com/dl',
        params: {id: videoId},
        headers: {
          'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com',
          'X-RapidAPI-Key': '2ab3dad8femsh134964fc759bc96p1ff78ajsnee35b6aa1393'
        }
      }

      return axios
          .request(options)
          .then(response => {

            switch (response.data.status) {
              case "null":
                dispatch('getDatas', videoId)
                break;

              case "processing":
                commit('setDownloadState', ETAT.downloading)
                response.data.ytblink = state.youtubeLink
                response.data.image = "https://i.ytimg.com/vi/"+ videoId +"/hqdefault.jpg"
                commit('setDatas', response.data)
                dispatch('getDatas', videoId)
                break;

              case "fail":
                commit('setDownloadState', ETAT.failed)
                if(response.data.msg === "Video id not provided") {
                  commit('setFailedMsg', " Veuillez entrer un lien.")
                } else if (response.data.msg === "Invalid Video Id") {
                  commit('setFailedMsg', " Veuillez entrer un lien valide.")
                }
                break;

              case "ok":
                commit('setDownloadState', ETAT.downloaded)
                response.data.ytblink = state.youtubeLink
                response.data.image = "https://i.ytimg.com/vi/"+ videoId +"/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrxW-p2fN4D6vHVbx5lUhsJcB-Hw"
                commit('setDatas', response.data)
                break;
            }
          })
    },
  },

  modules: {

  }
})
