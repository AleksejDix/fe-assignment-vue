<template>
  <div>
    <ul class="pagination" v-if="pages > 1">
      <li v-for="page in pages" :key="page" >
        <button :class="{current: currentPage === page}"  @click="currentPage = page">{{page}}</button>
      </li>
    </ul>
    <ul class="listing-list">
      <li v-for="listing in paginatedListing" :key="listing.id">
        <Listing :listing="listing"/>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Listing from './../components/Listing'

export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1
    }
  },
  components: {
    Listing
  },
  computed: {
    ...mapGetters(['getSimilar']),
    total() {
      return this.getSimilar.length
    },
    pages() {
      return Math.ceil(this.total / this.perPage)
    },
    offset() {
      return this.perPage * this.currentPage - this.perPage
    },
    paginatedListing() {
      return this.getSimilar.slice(this.offset,  this.offset + this.perPage)
    }
  }
}
</script>

<style>
.pagination {
  list-style: none;
  display: flex;
}

.current {
  background: red;
}
</style>