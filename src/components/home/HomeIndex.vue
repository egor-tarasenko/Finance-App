<template>
    <headerComponent/>
    <calendar/>
    <category-balance/>
  <div class="modal">
    <div class="modal-content">
      <span class="close"></span>
      <h2>Редактирование категории</h2>
      <div>
        <label for="categoryIcon"></label>
        <input type="text" id="categoryIcon">
      </div>
      <div>
        <label for="categoryName">Название категории:</label>
        <input type="text" id="categoryName">
      </div>
      <button>Закрыть</button>
    </div>
  </div>

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
import ModalWindow from "@/components/widjest/modalWindow.vue";
export default {
  components: {ModalWindow, CategoryBalance, calendar, headerComponent},
  return() {

  }
}
</script>