<template>
  <div class="home">
    <ul class="listing-list">
      <li v-for="listing in getListings" :key="listing.id" class="listing">
        <router-link :to="{
          name: 'details-page',
          params: {
            id: listing.id
          }
        }">
          <Listing :listing="listing"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Listing from './../components/Listing'

export default {
  components: {
    Listing
  },
  computed: {
    ...mapGetters(['getListings'])
  },
};
</script>

<style lang="scss">


  
</style>
