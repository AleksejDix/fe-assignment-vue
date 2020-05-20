<template functional>
  <article class="listing">

    <div class="img">
      <img v-if="props.listing.images" :src="props.listing.images[0]" :alt="props.listing.title">
    </div>

    <p>
      {{ props.listing.title }}
    </p>
   
  </article>
</template>

<style lang="scss" scoped>
  @import '../assets/variables.scss';

  $listing-img-width: 160px;
  $listing-img-height: 100px;
  $listing-image-placeholder-background: #eaeaea;

.listing {
  padding: $layout-space-base;
  clear: both;

  .img {
    width: $listing-img-width;
    height: $listing-img-height;
    position: relative;
    overflow: hidden;
    float: left;
    background: $listing-image-placeholder-background;

    img {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  p {
    margin-left: $listing-img-width + ($layout-space-base / 2);
  }
}
</style>