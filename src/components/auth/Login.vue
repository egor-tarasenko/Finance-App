<template>
  <div class="container d-flex justify-content-center">
    <div>
      <div class="logo">
        <img alt="logo" src="../../images/Kitty-Logo.png">
        <h3>Kitty</h3>
      </div>
      <div>
        <h3>
          Create an account
        </h3>
      </div>
      <div class="form">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Password">
        <input type="text" placeholder="Password confirmation">
        <div>
          <button class="btn">Sign Up</button>
        </div>
      </div>
      <div class="another-entrance">
        <h6>Have an account?</h6>
        <button class="btn btn-close-white">Sign in</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  font-family: Inter, serif;
  width: 100vw;
  height: 100vh;
  text-align: center;
}
.logo h3{
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 30px;
  margin-top: 10px;
  color: #424242;
}
.form {
  display: flex;
  flex-direction: column;
}
.form input{
  border-radius: 5px;
  padding: 0 0 0 15px;
  margin: 10px 0 0 10px;
  color: #212529;
  border: 1px solid #cfd4d9;
  font-size: 13px;
  font-weight: 400;
  width: 200px;
  height: 32px;
  align-items: flex-start;
  flex-shrink: 0;
}
.form button{
  margin-top: 20px;
  margin-bottom: 40px;
  height: 25px;
  padding: 0 12px;
  align-items: center;
  font-family: Inter,serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  background-color: #0d6efd;
  color: #ffffff;
}
.another-entrance h6{
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #424242;
}
.another-entrance button{
  font-size: 13px;
  height: 23px;
  padding: 0 12px;
  border: 1px solid #6c757d;
  border-radius: 4px;
  align-items: center;
  color: #212529;
}
</style>
