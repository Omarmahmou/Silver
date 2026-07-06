<template>
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
@media (max-width: 991px) {
  .thumbs {
    display: none;
  }
  .main-image {
    display: none;
  }
}
</style>
