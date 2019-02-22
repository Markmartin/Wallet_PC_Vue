<template>
  <div class="WalletApply">
    <div class="left">
      <div class="WalletDes">
        <label class="WalletTitle">{{$t("WalletApply.title")}}</label>
        <label class="WalletTip">{{$t("WalletApply.desone")}}</label>
        <label class="WalletTip">{{$t("WalletApply.destwo")}}</label>
      </div>

      <div class="WalletShowLogo">
        <img class="logo" src="../assets/step_two.png">
      </div>
    </div>
    <div class="right">
      <div class="ApplyForm">
        <img src="../assets/sicob.png" class="FormLogo">
        <label class="inputTitle">{{$t("WalletApply.name")}}</label>
        <input class="inputClass" v-model="name">
        <label class="inputTitle">{{$t("WalletApply.mail")}}</label>
        <input class="inputClass" v-model="mail">
        <label class="inputTitle">{{$t("WalletApply.itcaddress")}}</label>
        <input class="inputClass" v-model="address">
        <!-- <label
          class="applyBtn"
          @click="applyITC"
          :style="{backgroundImage:'url(' + getRequestImg + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"
        ></label>-->
        <button
          class="applyBtn backgroundBlueGradient backgroundAnimation"
          @click="applyITC"
        >{{$t('Common.RequestOne')}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import httpManager from "../httpManager/httpManager.js";
import tool from "../utils/tool.js";
import "../less/gradient.less";

export default {
  name: "WalletApply",
  data: function() {
    return {
      mail: "",
      address: "",
      name: ""
    };
  },
  methods: {
    applyITC: async function() {
      if (tool.validateEmail(this.mail) === false) {
        this.$message({
          message: "mail format error",
          type: "warning"
        });
        return;
      }

      if (tool.validateAddress(this.address) === false) {
        this.$message({
          message: "ITC address format error",
          type: "warning"
        });
        return;
      }

      const loading = this.$loading({
        lock: true,
        background: "rgba(255, 255, 255, 0)"
      });
      var resp = await httpManager.requestApplyITC(
        this.mail,
        this.address,
        this.name
      );
      loading.close();
      if (resp.status == true) {
        this.$router.history.push("/finish");
      } else {
        this.$message.error(resp.msg);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/color.less";

.WalletApply {
  position: relative;
  width: 100vw;
  height: 500px;
  display: flex;
}

//pc
@media screen and (min-width: 768px) {
  .WalletApply {
    top: 150px;
    margin-bottom: 70px;
    flex-direction: row;
    justify-content: center;
    .left {
      width: 50%;
      max-width: 520px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .WalletDes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 20px;
        .WalletTip {
          margin-top: 8px;
          position: relative;
          width: 100%;
          color: @WalletTextColor;
          height: 1.2rem;
          line-height: 1.2rem;
          text-align: left;
          font-size: 0.9rem;
        }
        .WalletTitle {
          display: block;
          position: relative;
          width: 100%;
          height: 4.5rem;
          line-height: 2rem;
          text-align: left;
          font-size: 1.8rem;
          // letter-spacing: px;
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
      }

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
        justify-content: flex-start;
        align-items: center;
        .FormLogo {
          margin-top: 50px;
          display: block;
          position: relative;
          width: 62px;
          height: 62px;
        }
        .inputTitle {
          display: block;
          width: 90%;
          height: 1.5rem;
          line-height: 1.5rem;
          font-size: 13px;
          text-align: left;
        }
        .inputClass {
          display: block;
          width: 80%;
          height: 2rem;
          line-height: 2rem;
          font-size: 13px;
          text-align: left;
          background-color: @FeatureBackColor;
          outline: none;
          border: 1px solid transparent;
          border-radius: 1rem;
          padding: 0 20px 0 20px;
        }
        .applyBtn {
          display: block;
          margin-top: 30px;
          width: 80%;
          height: 45px;
          outline: none;
          cursor: pointer;
          font-size: 1rem;
          color: white;
          border: 1px solid transparent;
          border-radius: 6px;
        }
      }
    }
  }
}

//mobile
@media screen and (max-width: 768px) {
  .WalletApply {
    padding-top: 100px;
    height: 600px;
    // margin-bottom: 50px;
    flex-direction: column;
    justify-content: flex-start;
    .left {
      position: relative;
      width: 100%;
      height: 380px;
      display: flex;
      flex-direction: column;
      flex: none;
      justify-content: flex-start;
      .WalletDes {
        display: flex;
        flex-direction: column;
        height: 150px;
        widows: 100%;
        .WalletTip {
          display: block;
          position: relative;
          top: 10px;
          width: 100%;
          color: @WalletTextColor;
          height: 1.2rem;
          line-height: 1.2rem;
          text-align: center;
          font-size: 0.9rem;
        }
        .WalletTitle {
          display: block;
          position: relative;
          // margin-top: 20px;
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
      }

      .WalletShowLogo {
        // margin: 120px 0 0 0;
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
      width: 100%;
      height: 350px;
      display: flex;
      flex: none;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .ApplyForm {
        position: relative;
        flex-grow: 0;
        flex-shrink: 0;
        width: 90%;
        background-color: white;
        box-shadow: 0 0 5px 5px @ShadowColor;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .FormLogo {
          margin-top: 25px;
          display: block;
          position: relative;
          width: 62px;
          height: 62px;
        }
        .inputTitle {
          display: block;
          width: 90%;
          height: 1.5rem;
          line-height: 1.5rem;
          font-size: 13px;
          text-align: left;
        }
        .inputClass {
          display: block;
          width: 80%;
          height: 2rem;
          line-height: 2rem;
          font-size: 13px;
          text-align: left;
          background-color: @FeatureBackColor;
          outline: none;
          border: 1px solid transparent;
          border-radius: 1rem;
          padding: 0 20px 0 20px;
        }
        .applyBtn {
          display: block;
          margin-top: 20px;
          margin-bottom: 20px;
          width: 90%;
          height: 40px;
          outline: none;
          cursor: pointer;
          font-size: 1rem;
          color: white;
          border: 1px solid transparent;
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
