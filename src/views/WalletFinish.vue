<template>
  <div class="WalletFinish">
    <div class="left">
      <label class="WalletTitle WalletTitleFrame">Now,you're all ready</label>
      <div class="WalletShowLogo">
        <img class="logo" src="../assets/step_two.png">
      </div>
    </div>
    <div class="right">
      <div class="ApplyForm">
        <img src="../assets/sicob.png" class="FormLogo">
        <label class="WalletTitle SuccessFrame">Request Success</label>
        <label
          class="inputTitle"
        >You will receive ITC within 10 min.Every request will grant you 100 ITC test tokens.</label>
        <img src="../assets/apply_success.png" class="success">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WalletFinish"
};
</script>

<style lang="less" scoped>
@import "../less/color.less";

.WalletFinish {
  position: relative;
  width: 100vw;
  height: 500px;
  display: flex;
  .WalletTitle {
    display: block;
    position: relative;
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
}

//pc
@media screen and (min-width: 768px) {
  .WalletFinish {
    margin-top: 89px;
    flex-direction: row;
    justify-content: center;
    .left {
      width: 50%;
      max-width: 520px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .WalletShowLogo {
        width: 100%;
        .logo {
          display: block;
          width: 100%;
          height: auto;
        }
        // margin-top: 60px;
        // width: 90%;
        // padding-bottom: 43%;
        // background: url("../assets/step_two.png") no-repeat center;
        // background-size: contain;
      }
    }
    .right {
      width: 50%;
      max-width: 520px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      .ApplyForm {
        width: 70%;
        height: 400px;
        background-color: white;
        box-shadow: 0 0 5px 5px @ShadowColor;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .FormLogo {
          display: block;
          position: relative;
          width: 62px;
          height: 62px;
        }
        .SuccessFrame {
          margin-top: 10px;
          width: 100%;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          font-size: 1.8rem;
          // letter-spacing: px;
          font-weight: 800;
        }
        .inputTitle {
          display: block;
          margin-top: 10px;
          width: 90%;
          height: 1rem;
          line-height: 1rem;
          font-size: 13px;
          text-align: center;
          color: @WalletTextColor;
        }
        .success {
          display: block;
          margin-top: 30px;
          width: 52px;
          height: 45px;
        }
      }
    }

    .WalletTitleFrame {
      top: 50px;
      width: 100%;
      height: 4.5rem;
      line-height: 2.5rem;
      text-align: center;
      font-size: 1.8rem;
      // letter-spacing: px;
      font-weight: 800;
    }
  }
}

//mobile
@media screen and (max-width: 768px) {
  .WalletFinish {
    margin-top: 100px;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    // align-content: center;
    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: space-around;
      .WalletTitle {
        display: block;
        position: relative;
        margin-top: 20px;
        width: 100%;
        height: 3rem;
        line-height: 1.5rem;
        text-align: center;
        font-size: 1.5rem;
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
      .WalletShowLogo {
        margin: 20px 0 0 0;
        width: 100%;
        height: 200px;
        .logo {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
    .right {
      position: relative;
      top: 80px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .ApplyForm {
        position: relative;
        width: 90%;
        height: 650px;
        background-color: white;
        box-shadow: 0 0 5px 5px @ShadowColor;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .FormLogo {
          display: block;
          position: relative;
          width: 62px;
          height: 62px;
        }
        .SuccessFrame {
          margin-top: 10px;
          width: 100%;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          font-size: 1rem;
          // letter-spacing: px;
          font-weight: 600;
        }
        .inputTitle {
          display: block;
          margin-top: 10px;
          width: 90%;
          height: 1rem;
          line-height: 1rem;
          font-size: 13px;
          text-align: center;
          color: @WalletTextColor;
        }
        .success {
          display: block;
          margin-top: 30px;
          width: 52px;
          height: 45px;
        }
      }
    }
  }
}
</style>

