<template>
  <div class="Wallet">
    <div class="left">
      <label class="WalletTitle">How to get free ITC test tokens</label>
      <label class="WalletText">SETP 1 Download beta wallet</label>
      <label class="WalletTip">First things first,make sure you already installed ITC beta wallet</label>
      <div class="download">
        <a href="https://testflight.apple.com/join/sueJ20be" target="_blank" class="ios"></a>
        <a href="https://fir.im/ITCWallet" target="_blank" class="android"></a>
      </div>
      <label class="WalletText Step2">SETP 2 Click "Request" and pate you ITC wallet address</label>
      <div class="Request">
        <label class="RequestBtn" @click="goApply"></label>
        <!-- <button class="RequestBtn" @click="goApply">Request</button> -->
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
.Wallet {
  position: relative;
  width: 100vw;
  flex-wrap: wrap;
  display: flex;
}

//pc
@media screen and (min-width: 768px) {
  .Wallet {
    top: 100px;
    justify-content: center;
    .left {
      width: 50%;
      max-width: 520px;
      // background-color: @ThemeColor;
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
        color: transparent;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-image: repeating-linear-gradient(
          135deg,
          #015ba0,
          #005ca1,
          #005384,
          #004769,
          #004560,
          #005a79,
          #00789f,
          #007397,
          #006391,
          #01598b,
          #015c98
        );
        background-size: 300% 300%;
        animation: walletslide 3s infinite linear both;
        -moz-animation: walletslide 3s infinite linear both;
        -webkit-animation: walletslide 3s infinite linear both;
        -o-animation: walletslide 3s infinite linear both;
      }
      @keyframes walletslide {
        0% {
          background-position: 0% 0%;
        }
        100% {
          background-position: 100% 100%;
        }
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
          width: 47%;
          height: 100%;
          background: url("../assets/ios_download.png") no-repeat;
          background-size: cover;
        }
        .android {
          width: 47%;
          height: 100%;
          background: url("../assets/android_download.png") no-repeat;
          background-size: cover;
        }
      }
      .Request {
        position: relative;
        margin-top: 10px;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        .RequestBtn {
          position: relative;
          margin-left: -10px;
          width: 50%;
          height: 62px;
          background-color: @LightThemeColor;
          color: white;
          border: 1px solid transparent;
          border-radius: 6px;
          font-size: 1rem;
          outline: none;
          cursor: pointer;
          background: url("../assets/request_one.png") no-repeat center;
          background-size: contain;
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
    top: 51px;
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
        color: transparent;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-image: repeating-linear-gradient(
          135deg,
          #015ba0,
          #005ca1,
          #005384,
          #004769,
          #004560,
          #005a79,
          #00789f,
          #007397,
          #006391,
          #01598b,
          #015c98
        );
        background-size: 300% 300%;
        animation: walletslide 3s infinite linear both;
        -moz-animation: walletslide 3s infinite linear both;
        -webkit-animation: walletslide 3s infinite linear both;
        -o-animation: walletslide 3s infinite linear both;
      }
      @keyframes walletslide {
        0% {
          background-position: 0% 0%;
        }
        100% {
          background-position: 100% 100%;
        }
      }

      .WalletText {
        position: relative;
        display: block;
        width: 90%;
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
        width: 90%;
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
          background: url("../assets/ios_download.png") no-repeat;
          background-size: contain;
        }
        .android {
          width: 45%;
          height: 100%;
          background: url("../assets/android_download.png") no-repeat;
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
          width: 50%;
          height: 62px;
          position: relative;
          margin: 20px 0 0 5px;
          color: white;
          border: 1px solid transparent;
          border-radius: 6px;
          font-size: 1rem;
          outline: none;
          cursor: pointer;
          background: url("../assets/request_one.png") no-repeat center;
          background-size: contain;
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


