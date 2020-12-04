<template>
  <component :is="type" :href="href" class="start">
    <slot/>
  </component>
</template>
<script>
 export default {
    props: {
      href: {
        type: String,
        default: null
      },
      to: {
        type: String,
        default: null
      }
    },
    computed: {
      type() {
        if (this.href) {
          return 'a'
        } else {
          return 'start'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.start
  margin 20px 5px
  text-decoration none
  text-align center
  font-size 1.2rem
  border 1px solid
  padding 0.8rem 1.6rem
  border-radius 4px
  transition 0.1s ease
  box-sizing border-box

  @media (max-width: $MQMobile)
    display flex
    justify-content center

p
  font-size 20px

@media (max-width: $MQMobile)
  .beginning
    margin-top 0 !important
    text-align center
</style>
