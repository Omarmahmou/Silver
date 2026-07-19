<template>
  <div class="gallery">
    <div
      class="main-image desktop"
      data-aos="fade-down-right"
      data-aos-duration="1200"
    >
      <transition name="fade" mode="out-in">
        <img :src="currentImage" :key="currentImage" alt="mainImage" />
      </transition>
    </div>

    <div class="thumbs-wrapper desktop" data-aos="zoom-in-up">
      <div class="thumbs">
        <div v-for="image in visibleThumbs" :key="image" class="thumb">
          <img :src="image" alt="open image" @click="openImage(image)" />
        </div>
      </div>

      <div class="extra-thumbs" :class="{ 'extra-thumbs--open': isExpanded }">
        <div class="thumbs">
          <div v-for="image in extraThumbs" :key="image" class="thumb">
            <img :src="image" alt="open image" @click="openImage(image)" />
          </div>
        </div>
      </div>

      <button class="toggle-btn" @click="toggleGalley">
        <svg v-if="!isExpanded" width="30" height="30" viewBox="0 0 24 24">
          <path
            d="M12 4v16M4 12h16"
            stroke="white"
            stroke-width="4"
            stroke-linecap="square"
          />
        </svg>
        <svg v-else width="40" height="28" viewBox="0 0 24 24">
          <path
            d="M2 12h30"
            stroke="white"
            stroke-width="5"
            stroke-linecap="square"
          />
        </svg>
      </button>
    </div>

    <div
      class="mobile-slider"
      data-aos="fade-down-right"
      data-aos-duration="1200"
    >
      <swiper :options="swiperOption" ref="colorSwiper">
        <swiper-slide v-for="(image, id) in colorImages" :key="id">
          <img :src="image" alt="colorImage" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import gallery1 from "@/assets/images/gallery1.png";
import gallery2 from "@/assets/images/gallery2.png";
import gallery3 from "@/assets/images/gallery3.png";
import gallery4 from "@/assets/images/gallery4.png";
import gallery5 from "@/assets/images/gallery5.png";
import gallery6 from "@/assets/images/gallery6.png";
import gallery7 from "@/assets/images/gallery7.png";
import gallery8 from "@/assets/images/gallery8.png";

export default {
  components: { Swiper, SwiperSlide },
  props: {
    colorImages: {
      type: Array,
      default: () => [],
    },

    selectedColorIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      images: [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
      ],
      isExpanded: false,

      swiperOption: {
        speed: 800,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };  
  },

  mounted() {
    this.swiperInstance.on("slideChange", () => {
      this.$emit("select-color", this.swiperInstance.activeIndex);
    });
  },

  computed: {
    currentImage() {
      return this.colorImages[this.selectedColorIndex];
    },
    visibleThumbs() {
      return this.images.slice(0, 4);
    },
    extraThumbs() {
      return this.images.slice(4);
    },
    swiperInstance() {
      return this.$refs.colorSwiper?.$swiper;
    },
  },
  watch: {
    selectedColorIndex(newIndex) {
      this.scrollToCurrentView();
      this.swiperInstance.slideTo(newIndex);
    },
  },

  methods: {
    toggleGalley() {
      this.isExpanded = !this.isExpanded;
    },

    openImage(image) {
      window.Fancybox.show([
        {
          src: image,
          type: "image",
        },
      ]);
    },

    scrollToCurrentView() {
      const selector =
        window.innerWidth > 991 ? ".main-image" : ".mobile-slider";
      this.$nextTick(() => {
        const el = this.$el.querySelector(selector);
        if (!el) return;
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    },
  },
};
</script>

<style scoped>
.gallery {
  max-width: 648px;
  display: flex;
  flex-direction: column;
}

.main-image {
  aspect-ratio: 648 / 545;
  background: #fafafa;
  margin-bottom: 83px;
}
.main-image img {
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.thumbs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  position: relative;
}
.thumb {
  cursor: pointer;
  aspect-ratio: 311.85 / 400.94;
}

.thumb img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}
.thumb:hover img {
  transform: scale(1.03);
}
.extra-thumbs {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.8s ease-in-out, margin-top 0.8s ease-in-out;
}
.extra-thumbs--open {
  max-height: 900px;
  margin-top: 24px;
}

.toggle-btn {
  width: 111px;
  height: 73px;
  border: none;
  background: #121211;
  color: #ffffff;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -32px;
  transition: 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
.toggle-btn:hover {
  background: #333;
}

.mobile-slider {
  display: none;
  margin-bottom: 53px;
}

.mobile-slider .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
}

.mobile-slider .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.mobile-slider >>> .swiper-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
}

.mobile-slider >>> .swiper-pagination-bullet {
  width: 18px;
  height: 3px;
  border-radius: 2px;
  background: #d7d7d7;
  opacity: 1;
  margin: 0 4px !important;
  transition: 0.3s;
}

.mobile-slider >>> .swiper-pagination-bullet-active {
  width: 26px;
  background: #111;
}

@media (max-width: 991px) {
  .desktop {
    display: none !important;
  }
  .mobile-slider {
    display: block;
  }
}
</style>
