<template>
  <div>
    <NavigationBar :isTransparent="true" />
    <div class="max-w-screen relative bg-gray-500 banner" style="height: 468px;" :style="{ backgroundImage: `url(${detail.image})` }">
      <div class="w-full absolute top-60 left-0">
        <div class="max-w-screen-xl mx-auto relative z-20">
          <div class="poster-container">
            <img :src="detail.image" alt="" class="poster-image">
          </div>
        </div>
      </div>
      <div class="absolute top-60 py-5" style="left: 26.5%;">
        <div class="max-w-screen-xl mx-auto relative z-10 flex flex-col items-start justify-start">
          <p class="medium text-white">
            {{ detail.year }}
          </p>
          <p class="semi-bold text-white text-3xl">
            {{ detail.title }}
          </p>
          <p class="regular text-white">
            {{ detail.genres }}
          </p>
        </div>
      </div>
      <div class="w-full absolute bottom-0 left-0 z-10" style="background: rgba(0, 0, 0, 0.5); height: 80px;">
        <div class="absolute bottom-0 flex items-center justify-start" style="left: 26.5%; height: 100%;">
          <div class="flex">
            <img src="@/assets/icons/star.svg" alt="" class="mr-2 star">
            <p class="semi-bold text-white text-4xl">
              {{ detail.imDbRating }}
            </p>
          </div>
          <div class="flex flex-col ml-3 pr-5">
            <p class="medium text-gray-400 text-sm uppercase">
              User Score
            </p>
            <p class="medium text-white text-sm uppercase">
              {{ detail.imDbRatingVotes }} Votes
            </p>
          </div>
          <div class="flex flex-col px-5 border-r border-l border-solid border-gray-400">
            <p class="medium text-gray-400 text-sm uppercase">
              Status
            </p>
            <p class="medium text-white text-sm uppercase">
              Released
            </p>
          </div>
          <div class="flex flex-col px-5">
            <p class="medium text-gray-400 text-sm uppercase">
              language
            </p>
            <p class="medium text-white text-sm uppercase">
              {{ detail.languages }}
            </p>
          </div>
          <div class="flex flex-col px-5 border-r border-l border-solid border-gray-400">
            <p class="medium text-gray-400 text-sm uppercase">
              budget
            </p>
            <p class="medium text-white text-sm uppercase">
              ${{ detail.boxOffice | objectConversion('budget') }}
            </p>
          </div>
          <div class="flex flex-col px-5">
            <p class="medium text-gray-400 text-sm uppercase">
              production
            </p>
            <p class="medium text-white text-sm uppercase">
              PRODUCTION
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-screen relative bg-white" style="height: 100px;">
      <div class="absolute top-0 py-5" style="left: 26.5%;">
        <div class="max-w-screen-xl mx-auto relative z-10 flex flex-col items-start justify-start">
          <p class="medium text-red-700">
            OVERVIEW
          </p>
          <p class="regular text-black" style="width: 60%;">
            {{ detail.plot }}
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-screen py-10 relative bg-white">
      <div class="max-w-screen-xl mx-auto relative z-10">
        <div class="flex">
          <p class="medium text-red-700">
            REVIEWS
          </p>
        </div>
        <div class="grid grid-cols-2 py-10 gap-10">
          <div v-for="(item, index) in 2" :key="index" class="col-auto">
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
    <RecommendationSection :similars="detail.similars" />
    <FooterSection />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { initFlowbite } from 'flowbite'
import ReviewCard from '~/components/molecules/ReviewCard.vue'
import NavigationBar from '~/components/organisms/NavigationBar.vue'
import RecommendationSection from '~/components/organisms/RecommendationSection.vue'
import FooterSection from '~/components/molecules/FooterSection.vue'

export default {
  name: 'DetailPage',
  components: { NavigationBar, ReviewCard, RecommendationSection, FooterSection },
  computed: {
    ...mapState('movies', [
      'detail'
    ])
  },
  mounted () {
    this.$store.dispatch('movies/getDetail', this.$route.params.id)
    initFlowbite()
  },
  filters: {
    objectConversion (value, param) {
      if (!value) { return '' }
      return value[param]
    }
  }
}
</script>

<style scoped>
  .banner {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
  .star {
    height: 32px;
    width: 32px;
  }
  .poster-container {
    height: 330px;
    width: 220px;
  }
  .poster-image {
    height: 100%;
    width: 100%;
  }
</style>
