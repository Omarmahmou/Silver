<!-- <template>
  <div class="gallery">
    <div class="main-image" data-aos="fade-down-right" data-aos-duration="1200">
      <transition name="fade" mode="out-in">
        <img :src="selectedImage" :key="selectedImage" alt="mainImage"
      /></transition>
    </div>

    <div class="thumbs" data-aos="zoom-in-up">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="thumb"
        :class="{ 'thumb--hidden': !isExpanded && index >= 4 }"
        @click="selectImage(image)"
        data-aos="zoom-in"
        :data-aos-delay="index * 100"
        data-aos-duration="700"
      >
        <img :src="image" alt="" />
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
  </div>
</template>

<script>
import mainImage from "@/assets/images/main-image.png";
import gallery1 from "@/assets/images/gallery1.png";
import gallery2 from "@/assets/images/gallery2.png";
import gallery3 from "@/assets/images/gallery3.png";
import gallery4 from "@/assets/images/gallery4.png";
import gallery5 from "@/assets/images/gallery5.png";
import gallery6 from "@/assets/images/gallery6.png";
import gallery7 from "@/assets/images/gallery7.png";
import gallery8 from "@/assets/images/gallery8.png";

export default {
  props: {
    selectedColorImage: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      defaultImage: mainImage,
      selectedImage: mainImage,
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
    };
  },
  watch: {
    selectedColorImage(newImage) {
      this.selectedImage = newImage || this.defaultImage;
      this.$nextTick(() => {
        const el = this.$el.querySelector(".main-image");
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    },
  },
  methods: {
    toggleGalley() {
      this.isExpanded = !this.isExpanded;
    },
    selectImage(image) {
      this.selectedImage = image;

      this.$nextTick(() => {
        const el = this.$el.querySelector(".main-image");

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.gallery {
  width: 100%;
  max-width: 648px;
  display: flex;
  flex-direction: column;
}

.main-image {
  width: 100%;
  aspect-ratio: 648 / 545;
  background: #fafafa;
  margin-bottom: 70px;
  max-height: 546px;
  overflow: hidden;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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
  overflow: hidden;
  opacity: 1;
  transform: scale(1) translateY(0);
  max-height: 400.94px;
  transition: opacity 0.4s ease, transform 0.4s ease, max-height 0.5s ease,
    margin 0.5s ease;
}

.thumb--hidden {
  opacity: 0;
  transform: scale(0.95) translateY(16px);
  max-height: 0;
  pointer-events: none;
  margin-top: -24px;
}

.thumb:nth-child(5) {
  transition-delay: 0s;
}
.thumb:nth-child(6) {
  transition-delay: 0.06s;
}
.thumb:nth-child(7) {
  transition-delay: 0.12s;
}
.thumb:nth-child(8) {
  transition-delay: 0.18s;
}

.thumb--hidden:nth-child(5) {
  transition-delay: 0.18s;
}
.thumb--hidden:nth-child(6) {
  transition-delay: 0.12s;
}
.thumb--hidden:nth-child(7) {
  transition-delay: 0.06s;
}
.thumb--hidden:nth-child(8) {
  transition-delay: 0s;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.thumb:hover img {
  transform: scale(1.03);
}

.toggle-btn {
  width: 111px;
  height: 73px;
  border: none;
  background: #111;
  color: white;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 2;
  transition: 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.toggle-btn:hover {
  background: #333;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style> -->

<template>
  <div class="gallery">
    <!-- ===== Desktop / Tablet main image ===== -->
    <div
      v-if="!isMobile"
      class="main-image"
      data-aos="fade-down-right"
      data-aos-duration="1200"
    >
      <transition name="fade" mode="out-in">
        <img :src="selectedImage" :key="selectedImage" alt="mainImage" />
      </transition>
    </div>

    <!-- ===== Mobile slider ===== -->
    <div v-else class="mobile-slider">
      <div
        class="slider-track"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <div class="slide" v-for="(image, index) in sliderImages" :key="index">
          <img :src="image" alt="mainImage" />
        </div>
      </div>

      <div class="dots">
        <span
          v-for="(image, index) in sliderImages"
          :key="index"
          class="dot"
          :class="{ 'dot--active': index === activeIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <!-- ===== Thumbs (desktop / tablet only) ===== -->
    <div class="thumbs" v-if="!isMobile" data-aos="zoom-in-up">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="thumb"
        :class="{ 'thumb--hidden': !isExpanded && index >= 4 }"
        @click="selectImage(image)"
        data-aos="zoom-in"
        :data-aos-delay="index * 100"
        data-aos-duration="700"
      >
        <img :src="image" alt="" />
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
  </div>
</template>

<script>
import mainImage from "@/assets/images/main-image.png";
import gallery1 from "@/assets/images/gallery1.png";
import gallery2 from "@/assets/images/gallery2.png";
import gallery3 from "@/assets/images/gallery3.png";
import gallery4 from "@/assets/images/gallery4.png";
import gallery5 from "@/assets/images/gallery5.png";
import gallery6 from "@/assets/images/gallery6.png";
import gallery7 from "@/assets/images/gallery7.png";
import gallery8 from "@/assets/images/gallery8.png";

export default {
  props: {
    selectedColorImage: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      defaultImage: mainImage,
      selectedImage: mainImage,
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

      // mobile slider state
      isMobile: false,
      activeIndex: 0,
      touchStartX: 0,
      touchCurrentX: 0,
      isSwiping: false,
    };
  },
  computed: {
    // الصور اللي هتتعرض في سلايدر الموبايل: main image + كل صور الـ thumbs
    sliderImages() {
      return [this.selectedImage, ...this.images];
    },
  },
  watch: {
    selectedColorImage(newImage) {
      this.selectedImage = newImage || this.defaultImage;
      this.activeIndex = 0;
      this.$nextTick(() => {
        this.scrollToTop();
      });
    },
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener("resize", this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkIsMobile);
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 991;
    },
    scrollToTop() {
      const el = this.$el.querySelector(".main-image, .mobile-slider");
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    toggleGalley() {
      this.isExpanded = !this.isExpanded;
    },
    selectImage(image) {
      this.selectedImage = image;
      this.$nextTick(() => {
        this.scrollToTop();
      });
    },
    goToSlide(index) {
      this.activeIndex = index;
    },
    onTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
      this.isSwiping = true;
    },
    onTouchMove(e) {
      if (!this.isSwiping) return;
      this.touchCurrentX = e.touches[0].clientX;
    },
    onTouchEnd() {
      if (!this.isSwiping) return;
      const diff = this.touchStartX - this.touchCurrentX;
      const threshold = 50; // أقل مسافة سحب عشان نعتبرها swipe

      if (diff > threshold && this.activeIndex < this.sliderImages.length - 1) {
        // سحب لليسار -> الصورة الجاية
        this.activeIndex++;
      } else if (diff < -threshold && this.activeIndex > 0) {
        // سحب لليمين -> الصورة اللي فاتت
        this.activeIndex--;
      }

      this.isSwiping = false;
      this.touchStartX = 0;
      this.touchCurrentX = 0;
    },
  },
};
</script>

<style scoped>
.gallery {
  width: 100%;
  max-width: 648px;
  display: flex;
  flex-direction: column;
}

/* ===== Desktop main image ===== */
.main-image {
  width: 100%;
  aspect-ratio: 648 / 545;
  background: #fafafa;
  margin-bottom: 70px;
  max-height: 546px;
  overflow: hidden;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* ===== Mobile slider ===== */
.mobile-slider {
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.35s ease;
  touch-action: pan-y;
}

.slide {
  flex: 0 0 100%;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 320px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 480px) {
  .slide {
    max-height: 260px;
  }
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
}

.dot {
  width: 24px;
  height: 3px;
  background: #d9d9d9;
  cursor: pointer;
  transition: background 0.3s ease, width 0.3s ease;
}

.dot--active {
  background: #111;
  width: 32px;
}

/* ===== Thumbs ===== */
.thumbs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  position: relative;
}

.thumb {
  cursor: pointer;
  aspect-ratio: 311.85 / 400.94;
  overflow: hidden;
  opacity: 1;
  transform: scale(1) translateY(0);
  max-height: 400.94px;
  transition: opacity 0.4s ease, transform 0.4s ease, max-height 0.5s ease,
    margin 0.5s ease;
}

.thumb--hidden {
  opacity: 0;
  transform: scale(0.95) translateY(16px);
  max-height: 0;
  pointer-events: none;
  margin-top: -24px;
}

.thumb:nth-child(5) {
  transition-delay: 0s;
}
.thumb:nth-child(6) {
  transition-delay: 0.06s;
}
.thumb:nth-child(7) {
  transition-delay: 0.12s;
}
.thumb:nth-child(8) {
  transition-delay: 0.18s;
}

.thumb--hidden:nth-child(5) {
  transition-delay: 0.18s;
}
.thumb--hidden:nth-child(6) {
  transition-delay: 0.12s;
}
.thumb--hidden:nth-child(7) {
  transition-delay: 0.06s;
}
.thumb--hidden:nth-child(8) {
  transition-delay: 0s;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.thumb:hover img {
  transform: scale(1.03);
}

.toggle-btn {
  width: 111px;
  height: 73px;
  border: none;
  background: #111;
  color: white;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 2;
  transition: 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.toggle-btn:hover {
  background: #333;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 991px) {
  .gallery {
    max-width: 100%;
  }
}
</style>
