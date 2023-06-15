<template>
  <div>
    <NavigationBar />
    <BannerCarousel />
    <DiscoverSection />
    <FooterSection />
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite'
import NavigationBar from '~/components/organisms/NavigationBar.vue'
import BannerCarousel from '~/components/organisms/BannerCarousel.vue'
import DiscoverSection from '~/components/organisms/DiscoverSection.vue'
import FooterSection from '~/components/molecules/FooterSection.vue'

export default {
  name: 'IndexPage',
  components: { NavigationBar, BannerCarousel, DiscoverSection, FooterSection },
  mounted () {
    initFlowbite()
  }
}
</script>
