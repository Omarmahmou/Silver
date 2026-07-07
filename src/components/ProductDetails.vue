<template>
  <div
    class="product-details"
    data-aos="fade-up-left"
    data-aos-duration="1100"
    data-aos-delay="100"
  >
    <div class="info">
      <h1 class="title">{{ product.name }}</h1>
      <span class="sku">Sku: {{ product.sku }}</span>
    </div>
    <div class="colors-section">
      <h3>Color</h3>
      <div class="colors-wrapper">
        <div
          v-for="(option, index) in product.colorOptions"
          :key="index"
          class="color-item"
          :class="{ active: selectedColorIndex === index }"
          @click="selectColor(option, index)"
        >
          <img :src="option.color" alt="colorImage" />
        </div>
      </div>
    </div>
    <div class="description-section">
      <h3>Description</h3>

      <p>
        {{ product.Describtion }}
      </p>
    </div>
    <div class="accordion">
      <div class="accordion-header" @click="toggleAccordion('features')">
        <h3 :class="{ active: openedAccordion.features }">Features</h3>

        <span
          class="accordion-icon"
          :class="{ active: openedAccordion.features }"
        >
        </span>
      </div>

      <transition name="accordion">
        <div v-show="openedAccordion.features" class="accordion-content">
          <ul>
            <li v-for="(feature, index) in product.features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <div class="accordion">
      <div class="accordion-header" @click="toggleAccordion('specs')">
        <h3 :class="{ active: openedAccordion.specs }">Specs</h3>

        <span class="accordion-icon" :class="{ active: openedAccordion.specs }">
        </span>
      </div>

      <transition name="accordion">
        <div v-show="openedAccordion.specs" class="accordion-content">
          <div class="spec-group">
            <h4>Material</h4>

            <ul>
              <li v-for="(item, index) in product.specs.material" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="spec-group">
            <h4>Installation</h4>

            <ul>
              <li>{{ product.specs.installation[0] }}</li>
            </ul>
          </div>

          <div class="spec-group">
            <h4>Faucet</h4>

            <ul>
              <li v-for="(item, index) in product.specs.faucet" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="spec-group">
            <h4>Spout</h4>

            <ul>
              <li>{{ product.specs.spout[0] }}</li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <div
      class="bottom-divider"
      :class="{ hidden: openedAccordion.specs }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },

    selectedColorIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      openedAccordion: {
        features: false,
        specs: false,
      },
      // selectedColorIndex: 0,
    };
  },

  methods: {
    toggleAccordion(section) {
      this.openedAccordion[section] = !this.openedAccordion[section];
    },
    selectColor(option, index) {
      // this.selectedColorIndex = index;
      this.$emit("select-color", index);
    },
  },
};
</script>

<style scoped>
.product-details {
  background: #ffffff;
  padding: 66px 45.24px 65px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
}

.info {
  margin-bottom: 36.8px;
}
.title {
  font-weight: 600;
  /* font-size: 34px; */
  color: #131313;
  padding-left: 40.76px;
  line-height: 1.2;
  margin-bottom: 15.85px;
}
.sku {
  padding-left: 40.76px;
  color: #b5b6b5;
  font-size: 22px;
  font-weight: 400;
}
.colors-section {
  padding-left: 40.76px;
  margin-bottom: 48px;
}
.colors-section h3 {
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 600;
}
.colors-wrapper {
  display: flex;
  gap: 13.7px;
}

.color-item {
  width: 67.17px;
  height: 54.83px;
  cursor: pointer;
  border: 2px solid transparent;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}
.color-item.active {
  border-color: #131313;
}
.color-item img {
  width: 100%;
  height: 100%;
}

.description-section {
  padding-left: 40.76px;
  margin-bottom: 27.6px;
}

.description-section h3 {
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 22px;
}
.description-section p {
  color: #b5b6b5;
  line-height: 1.4;
  text-align: justify;
  max-width: 100%;
  font-size: 14px;
}

/*  */
.accordion {
  border-top: 2.37px solid #cacbcb;
  padding: 25px 0;
  padding-left: 40.76px;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #717070;
}

.accordion-header h3 {
  font-size: 22px;
  font-weight: 600;
  transition: color 0.3s ease;
}

.accordion-header h3.active {
  color: #000;
}

.accordion-content {
  padding-top: 20px;
}

.accordion-content ul {
  padding-left: 18px;
}

.accordion-content li {
  color: #b5b6b5;
  line-height: 1.3;
  margin-bottom: 5px;
}

.spec-group {
  margin-bottom: 11px;
}

.spec-group h4 {
  margin-bottom: 10px;
}

.bottom-divider {
  border-top: 2.37px solid #cacbcb;
  transition: opacity 0.35s ease;
}

.bottom-divider.hidden {
  opacity: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
}

.accordion-enter-to,
.accordion-leave {
  max-height: 500px;
  opacity: 1;
  padding-top: 20px;
}

.accordion-icon {
  font-size: 28px;
  font-weight: 300;
  display: inline-block;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.accordion-icon.active {
  transform: rotate(180deg);
}

.accordion-icon.active::before {
  content: "-";
}

.accordion-icon::before {
  content: "+";
}

@media (max-width: 991px) {
  .product-details {
    padding: 36px 31px 55px;
  }
}
@media (max-width: 468px) {
  .title {
    font-size: 24px;
  }
  .sku {
    font-size: 20px;
  }
  .title,
  .sku,
  .colors-section,
  .description-section,
  .accordion {
    padding-left: 15px;
  }
}
</style>
