<template>
  <div class="search">
    <div class="search__background"/>
    <section class="section">
      <div class="container">
        <div class="search__logo">
          <nuxt-link to="/login">
            <img src="/img/logo.png" alt="Optisource technologies Logo"/>
          </nuxt-link>
        </div>

        <div class="search__text">
          <h1>Welcome to Book Search</h1>
          <h2>
            Want to find out about your favourite books, simply search their ISBN number and start exploring!
          </h2>
        </div>

        <div class="search__field">

          <form>
            <b-field :type="errors.has('book') ? 'is-danger': ''" :message="errors.first('book')">
              <b-input
                name="book"
                v-validate="'required'"
                v-model="book"
                placeholder="Book ISBN"
              />
            </b-field>
          </form>

        </div>

        <div class="search__action">
          <button
            class="button"
            @click="search"
            :class="loading">
            Search
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      book: null,
      loading: '',
    };
  },
  computed: {
  },

  methods: {
    async search() {
      const result = await this.$validator.validateAll();
      if (result) {
        this.loading = 'is-loading';
        this.$router.push(`/book?isbn=${this.book}`)
      }
    }
  },
};
</script>

<style>
</style>
