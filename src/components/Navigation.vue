<template>
  <div class="Navigation">
    <div class="NavigationHeader">
      <!-- 左边logo -->
      <div class="LeftNaviBar">
        <a href="https://iotchain.io/">
          <img class="logo" src="../assets/logo.png">
        </a>
      </div>
      <!-- 右边菜单 -->
      <div class="RightNaviBar">
        <div class="PCMenu">
          <a v-for="(item,index) in linkList" v-bind:key="index" :href="item.value">
            <label class="MenuTag hvr-underline-from-center">{{item.tag}}</label>
          </a>
        </div>
        <div class="MobileMenu">
          <button class="ShowMenu" @click="ctrlMenu"></button>
        </div>
      </div>
    </div>
    <div class="MobileMenuList animated bounceInDown" v-if="showMobileMenu">
      <a
        v-for="(item,index) in linkList"
        v-bind:key="index"
        :href="item.value"
        class="MobileMenuTag"
      >
        <label>{{item.tag}}</label>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: function() {
    return {
      linkList: [
        {
          tag: "Wallet",
          value: "https://iotchain.io/wallet"
        },
        {
          tag: "Explorer",
          value: "https://iotchain.io/explorer"
        },
        {
          tag: "News",
          value: "https://iotchain.io/news"
        },
        // {
        //   tag: "White Paper",
        //   value: "https://iotchain.io/index.html?scroll=m22"
        // },
        // {
        //   tag: "Team",
        //   value: "https://iotchain.io/index.html?scroll=m55"
        // },
        {
          tag: "Bounty",
          value: "https://bounty.iotchain.io/"
        }
      ],
      showMobileMenu: false
    };
  },
  methods: {
    ctrlMenu: function() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/color.less";
@import "../less/hover.less";
@import "../less/animate.less";

.Navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  .NavigationHeader {
    display: flex;
    justify-content: space-between;
    background-color: black;
    opacity: 0.7;
    .LeftNaviBar {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .logo {
        display: inline-block;
        margin-left: 5vw;
        max-width: 230px;
        max-height: 60px;
        width: 25vw;
        height: 6.25vw;
      }
    }

    .RightNaviBar {
      width: 50%;
      display: flex;
      align-items: center;
    }
  }
}

@media screen and (max-width: 768px) {
  //手机
  .Navigation {
    .NavigationHeader {
      height: 50px;
      .RightNaviBar {
        justify-content: flex-end;
        .PCMenu {
          display: none;
        }
        .MobileMenu {
          .ShowMenu {
            width: 50px;
            height: 20px;
            background: url("../assets/menu.png") no-repeat center;
            background-size: 46% 100%;
            border: none;
            outline: none;
          }
        }
      }
    }
    .MobileMenuList {
      position: fixed;
      top: 51px;
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      background-color: @ThemeColor;
      opacity: 0.7;
      border-bottom: 1px solid white;
      .MobileMenuTag {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        text-align: left;
        padding-left: 5vw;
        border: 0.5px solid white;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  //PC
  .Navigation {
    min-width: 1080px;
    .NavigationHeader {
      height: 90px;
      .RightNaviBar {
        justify-content: center;
        .MenuTag {
          margin: 0 10px 0 10px;
          height: 2rem;
          line-height: 2rem;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
        }
        .MobileMenu {
          display: none;
        }
      }
    }
    .MobileMenuList {
      display: none;
    }
  }
}
</style>


