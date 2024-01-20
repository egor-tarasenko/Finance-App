<template>
 <header class="settings-header">
   <h2>Settings</h2>

   <div class="settings-item">
     <div id="flex">
       <div class="logo"><font-awesome-icon icon="person"/></div>
       <div class="items-name">
         <h5>Jon</h5>
         <span>jonelder@gmail.com</span>
       </div>
     </div>
   </div>
 </header>
  <div class="settings">
    <div class="settings-item">
      <div id="flex">
        <div class="logo"><font-awesome-icon icon="person"/></div>
        <div class="items-name">
          <span>jonelder@gmail.com</span>
        </div>
      </div>
      <div><font-awesome-icon icon="angle-right"/></div>
    </div>

    <div class="settings-item">
      <div id="flex">
        <div class="logo" id="list"><font-awesome-icon icon="list"/></div>
        <div class="items-name">
          <span>Manage categories</span>
        </div>
      </div>
      <div><font-awesome-icon icon="angle-right"/></div>
    </div>

    <div class="settings-item">
      <div id="flex">
        <div class="logo" id="logout"><font-awesome-icon icon="arrow-right-from-bracket"/></div>
        <div class="items-name">
          <span>Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsIndex"
}
</script>

<style scoped>

</style>