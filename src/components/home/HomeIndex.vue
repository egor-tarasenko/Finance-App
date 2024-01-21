<template>
    <headerComponent/>
    <calendar/>
    <category-balance/>

    <div class="category-balance">
      <div class="title">Title</div>
      <div class="icon"><font-awesome-icon icon="home"/> </div>
      <div class="balance">500</div>
    </div>

    <div class=" category-balance">
      <div class="title">Title</div>
      <div class="icon"><font-awesome-icon icon="home"/> </div>
      <div class="balance">500</div>
    </div>

    <div class=" category-balance">
      <div class="title">Title</div>
      <div class="icon"><font-awesome-icon icon="home"/> </div>
      <div class="balance">500</div>
    </div>

    <div class=" category-balance">
      <div class="title">Title</div>
      <div class="icon"><font-awesome-icon icon="home"/> </div>
      <div class="balance">500</div>
    </div>

    <div class=" category-balance">
      <div class="title">Title</div>
      <div class="icon"><font-awesome-icon icon="home"/> </div>
      <div class="balance">500</div>
    </div>

    <div class=" category-balance">
      <div class="title">Title</div>
      <div class="icon"><font-awesome-icon icon="home"/> </div>
      <div class="balance">500</div>
    </div>
</template>
<script>
import calendar from "@/components/widjest/calendar.vue";
import headerComponent from "@/components/widjest/headerComponent.vue";
import CategoryBalance from "@/components/widjest/categoryBalance.vue";
export default {
  components: {CategoryBalance, calendar, headerComponent},
  return() {

  }
}
</script>