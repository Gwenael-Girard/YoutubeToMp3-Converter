<template>
    <div class="download-form">
        <label for="link">Lien : </label>
        <input @focus="$event.target.select()" type="text" id="link" v-model="this.$store.state.youtubeLink">
        <button @click="startDownload">Convertir en MP3</button>
    </div>
</template>

<script>
export default {
    name: "DownloadForm",
    methods: {
        startDownload() {
            this.$store.dispatch('startDownload', this.$store.getters.shortYoutubeLink)
        },
    }
}
</script>

<style scoped>
.download-form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.download-form label {
    display: block;
    width: 50px;
}

.download-form input {
    display: block;
    padding: 0;
    min-height: 32px;
    width: calc(100% - 50px - 150px);
    margin-right: 1em;
}

.download-form button {
    display: block;
    min-height: 32px;
    width: 150px;
    margin: 0;
}


@media screen and (max-width: 830px) {
    .download-form {
        width: 100%;
        flex-direction: column;
    }

    .download-form label {
        width: 100%;
    }

    .download-form input {
        width: 100%;
        margin: 0;
    }

    .download-form button {
        margin-top: 1em;
    }
}
</style>