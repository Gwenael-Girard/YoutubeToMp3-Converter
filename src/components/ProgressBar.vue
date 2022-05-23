<template>
    <span class="downloadState">{{this.$store.state.downloadState.msg + this.$store.state.failedMsg}}</span>
    <div    v-if="this.$store.state.downloadState.state === 'downloading'"
            class="progressBar">
        <div class="progressValue" :style="{width: this.$store.state.downloadDatas.progress + '%'}"></div>
        <span>{{this.$store.state.downloadDatas.progress}}%</span>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: {}
}
</script>

<style scoped>
    .progressBar {
        position: relative;
        text-align: center;
        width: 100%;
        background-color: var(--primary);
    }

    .progressBar span {
        display: block;
        position: relative;
    }

    .progressValue {
        position: absolute;
        background-color: limegreen;
        height: 100%;
        transition: all .2s ease;
    }
</style>