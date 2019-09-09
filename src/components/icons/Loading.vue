<template>
    <div class="circle-loader">
      <div class="checkmark"></div>
    </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped lang="scss">
// Define vars we'll be using
$brand-success: #5cb85c;
$check-thickness: .2rem;
$loader-size: 100%;
$check-height: $loader-size/2;
$check-width: $check-height/2;
$check-left: ($loader-size/6 + $loader-size/12);
$error-left: $loader-size/4;
$check-color: $brand-success;
$error-color: red;

.circle-loader {
  border: $check-thickness solid rgba(0, 0, 0, 0.2);
  border-left-color: $check-color;
  animation-name: loader-spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: relative;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
}

.circle-loader,
.circle-loader:after {
  border-radius: 50%;
  width: $loader-size;
  height: $loader-size;
}

.checkmark {
  display: none;
  box-sizing: content-box;
}

@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: $check-width;
    opacity: 1;
  }
  40% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
  100% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
}
</style>
