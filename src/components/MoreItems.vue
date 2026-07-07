<!-- data-aos="fade-up" data-aos-delay="300" -->
<template>
  <div class="more-items">
    <h2 class="title">Explore More <span>Items</span></h2>
    <section class="slider-section">
      <swiper :options="swiperOptions" class="explore-swiper">
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class="card">
            <img :src="item.image" :alt="item.title" />

            <div class="overlay">
              <h3>{{ item.title }}</h3>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="#f0d29f"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="swiper-button-next" slot="button-next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="#f0d29f"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Lorem Ipsum Collection",
          image: require("@/assets/images/item1.png"),
        },
        {
          title: "Lorem Ipsum Collection",
          image: require("@/assets/images/item1.png"),
        },
        {
          title: "Lorem Ipsum Collection",
          image: require("@/assets/images/item1.png"),
        },
        {
          title: "Lorem Ipsum Collection",
          image: require("@/assets/images/item1.png"),
        },
      ],

      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 1,
        loop: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //   delay: 1000,
        //   disableOnInteraction: false,
        // },
        // speed: 1500,
        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 8,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 12,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.more-items {
  margin-top: 179px;
  margin-bottom: 53px;
}

.slider-section {
  margin-top: 53px;
  background: #ffffff;
  padding-top: 96px;
  padding-bottom: 96px;
  position: relative;
}
.explore-swiper {
  position: static;
}

.title {
  font-size: 45px;
  font-weight: 400;
}

.title span {
  font-weight: 700;
}

.card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  inset: 0;
  background: #000000b2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
}

.card:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  color: #ffffff;
  text-align: center;
  max-width: 11.25rem;
  font-size: clamp(1rem, 1.8vw, 1.5rem);
}

.swiper-button-next,
.swiper-button-prev {
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.swiper-button-next svg,
.swiper-button-prev svg {
  width: 24px;
  height: 24px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}
::v-deep .swiper-pagination {
  position: absolute !important;
  bottom: 35px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

::v-deep .swiper-pagination-bullet {
  width: 17px;
  height: 3px;
  border-radius: 0;
  background: #71707066;
  opacity: 1;
}

::v-deep .swiper-pagination-bullet-active {
  background: #8d8d8d;
}

@media (max-width: 991px) {
  .more-items {
    margin-top: 46px;
    margin-bottom: 20px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .slider-section {
    padding-top: 18px;
  }
  .title {
    font-size: 30px;
    text-align: center;
  }
}
@media (max-width: 468px) {
  .title {
    font-size: 26px;
  }
}
</style>
