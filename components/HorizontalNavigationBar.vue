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

<style lang="scss" scoped>

.horizon-navigation-bar-container {
  z-index: 6;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--app-header-height);
  background-color: var(--white);
  box-shadow: 0 2px 3px rgb(0 0 0 / 16%);
  transition: all .2s ease;

  .wrap-navigation-bar {
    display: flex;
    gap: 48px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    padding: 0 16px;

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
      display: flex;
      flex: 1;
      gap: 48px;
      align-items: center;

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
        padding: 0 16px;
        font-size: 12px;
        color: var(--gs-44);
        text-decoration: none;
      }

      .sign-up-link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0 16px;
        font-size: 12px;
        color: var(--white);
        text-decoration: none;
        background-color: var(--gs-22);
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
          padding: 0 24px;
          font-size: 16px;
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
