<template>
  <div>
    <NavigationBar />
    <div style="margin-top: 90px;">
      <ContentSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite'
import NavigationBar from '~/components/organisms/NavigationBar.vue'
import FooterSection from '~/components/molecules/FooterSection.vue'
import ContentSection from '~/components/organisms/ContentSection.vue'

export default {
  name: 'ContentPage',
  components: { NavigationBar, FooterSection, ContentSection },
  mounted () {
    initFlowbite()
  }
}
</script>
