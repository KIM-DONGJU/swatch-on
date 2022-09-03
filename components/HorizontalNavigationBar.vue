<template>
  <div class="horizon-navigation-bar-container">
    <div class="wrap-navigation-bar">
      <div class="wrap-swatch-on-logo">
        <img
          class="swatch-on-logo"
          src="@/assets/images/swatch-on-logo-black.svg"
          alt="SwatchOn - No. 1 Wholesale fabric platform for Fashion Brands"
        >
      </div>
      <div class="navigation-list">
        <nuxt-link
          class="navigation-link"
          to=""
        >
          EXPLORE
        </nuxt-link>
        <nuxt-link
          class="navigation-link"
          to=""
        >
          SEARCH
        </nuxt-link>
      </div>
      <div class="wrap-login">
        <nuxt-link
          class="login-link"
          to=""
        >
          LOGIN
        </nuxt-link>
        <nuxt-link
          class="sign-up-link"
          to=""
        >
          JOIN FOR FREE
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.horizon-navigation-bar-container {
  width: 100%;
  height: var(--app-header-height);
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgb(0 0 0 / 16%);
  transition: all .2s ease;
  z-index: 6;
  flex-shrink: 0;

  .wrap-navigation-bar {
    width: 100%;
    height: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    gap: 48px;

    .wrap-swatch-on-logo {
      position: relative;
      width: 120px;
      cursor: pointer;
      .swatch-on-logo {
        width: 100%;
        object-fit: contain;
      }
    }

    .navigation-list {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 48px;

      .navigation-link {
        font-size: 16px;
        color: var(--gs-22);
        text-decoration: none;
      }
    }

    .wrap-login {
      display: flex;
      align-items: center;
      height: 100%;
      margin-right: -16px;

      .login-link {
        font-size: 12px;
        color: var(--gs-44);
        text-decoration: none;
        padding: 0 16px;
      }

      .sign-up-link {
        height: 100%;
        font-size: 12px;
        color: var(--white);
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--gs-22);
        padding: 0 16px;
      }
    }
  }
}

@media screen and (min-width: 992px){
  .horizon-navigation-bar-container {
    .wrap-navigation-bar {
      .wrap-swatch-on-logo {
        width: 150px;
      }

      .wrap-login {
        .login-link,
        .sign-up-link {
          font-size: 16px;
          padding: 0 24px;
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .horizon-navigation-bar-container {
    .wrap-navigation-bar {
      padding: 0 48px;
      .wrap-login {
        margin-right: -48px;
        .login-link,
        .sign-up-link {
          padding: 0 32px;
        }
      }
    }
  }
}
</style>
