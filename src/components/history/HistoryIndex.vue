<template>
  <headerComponent/>
  <calendar/>
  <category-balance/>
  <modal-window/>

  <div class="history">
    <div class="history-inf">
      <div class="history-data">DEC, 12 TH</div>
      <div class="history-sum"> -1125</div>
    </div>
    <div class="history-list-items">
      <div class="history-item">
        <div id="flex">
          <div class="logo">
            <div><font-awesome-icon icon="hospital"/></div>
          </div>
          <div class="items-name">
            <h5>Health</h5>
            <span>Hospital</span>
          </div>
        </div>
        <div class="sum"> -500</div>
      </div>

      <div class="history-item">
        <div id="flex">
          <div class="logo">
            <div><font-awesome-icon icon="bacon"/></div>
          </div>
          <div class="items-name">
            <h5>Food</h5>
            <span>Meet</span>
          </div>
        </div>
        <div class="sum"> -500</div>
      </div>

      <div class="history-item">
        <div id="flex">
          <div class="logo">
            <div><font-awesome-icon icon="home"/></div>
          </div>
          <div class="items-name">
            <h5>Home</h5>
            <span>Family</span>
          </div>
        </div>
        <div class="sum"> -500</div>
      </div>
    </div>
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

<style scoped>

</style>