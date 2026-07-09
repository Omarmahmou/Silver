<template>
  <main class="product-page">
    <div class="container">
      <section class="product-layout">
        <ProductGallery
          class="left"
          :selected-color-image="selectedColorImage"
          :color-images="colorImages"
          :selected-color-index="selectedColorIndex"
        />
        <ProductDetails
          :product="product"
          :selected-color-index="selectedColorIndex"
          class="right"
          @select-color="onSelectColorIndex"
        />
      </section>
      <MoreItems />
    </div>
  </main>
</template>

<script>
import MoreItems from "@/components/MoreItems.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import ProductGallery from "@/components/ProductGallery.vue";

export default {
  components: {
    ProductGallery,
    ProductDetails,
    MoreItems,
  },
  data() {
    return {
      selectedColorIndex: 0,
      product: {
        name: "Bathroom sink faucet spout with Tube Design",
        sku: "K-77967-SN",
        colorOptions: [
          {
            color: require("@/assets/images/color-image1.png"),
            image: require("@/assets/images/main-image.png"),
          },
          {
            color: require("@/assets/images/color-image2.png"),
            image: require("@/assets/images/test2 (2).png"),
          },
          {
            color: require("@/assets/images/color-image3.png"),
            image: require("@/assets/images/test3.png"),
          },
          {
            color: require("@/assets/images/color-image4.png"),
            image: require("@/assets/images/test4.png"),
          },
        ],

        Describtion:
          "Modern form meets modern function by controlled forms and stark precision in every line and angle. you design your custom bath. Choose a spout, handles, and finish to build your own signature modern look. Minimalist and statuesque.",
        features: [
          `6 5/16" spout reach`,
          `1.2 gpm (4.5 lpm) maximum flow rate at 60 psi (4.14 bar)`,
          `Laminar flow delivers a graceful stream of water`,
          `Includes metal touch-activated drain with 1-1/4" tailpiece`,
          `Coordinate with your choice of Components bathroom sink faucet handles for a personalized design`,
          `This product can help a building earn Water Efficiency points in LEED® Green Building Rating System`,
        ],
        specs: {
          material: [
            "Premium metal construction for durability and reliability",
            "Finishes resist corrosion and tarnishing",
          ],

          installation: ["Widespread or remote valve."],

          faucet: [
            "Flow rate: 1.2 gal/min (4.5 l/min)",
            "Pressure: 60 psi (4.1 bar)",
            "Drain included: Yes",
          ],

          spout: [`Spout reach: 6-5/16" (160 mm)`],
        },
      },
    };
  },
  computed: {
    colorImages() {
      return this.product.colorOptions.map((color) => color.image);
    },
    selectedColorImage() {
      return this.colorImages[this.selectedColorIndex] || null;
    },
  },
  methods: {
    onSelectColorIndex(index) {
      this.selectedColorIndex = index;
    },
  },
};
</script>

<style scoped>
body {
  background: #fafaf8;
}
.product-page {
  width: 100%;
  margin-top: 54px;
}

.container {
  width: 100%;
  max-width: 1440px;
  padding: 0 60px;
  margin: 0 auto;
}

.product-layout {
  display: flex;
  align-items: flex-start;
  gap: 135px;
}
.left {
  flex: 1.45;
  min-width: 0;
}

.right {
  flex: 1;
  min-width: 0;
}

@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }
  .product-layout {
    gap: 60px;
  }
}

@media (max-width: 991px) {
  .product-page {
    margin-top: 26px;
  }
  .container {
    padding: 0 15px;
  }
  .product-layout {
    gap: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
