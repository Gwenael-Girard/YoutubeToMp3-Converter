<template>
    <div class="video">
        <div class="video-description">
            <a class="thumbnail"
               target="_blank"
               :href="videoDatas.ytblink"
               :style="{backgroundImage: 'url(\'' + videoDatas.image + '\')'}">
            </a>
            <div class="video-infos">
                <div class="video-title">
                    <h3>{{videoDatas.title}}</h3>
                    <span>Durée : {{this.secToMinSec(videoDatas.duration)}}</span>
                </div>
                <button v-if="this.$store.state.downloadState.state === 'downloaded'"
                        class="download-btn" @click="downloadMp3(this.videoDatas.link);">Télécharger</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Video",
    computed: {
        videoDatas() {
            return this.$store.state.downloadDatas
        }
    },

    methods: {
        secToMinSec(time) {
            let fullMin = time/60
            let min = Math.trunc(fullMin)

            let fullSec = fullMin - min;
            let sec = Math.trunc(fullSec * 60)

            return this.addZero(min) + ":" + this.addZero(sec)
        },

        addZero(num) {
            return num < 10 ? "0" + num : num;
        },

        downloadMp3(url) {
            window.open(url, '_blank');
        }
    },
}
</script>

<style scoped>
.video {
    margin: 3em auto;
    width: 100%;
}

.video-description {
    display: flex;
}

.video-description .thumbnail {
    border-radius: var(--border-radius);
    width: 300px;
    height: 168.75px;
    background-size: cover;
    background-position: center;
}

.video-infos {
    width: calc(100% - 300px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1em;
}

.video-title {
    overflow: hidden;
}

.video-infos .video-title h3{
    text-overflow: ellipsis;
    margin: 0;
    font-size: 1.5em;
    margin-bottom: .25em;
}

.video-infos .video-title span{
    font-style: italic;
    font-size: 1em;
}

.video .download-btn {
    display: block;
    width: 100%;
    height: 32px;
    padding: 0;
    margin-top: 1.5em;
}

@media screen and (max-width: 750px) {
    .video-description {
        flex-direction: column;
    }

    .video-description .thumbnail {
        margin: 0 auto 2em auto;
    }

    .video-infos {
        padding: 0;
        width: 100%
    }
}

</style>