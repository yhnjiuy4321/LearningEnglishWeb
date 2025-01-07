<template>
  <div id="titleCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://i0.wp.com/yutingchuang.com/wp-content/uploads/2016/07/English1.jpg?resize=1080%2C675&ssl=1" class="d-block w-100" alt="Slide 1">
        <div class="carousel-caption d-none d-md-block">
          <h1 class="text-white"> {{title1}} </h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://tli1956.com/proxyApi/image/offline/bb8633ec62f841f4bbd3eff2644cc5c1.webp" class="d-block w-100" alt="Slide 2">
        <div class="carousel-caption d-none d-md-block">
          <h1 class="text-white"> {{title2}} </h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://myfutureclass.com/wp-content/uploads/2023/07/image-93-1200x675-1.png" class="d-block w-100" alt="Slide 3">
        <div class="carousel-caption d-none d-md-block">
          <h1 class="text-white"> {{title3}}  </h1>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#titleCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#titleCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: 'The best website of Learning English',
      title2: 'Happy Learning',
      title3:'Learning Together'
    }
  },
};
</script>

<style>

.carousel {
  margin-top: 60px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
}


.carousel-item img {
  width: 1200px;
  height: 300px;
  object-fit: cover;
  filter: brightness(75%);
}
.carousel-caption h1 {
  font-size: 3em;
  text-shadow: 2px 2px 4px black;
}

@media (max-width: 1200px) {
  .carousel-caption h1 {
    font-size: 2.5em;
  }
}

@media (max-width: 992px) {
  .carousel-caption h1 {
    font-size: 2em;
  }
}

@media (max-width: 768px) {
  .carousel-caption h1 {
    font-size: 1.5em;
  }
}

@media (max-width: 576px) {
  .carousel-caption h1 {
    font-size: 1.2em;
  }
}
</style>