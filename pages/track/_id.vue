<template>
  <div class="container" v-if="track && track.album">
    <div class="columns">
      <div class="column is-3 has-text-centered">
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url" alt="" />
          </p>
        </figure>
      </div>

      <div class="column is-8"></div>
      <div class="panel">
        <div class="panel-heading">
          <h1 class="title">{{ track.name }}</h1>
        </div>
        <div class="panel-block"></div>
        <article class="media">
          <div class="media-content">
            <div class="content">
              <ul v-for="(v, k) in track">
                <li>
                  <strong> {{ k }} :&nbsp;</strong>
                  <span>{{ v }}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import trackService from "~/plugins/api";

export default {
  data() {
    return {
      track: {}
    };
  },

  head() {
    return {
      title: this.track.name
    };
  },

  asyncData({ params }) {
    const id = params.id;

    return trackService.getById(id).then(res => {
      return { track: res };
    });
  }
};
</script>

<style scoped>
.column {
  margin: 20px;
}
</style>
