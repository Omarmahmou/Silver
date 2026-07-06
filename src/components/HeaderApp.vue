<template>
  <header class="header">
    <div class="container-header">
      <div class="logo">
        <img :src="require('@/assets/icons/Group 1 (3).svg')" alt="" />
      </div>

      <nav class="nav">
        <ul>
          <li v-for="item in menuItems" :key="item.id">
            <a href="#" :class="{ active: item.active }"
              >{{ item.title
              }}<span v-if="item.Badge" class="badge">{{ item.Badge }}</span></a
            >
          </li>
        </ul>
      </nav>

      <div class="actions">
        <button class="search-btn">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5729 20.0938L18.0313 16.5625C19.1739 15.1067 19.794 13.309 19.7917 11.4583C19.7917 9.81016 19.3029 8.199 18.3873 6.82859C17.4716 5.45818 16.1701 4.39007 14.6474 3.75934C13.1246 3.12861 11.4491 2.96358 9.83259 3.28513C8.21608 3.60667 6.73122 4.40034 5.56578 5.56578C4.40034 6.73122 3.60667 8.21608 3.28513 9.83259C2.96358 11.4491 3.12861 13.1246 3.75934 14.6474C4.39007 16.1701 5.45818 17.4716 6.82859 18.3873C8.199 19.3029 9.81016 19.7917 11.4583 19.7917C13.309 19.794 15.1067 19.1739 16.5625 18.0313L20.0938 21.5729C20.1906 21.6706 20.3058 21.7481 20.4327 21.8009C20.5597 21.8538 20.6958 21.881 20.8333 21.881C20.9709 21.881 21.107 21.8538 21.2339 21.8009C21.3609 21.7481 21.4761 21.6706 21.5729 21.5729C21.6706 21.4761 21.7481 21.3609 21.8009 21.2339C21.8538 21.107 21.881 20.9709 21.881 20.8333C21.881 20.6958 21.8538 20.5597 21.8009 20.4327C21.7481 20.3058 21.6706 20.1906 21.5729 20.0938ZM5.20834 11.4583C5.20834 10.2222 5.57489 9.01383 6.26165 7.98602C6.94841 6.95822 7.92453 6.15714 9.06657 5.68409C10.2086 5.21104 11.4653 5.08727 12.6777 5.32843C13.89 5.56959 15.0037 6.16484 15.8778 7.03892C16.7518 7.913 17.3471 9.02664 17.5882 10.239C17.8294 11.4514 17.7056 12.7081 17.2326 13.8501C16.7595 14.9921 15.9585 15.9683 14.9307 16.655C13.9028 17.3418 12.6945 17.7083 11.4583 17.7083C9.80073 17.7083 8.21102 17.0499 7.03892 15.8778C5.86682 14.7057 5.20834 13.1159 5.20834 11.4583Z"
              fill="white"
            />
          </svg>
        </button>
        <div class="lang-selector">
          <span class="lang-text">EN</span>
          <svg
            class="lang-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1L6 7L11 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <a href="#" class="cta-btn">Contact Us</a>
      </div>

      <button class="hamburger-btn" @click="toggleMobileMenu">
        <img :src="require('@/assets/icons/hamburger.svg')" />
      </button>
    </div>

    <transition name="fade">
      <div v-if="mobileMenu" class="overlay" @click="toggleMobileMenu"></div>
    </transition>

    <transition name="slide">
      <div class="mobile-menu" v-if="mobileMenu">
        <button class="close-btn" @click="toggleMobileMenu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line
              x1="1"
              y1="1"
              x2="19"
              y2="19"
              stroke="white"
              stroke-width="1.5"
            />
            <line
              x1="19"
              y1="1"
              x2="1"
              y2="19"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        </button>

        <nav class="mobile-nav">
          <ul>
            <li v-for="item in menuItems" :key="item.id">
              <a
                href="#"
                :class="{ active: item.active }"
                @click="toggleMobileMenu"
                >{{ item.title
                }}<span v-if="item.Badge" class="badge">{{
                  item.Badge
                }}</span></a
              >
            </li>
          </ul>
        </nav>

        <div class="mobile-footer">
          <div class="mobile-footer-top">
            <button class="search-btn">
              <svg width="22" height="22" viewBox="0 0 25 25" fill="none">
                <path
                  d="M21.5729 20.0938L18.0313 16.5625C19.1739 15.1067 19.794 13.309 19.7917 11.4583C19.7917 9.81016 19.3029 8.199 18.3873 6.82859C17.4716 5.45818 16.1701 4.39007 14.6474 3.75934C13.1246 3.12861 11.4491 2.96358 9.83259 3.28513C8.21608 3.60667 6.73122 4.40034 5.56578 5.56578C4.40034 6.73122 3.60667 8.21608 3.28513 9.83259C2.96358 11.4491 3.12861 13.1246 3.75934 14.6474C4.39007 16.1701 5.45818 17.4716 6.82859 18.3873C8.199 19.3029 9.81016 19.7917 11.4583 19.7917C13.309 19.794 15.1067 19.1739 16.5625 18.0313L20.0938 21.5729C20.1906 21.6706 20.3058 21.7481 20.4327 21.8009C20.5597 21.8538 20.6958 21.881 20.8333 21.881C20.9709 21.881 21.107 21.8538 21.2339 21.8009C21.3609 21.7481 21.4761 21.6706 21.5729 21.5729C21.6706 21.4761 21.7481 21.3609 21.8009 21.2339C21.8538 21.107 21.881 20.9709 21.881 20.8333C21.881 20.6958 21.8538 20.5597 21.8009 20.4327C21.7481 20.3058 21.6706 20.1906 21.5729 20.0938ZM5.20834 11.4583C5.20834 10.2222 5.57489 9.01383 6.26165 7.98602C6.94841 6.95822 7.92453 6.15714 9.06657 5.68409C10.2086 5.21104 11.4653 5.08727 12.6777 5.32843C13.89 5.56959 15.0037 6.16484 15.8778 7.03892C16.7518 7.913 17.3471 9.02664 17.5882 10.239C17.8294 11.4514 17.7056 12.7081 17.2326 13.8501C16.7595 14.9921 15.9585 15.9683 14.9307 16.655C13.9028 17.3418 12.6945 17.7083 11.4583 17.7083C9.80073 17.7083 8.21102 17.0499 7.03892 15.8778C5.86682 14.7057 5.20834 13.1159 5.20834 11.4583Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="lang-selector">
              <span class="lang-text">EN</span>
              <svg
                class="lang-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 7L11 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <a href="#" class="cta-btn mobile-cta">Contact Us</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      mobileMenu: false,
      menuItems: [
        { id: 1, title: "Home" },
        { id: 2, title: "Products", Badge: "SALE", active: true },
        { id: 3, title: "colllections" },
        { id: 4, title: "About" },
        { id: 5, title: "Contact Us" },
      ],
    };
  },
  watch: {
    mobileMenu(isOpen) {
      document.body.style.overflow = isOpen ? "hidden" : "";
    },
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
  },
};
</script>

