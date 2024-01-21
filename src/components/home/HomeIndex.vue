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
import calendar from "@/components/widjest/Calendar.vue";
import headerComponent from "@/components/widjest/HeaderComponent.vue";
import CategoryBalance from "@/components/widjest/CategoryBalance.vue";
export default {
  components: {CategoryBalance, calendar, headerComponent},
  return() {

  }
}
</script>