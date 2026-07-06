<template>
  <footer class="footer">
    <div class="container">
      <img
        :src="require('@/assets/icons/Group 1 (3).svg')"
        alt="Silver Design"
        class="footer-logo"
      />

      <div class="footer-grid">
        <div class="footer-column">
          <h3 class="footer-title">Subscribe</h3>

          <p class="footer-text">Join our newsletter</p>

          <form class="subscribe-form">
            <input type="email" placeholder="Enter your email" />

            <button type="submit" class="submit-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-send-horizontal-icon lucide-send-horizontal"
              >
                <path
                  d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
                />
                <path d="M6 12h16" />
              </svg>
            </button>
          </form>

          <div class="socials">
            <a
              v-for="social in socialLinks"
              :key="social.alt"
              :href="social.link"
            >
              <img :src="social.icon" :alt="social.alt" />
            </a>
          </div>
        </div>

        <div class="footer-column">
          <h3 class="footer-title">Support</h3>

          <p>{{ support.address1 }}</p>
          <p>{{ support.address2 }}</p>

          <p class="space-top">{{ support.email }}</p>

          <p>{{ support.phone }}</p>
        </div>

        <div class="footer-column">
          <h3 class="footer-title">Categories</h3>

          <a
            v-for="category in categories"
            :key="category.link"
            :href="category.link"
            >{{ category.title }}</a
          >
        </div>

        <div class="footer-column">
          <h3 class="footer-title">Quick Link</h3>

          <a v-for="link in quickLinks" :key="link.title" :href="link.url">
            {{ link.title }}
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">© Copyright Rimel 2022. All rights reserved</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          icon: require("@/assets/icons/Icon-Facebook.svg"),
          alt: "Facebook",
          link: "#",
        },
        {
          icon: require("@/assets/icons/Icon-Twitter.svg"),
          alt: "Twitter",
          link: "#",
        },
        {
          icon: require("@/assets/icons/icon-instagram.svg"),
          alt: "Instagram",
          link: "#",
        },
        {
          icon: require("@/assets/icons/Icon-Linkedin.svg"),
          alt: "LinkedIn",
          link: "#",
        },
      ],

      support: {
        address1: "111 Name ST, City, DH",
        address2: "1515, Saudi Arabia.",
        email: "SILVER@gmail.com",
        phone: "+88015-88888-9999",
      },

      categories: [
        {
          title: "Collections",
          link: "#",
        },
        {
          title: "Products",
          link: "#",
        },
        {
          title: "About",
          link: "#",
        },
      ],

      quickLinks: [
        {
          title: "Privacy Policy",
          url: "#",
        },
        {
          title: "FAQ",
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  background: #121211;
  color: #fff;
  padding: 97px 0 0;
}

.container {
  max-width: 1440px;
  margin: auto;
  padding: 0 100px 0 79px;
}

.footer-logo {
  width: 120px;
  margin-bottom: 34px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 87px;
  padding-bottom: 12px;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 24px;
}

.footer-column p,
.footer-column a {
  color: #e7e7e7;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  font-size: 16px;
}

.footer-column a {
  margin-bottom: 16px;
}

.space-top {
  margin-top: 18px;
}

.footer-text {
  color: #b7b7b7;
  margin-bottom: 18px;
}
.subscribe-form {
  width: 100%;
  max-width: 217px;
  height: 48px;
  border: 2px solid #fafafa;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  position: relative;
}

.submit-btn {
  width: 52px;
  height: 52px;
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  right: 0;
}

.submit-btn svg {
  color: #ffffff;
}

.subscribe-form input {
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 0 18px;
}

.socials {
  display: flex;
  gap: 24px;
}

.socials a {
  color: white;
  font-size: 18px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  padding: 16px 0 20px 0;
  color: #777;
  font-size: 16px;
}
</style>
