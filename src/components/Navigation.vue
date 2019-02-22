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
            <label class="MenuTag hvr-underline-from-center">{{$t(item.tag)}}</label>
          </a>
          <label
            class="LangLabel hvr-underline-reveal"
            @mouseenter="mouseEnterEvent"
            @mouseleave="mouseLeaveEvent"
          >{{$t("Navigation.lang.currentlang.value")}}</label>
        </div>
        <div class="MobileMenu">
          <button class="ShowMenu" @click="ctrlMenu"></button>
          <img class="ChangeLang" v-bind:src="getLangImg" @click="mobileChangeLang">
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
        <label>{{$t(item.tag)}}</label>
      </a>
    </div>
    <div
      class="LangList"
      :style="{left:langMenu.x+'px',top:langMenu.y+'px'}"
      v-if="showPCLangMenu"
      @mouseenter="listShowEvent"
      @mouseleave="listHideEvent"
    >
      <label class="LangCell" @click="changeLang('langone')">{{$t("Navigation.lang.langone.value")}}</label>
      <label class="LangCell" @click="changeLang('langtwo')">{{$t("Navigation.lang.langtwo.value")}}</label>
    </div>
  </div>
</template>

<script>
import cnLangImg from "../assets/cn.png";
import enLangImg from "../assets/en.png";
import krLangImg from "../assets/kr.png";

export default {
  name: "Navigation",
  data: function() {
    return {
      linkList: [
        {
          tag: "Navigation.Wallet",
          value: "https://iotchain.io/wallet"
        },
        {
          tag: "Navigation.Explorer",
          value: "https://iotchain.io/explorer"
        },
        {
          tag: "Navigation.News",
          value: "https://iotchain.io/news"
        },
        {
          tag: "Navigation.Bounty",
          value: "https://bounty.iotchain.io/"
        }
      ],
      showMobileMenu: false,
      showPCLangMenu: false,
      langMenu: {
        x: 0,
        y: 0
      }
    };
  },
  computed: {
    getLangImg: function() {
      if (this.$i18n.locale === "en") {
        return cnLangImg;
      }
      if (this.$i18n.locale === "cn") {
        return krLangImg;
      }
      if (this.$i18n.locale === "kr") {
        return enLangImg;
      }
      return null;
    }
  },
  methods: {
    ctrlMenu: function() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    mobileChangeLang: function() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "cn";
        return;
      }
      if (this.$i18n.locale === "cn") {
        this.$i18n.locale = "kr";
        return;
      }
      if (this.$i18n.locale === "kr") {
        this.$i18n.locale = "en";
        return;
      }
    },
    changeLang: function(key) {
      this.$i18n.locale = this.$t("Navigation.lang." + key + ".key");
    },
    mouseEnterEvent: function(e) {
      if (this.showPCLangMenu === false) {
        this.showPCLangMenu = true;
      }
      if (this.langMenu.x != e.currentTarget.offsetLeft) {
        this.langMenu.x =
          e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2 - 50;
      }
      if (this.langMenu.y != e.currentTarget.offsetTop) {
        this.langMenu.y =
          e.currentTarget.offsetTop + e.currentTarget.offsetHeight;
      }
    },
    mouseLeaveEvent: function() {
      if (this.showPCLangMenu === true) {
        this.showPCLangMenu = false;
      }
    },
    listShowEvent: function() {
      if (this.showPCLangMenu === false) {
        this.showPCLangMenu = true;
      }
    },
    listHideEvent: function() {
      if (this.showPCLangMenu === true) {
        this.showPCLangMenu = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/color.less";
@import "../less/hover/hover.less";
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
          display: flex;
          width: 90px;
          justify-content: space-around;
          align-items: center;
          .ShowMenu {
            width: 24px;
            height: 23px;
            background: url("../assets/menu.png") no-repeat center;
            background-size: contain;
            border: none;
            outline: none;
          }
          .ChangeLang {
            margin-right: 5px;
            display: inline-block;
            width: 26px;
            height: 28px;
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
    .LangList {
      display: none;
    }
  }
}

//PC
@media screen and (min-width: 768px) {
  .Navigation {
    min-width: 1080px;
    .NavigationHeader {
      height: 100px;
      .RightNaviBar {
        justify-content: flex-end;
        padding-right: 20px;
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
        .LangLabel {
          margin: 0 10px 0 10px;
          height: 2rem;
          line-height: 2rem;
          color: white;
          background-color: transparent;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
    .MobileMenuList {
      display: none;
    }
    .LangList {
      position: fixed;
      width: 100px;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      // background-color: antiquewhite;
      .LangCell {
        flex: none;
        padding-bottom: 5px;
        width: 100%;
        font-size: 1rem;
        height: 1.5rem;
        line-height: 1.5rem;
        background-color: black;
        opacity: 0.7;
        color: white;
        cursor: pointer;
      }
      .LangCell:hover {
        color: @ThemeColor;
      }
    }
  }
}
</style>


