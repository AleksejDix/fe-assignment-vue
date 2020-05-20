<template>
    <div class="detail-page">
      <Listing :listing="getListing"/>
      <SimilarListings/>
    </div>
</template>

<script>
import ToDo2 from '../components/todos/ToDo2.vue';
import ToDo3 from '../components/todos/ToDo3.vue';
import { mapGetters} from 'vuex'
import Listing from './../components/Listing'
import SimilarListings from './../components/SimilarListings'

export default {
  components: {
    ToDo2,
    ToDo3,
    Listing,
    SimilarListings
  },
  computed: {
    ...mapGetters(['getListing', 'getSimilar'])
  },
  watch: {
    '$route.params.id': {
      handler: 'setListing',
      immediate: true
    }
  },
  methods:  {
    setListing(id) {
      this.$store.dispatch('setListing', id)
    }
  }
};
</script>

<style>
.detail-page {
  display: flex
}

.detail-page /deep/ article {
  flex: 2
} 
</style>