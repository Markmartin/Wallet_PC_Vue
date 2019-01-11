<template>
  <div class="Footer">
    <div class="FooterContent">
      <div class="FooterLeftBox">
        <p class="FooterSubscribe">Subscribe</p>
        <div class="FooterInputBox">
          <input
            class="FooterInput"
            v-model="mailAddress"
            type="text"
            placeholder="Email@example.com"
          >
          <button class="FooterInputSubmit" @click="subscribeEvent">SUBSCRIBE</button>
        </div>
      </div>
      <div class="FooterRightBox">
        <div class="FooterLinkIconBox">
          <button
            class="FooterWX"
            target="_blank"
            onMouseOver="{this.onMouseOverWX}"
            onMouseOut="{this.onMouseOutWX}"
          >
            <img class="ImgAIcon" src="../assets/ll0.png" alt>
            <img v-if="isShowWxRrCode" class="WXQrCodeIcon" src="{wx_qr_code}" alt>
          </button>
          <a
            class="ImgA"
            href="https://twitter.com/IoT_Chain"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll1.png" alt>
          </a>
          <a
            class="ImgA"
            href="https://www.facebook.com/IoTChain/"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll2.png" alt>
          </a>
          <a
            class="ImgA"
            href="https://t.me/IoTChain"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll4.png" alt>
          </a>
          <a
            class="ImgA"
            href="http://qm.qq.com/cgi-bin/qm/qr?k=CjS_9da0Uj5SfXX8Wm1PIDuL_Nbjzmc3"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll5.png" alt>
          </a>
          <a
            class="ImgA"
            href="https://www.reddit.com/r/iotchain/"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll6.png" alt>
          </a>
        </div>

        <div class="FooterLinkIconBox MarginTop10">
          <a
            class="ImgA"
            href="https://github.com/IoTChainCode"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll7.png" alt>
          </a>
          <a
            class="ImgA"
            href="mailto:support@iotchain.io"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll8.png" alt>
          </a>
          <a
            class="ImgA"
            href="https://medium.com/iot-chain"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll9.png" alt>
          </a>
          <a
            class="ImgA"
            href="https://steemit.com/@iot-chain"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll10.png" alt>
          </a>
          <a
            class="ImgA"
            href="https://www.youtube.com/channel/UCJPaVb7NlxhfCHRkz6yuXBw"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll11.png" alt>
          </a>
          <a
            class="ImgA"
            href="https://open.kakao.com/o/gOZK2gY"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img class="ImgAIcon" src="../assets/ll12.png" alt>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tool from "../utils/tool";
import httpManager from "../httpManager/httpManager";

export default {
  name: "Footer",
  data: function() {
    return {
      mailAddress: "",
      isShowWxRrCode: false
    };
  },
  methods: {
    subscribeEvent: async function() {
      if (tool.validateEmail(this.mailAddress) === false) {
        this.$message({
          message: "mail format error",
          type: "warning"
        });
        return;
      }

      const loading = this.$loading({
        lock: true,
        background: "rgba(255, 255, 255, 0)"
      });
      var resp = await httpManager.subscribe(this.mailAddress);
      loading.close();
      if (resp.status == true) {
        this.$message({
          message: resp.msg,
          type: "success"
        });
      } else {
        this.$message.error(resp.msg);
      }
      this.mailAddress = "";
    }
  }
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 768px) {
  @import "../less/FooterPC.less";
}

//mobile
@media screen and (max-width: 768px) {
  @import "../less/FooterMobile.less";
}
</style>




