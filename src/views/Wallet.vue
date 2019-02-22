<template>
  <div class="Wallet">
    <div class="left">
      <label class="WalletTitle textBuleGradient textAnimation">{{$t("Wallet.title")}}</label>
      <label class="WalletText">{{$t("Wallet.stepone")}}</label>
      <label class="WalletTip">{{$t("Wallet.steponedes")}}</label>
      <div class="download">
        <a href="https://testflight.apple.com/join/sueJ20be" target="_blank" class="ios"></a>
        <a href="https://fir.im/ITCWallet" target="_blank" class="android"></a>
      </div>
      <label class="WalletText Step2">{{$t("Wallet.steptwo")}}</label>
      <div class="Request">
        <button
          class="RequestBtn backgroundOrangeGradient backgroundAnimation"
          @click="goApply"
        >{{$t('Common.Request')}}</button>
      </div>
    </div>
    <div class="right">
      <div class="WalletLogo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wallet",
  methods: {
    goApply: function() {
      this.$router.push({ path: "apply" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/color.less";
@import "../less/gradient.less";

.Wallet {
  position: relative;
  width: 100vw;
  flex-wrap: wrap;
  display: flex;
}

//pc
@media screen and (min-width: 768px) {
  .Wallet {
    top: 150px;
    margin-bottom: 70px;
    justify-content: center;
    .left {
      width: 50%;
      max-width: 520px;
      .WalletTitle {
        display: block;
        position: relative;
        margin-top: 50px;
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: left;
        font-size: 30px;
        letter-spacing: 1.1px;
        font-weight: 800;
      }
      .WalletText {
        position: relative;
        display: block;
        width: 100%;
        line-height: 2rem;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        margin-top: 10px;
        color: @WalletTextColor;
      }
      .WalletTip {
        position: relative;
        display: block;
        width: 100%;
        line-height: 1rem;
        font-size: 13px;
        text-align: left;
        color: @WalletTextColor;
      }
      .Step2 {
        margin-top: 30px;
      }
      .download {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 73px;
        margin-top: 10px;
        .ios {
          width: 49%;
          height: inherit;
          background: url("../assets/ios_en.png") no-repeat left center;
          background-size: contain;
        }
        .android {
          width: 49%;
          height: inherit;
          background: url("../assets/android_en.png") no-repeat left center;
          background-size: contain;
        }
      }
      .Request {
        position: relative;
        margin-top: 5px;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        .RequestBtn {
          position: relative;
          width: 43%;
          height: 45px;
          color: white;
          background-color: @ThemeColor;
          border: 1px solid transparent;
          border-radius: 6px;
          font-size: 1.2rem;
          outline: none;
          cursor: pointer;
          border: none;
        }
      }
    }
    .right {
      width: 50%;
      max-width: 520px;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      .WalletLogo {
        margin: 50px 0 0 50px;
        width: 100%;
        height: 327px;
        background: url("../assets/step_one.png") no-repeat center;
        background-size: contain;
      }
    }
  }
}

//mobile
@media screen and (max-width: 768px) {
  .Wallet {
    top: 70px;
    justify-content: center;
    .left {
      width: 100%;
      .WalletTitle {
        display: block;
        position: relative;
        top: 20px;
        width: 100%;
        height: 3rem;
        line-height: 1.5rem;
        text-align: center;
        font-size: 1.5rem;
        letter-spacing: 1.1px;
        font-weight: 800;
      }

      .WalletText {
        position: relative;
        display: block;
        width: 93%;
        line-height: 1.5rem;
        font-size: 1rem;
        font-weight: 500;
        text-align: left;
        margin: 0 auto;
        top: 50px;
        color: @WalletTextColor;
      }
      .WalletTip {
        position: relative;
        display: block;
        width: 93%;
        line-height: 1.2rem;
        font-size: 13px;
        text-align: left;
        margin: 0 auto;
        top: 50px;
        color: @WalletTextColor;
      }

      .Step2 {
        margin-top: 20px;
      }
      .download {
        position: relative;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 62px;
        top: 50px;
        // background-color: #007397;
        .ios {
          width: 45%;
          height: 100%;
          background: url("../assets/ios_en.png") no-repeat left center;
          background-size: contain;
        }
        .android {
          width: 45%;
          height: 100%;
          background: url("../assets/android_en.png") no-repeat left center;
          background-size: contain;
        }
      }
      .Request {
        position: relative;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 40px;
        .RequestBtn {
          width: 45%;
          height: 40px;
          position: relative;
          margin: 55px 0 0 10px;
          color: white;
          border: 1px solid transparent;
          border-radius: 6px;
          font-size: 1rem;
          outline: none;
          cursor: pointer;
        }
      }
    }
    .right {
      position: relative;
      top: 80px;
      height: 350px;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      .WalletLogo {
        width: 465px;
        height: 327px;
        background: url("../assets/step_one.png") no-repeat center;
        background-size: contain;
      }
    }
  }
}
</style>


