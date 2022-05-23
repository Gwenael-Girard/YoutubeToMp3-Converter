<template>
    <span class="material-icons btn-contrast" @click="this.changeTheme">contrast</span>
    <DownloadForm />
    <ProgressBar

    />
    <Video v-if="this.$store.state.downloadState.state === 'downloading' ||
                 this.$store.state.downloadState.state === 'downloaded'"
    />
</template>

<script>
import DownloadForm from "@/components/DownloadForm";
import Video from "@/components/Video";
import ProgressBar from "@/components/ProgressBar";
export default {
    name: 'App',
    components: {
      DownloadForm,
      ProgressBar,
      Video
    },

    data() {
        return {
            darkTheme: true,
        }
    },

    computed: {
        videoDatas() {
            return this.$store.state.downloadDatas
        }
    },

    methods: {
        changeTheme() {
            if (this.darkTheme) {
                document.documentElement.style.setProperty('--background', '#dedede');
                document.documentElement.style.setProperty('--primary', '#b4b4b4');
                document.documentElement.style.setProperty('--text', '#2a2a2a');
                this.darkTheme = false

            } else {
                document.documentElement.style.setProperty('--background', '#484848');
                document.documentElement.style.setProperty('--primary', '#2a2a2a');
                document.documentElement.style.setProperty('--text', '#dedede');
                this.darkTheme = true
            }
        }
    }
}
</script>

<style lang="scss">

:root {
    --background: #484848;
    --text: #dedede;
    --primary: #2a2a2a;
    --accent: #c21515;

    --border-radius: 5px;
}


* {
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    color: var(--text);
    transition: all .2s ease;
}

body {
    width: 950px;
    margin: 0 auto;
    background-color: var(--background);
    padding-top: 3em;
}

#app {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 3em);
    flex-direction: column;
    padding: 4em 1em;
}

.btn-contrast {
    fill: var(--text);
    position: absolute;
    top: 1em;
    right: 1em;
    font-size: 32px;
}

.btn-contrast:hover {
    cursor: pointer;
}

button {
    border-radius: var(--border-radius);
    border: none;
    font-weight: bold;
    background-color: var(--primary);
}

button:hover {
    background-color: var(--accent);
}

input {
    position: relative;
    border: none;
    border-bottom: 2px solid var(--text);
    background-color: transparent;
    outline: none;
    padding: 0 .5em;
}

input:focus {
    border-bottom: 2px solid var(--accent);
}

.downloadState {
    margin-top: 2em;
    font-size: 1em;
}

@media screen and (max-width: 950px) {
    body {
        width: 100%;
    }
}
</style>