<style scoped>
.header {
  background: #121211;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 76px;
  width: 100%;
}

.container-header {
  padding: 22px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 50px;
}
.nav ul {
  display: flex;
  list-style: none;
  gap: 53px;
  margin: 0 auto;
}

.nav ul li a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
  font-size: 15px;
}
.nav ul li a.active::after {
  content: "";
  position: absolute;
  bottom: -28px;
  left: -9px;
  width: 85px;
  height: 1.5px;
  background-color: #fffffe;
}
.nav ul li a:hover,
.nav ul li a.active {
  color: #fff;
  font-weight: 400;
}

.badge {
  background-color: #f0d29f;
  color: black;
  font-size: 8px;
  font-weight: 500;
  padding: 1px;
  position: absolute;
  top: -2px;
  right: -27px;
  letter-spacing: 0.5px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.search-btn {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}
.search-btn svg {
  display: block;
}
.lang-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #fafafa;
  font-family: Arial, sans-serif;
  font-size: 13px;
  font-weight: 500;
}
.lang-text {
  letter-spacing: 1.5px;
}
.lang-arrow {
  display: flex;
  align-items: center;
}

.cta-btn {
  background-color: #f0d29f;
  color: #121211;
  text-decoration: none;
  padding: 9px 20px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: 0.3s;
  display: inline-block;
}
.cta-btn:hover {
  background-color: #cda577;
  opacity: 0.9;
}

.hamburger-btn {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
}

.overlay {
  display: none;
}

@media (max-width: 991px) {
  .header {
    height: 68px;
    width: 100%;
  }
  .nav,
  .actions {
    display: none;
  }

  .hamburger-btn {
    display: block;
  }

  .overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(340px, 85vw);
    background: #121211;
    z-index: 1002;
    padding: 28px 30px;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .close-btn {
    align-self: flex-end;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-bottom: 40px;
  }

  .mobile-nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .mobile-nav ul li a {
    color: #999;
    text-decoration: none;
    font-size: 18px;
    position: relative;
    display: inline-block;
  }

  .mobile-nav ul li a.active {
    color: #fff;
    padding-bottom: 6px;
    border-bottom: 1.5px solid #fff;
  }

  .mobile-footer {
    margin-top: auto;
    padding-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    gap: 50px;
  }

  .mobile-footer-top {
    display: flex;
    gap: 25px;
  }

  .mobile-cta {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    padding: 14px 20px;
  }
  /* transition */
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
