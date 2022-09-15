<template>
  <header class="navbar-container">
    <div class="navbar-logo"><a href="#" class="navbar-home wow animate__animated animate__fadeInUp">tucker harris.</a></div>
    <ul class="navbar-list">
      <li class="navbar-item"><a href="#" class="navbar-link">Work</a></li>
      <li class="navbar-item"><a href="#" class="navbar-link">About</a></li>
    </ul>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  text-align: center;
  max-width: calc(100vw - 12vw);
  margin: 0 auto;
  padding: 32px 0 8px;
}

.navbar-home {
  text-decoration: none;
  color: #000;
}
.navbar-logo {
  padding: 12px 0;
  font-size: 30px;
  font-weight: 300;
}

.navbar-list {
  list-style: none;
  text-transform: uppercase;
  display: flex;
}
.navbar-item {
  position: relative;
  padding: 12px;
}

.navbar-link {
  position: relative;
  text-decoration: none;
  padding-bottom: 5px;
  overflow: hidden;
  color: #000;
  opacity: .6;
  transition: all 200ms ease-in-out;
}
.navbar-link:hover {
  opacity: 1;
}

.navbar-link::before {
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: left 200ms ease-in-out;
  content: "";
}
.navbar-link:hover::before {
  left: 0;
}
</style>
