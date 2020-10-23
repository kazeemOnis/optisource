<template>
  <div class="page">
    <banner :banner="banner"/>

    <section class="section">
      <div class="book">
        <small class="back">
          <nuxt-link to='/'>
            <i class="mdi mdi-arrow-left"/> Back to search
          </nuxt-link>
        </small>

        <div class="columns">
          <div class="column is-3">
            <div class="book__image">
              <img :src="book.volumeInfo.imageLinks.thumbnail" :alt="book.volumeInfo.title">
            </div>

            <div class="book__publishing">
              <p>PUBLISHER: <strong>{{ book.volumeInfo.publisher }}</strong></p>
              <p>PUBLISHED: <strong>{{ book.volumeInfo.publishedDate }}</strong></p>
              <p>PAGES: <strong>{{ book.volumeInfo.pageCount }}</strong></p>
            </div>
          </div>
          <div class="column">
            <h1 class="book__title">
              <a :href="book.volumeInfo.infoLink" target="__blank">Book Title: {{ book.volumeInfo.title }}</a>
            </h1>

            <p class="book__author">by
              <span v-for="(option, i) in book.volumeInfo.authors" :key="i">
                {{ option }}
              </span>
              (Author(s))
            </p>

            <p class="book__categories">
              Categories:
              <span v-for="(option, i) in book.volumeInfo.categories" :key="i">
                {{ option }}
              </span>
            </p>

            <p class="book__rating">
              <b-rate v-model="book.volumeInfo.averageRating" />
              <span class="text">{{ book.volumeInfo.ratingsCount }} rating(s)</span>
            </p>

            <div class="book__download">
              <button class="button margin-right" :class="book.accessInfo.pdf.isAvailable ? 'add-button' : 'plain-button'">
                <span v-if="book.accessInfo.pdf.isAvailable">
                  <i class="mdi mdi-download">
                    Download PDF
                  </i>
                </span>
                <span v-else>
                  PDF Unavailable in {{ book.accessInfo.country }}
                </span>
              </button>

              <button class="button" :class="book.accessInfo.epub.isAvailable ? 'add-button' : 'plain-button'">
                <span v-if="book.accessInfo.epub.isAvailable">
                  <i class="mdi mdi-download">
                    Download EPUB
                  </i>
                </span>
                <span v-else>
                  EPUB Unavailable in {{ book.accessInfo.country }}
                </span>
              </button>
            </div>

            <hr>

            <h2 class="book__description">{{ book.volumeInfo.description }}</h2>


          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  async asyncData({ store, query }) {
    const { isbn } = query;
    const book = await store.dispatch('api/getResource', {
      route: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
    })

    return { book }
  },

  components: { Banner },

  data() {
    return {
      banner: {
        title: 'Welcome to Book Search',
        subtitle: 'Your number 1 stop for books, discover and explore new books today!'
      }
    }
  }
}
</script>

<style>

</style>
