<template>
  <div class="Guide">
    <div class="GuideFeatureContainer">
      <div class="GuideFeature">
        <div class="FeatureCell">
          <img class="FeatureCellIcon" src="../assets/feature1.png">
          <div class="FeatureDes">
            <label class="FeatureTitle">{{$t('Guide.securityTitle')}}</label>
            <label class="FeatureValue">{{$t('Guide.securityContent')}}</label>
          </div>
        </div>
        <div class="FeatureCell">
          <img class="FeatureCellIcon" src="../assets/feature2.png">
          <div class="FeatureDes">
            <label class="FeatureTitle">{{$t('Guide.fastTrxTitle')}}</label>
            <label class="FeatureValue">{{$t('Guide.fastTrxContent')}}</label>
          </div>
        </div>
        <div class="FeatureCell">
          <img class="FeatureCellIcon" src="../assets/feature3.png">
          <div class="FeatureDes">
            <label class="FeatureTitle">{{$t('Guide.marketTitle')}}</label>
            <label class="FeatureValue">{{$t('Guide.marketContent')}}</label>
          </div>
        </div>
        <div class="FeatureCell">
          <img class="FeatureCellIcon" src="../assets/feature4.png">
          <div class="FeatureDes">
            <label class="FeatureTitle">{{$t('Guide.langTitle')}}</label>
            <label class="FeatureValue">{{$t('Guide.langContent')}}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="GuideInstallation">
      <div class="InstallationCell">
        <label class="InstallTitle">{{$t('Installation.ios')}}</label>
        <label class="InstallText">{{$t('Installation.stepone')}}</label>
        <label class="InstallText">
          <a href="https://testflight.apple.com/join/sueJ20be" style="text-decoration:none">
            <span
              style="color:#01a1e6;text-decoration:underline"
            >https://testflight.apple.com/join/sueJ20be</span>
          </a>
        </label>
        <label class="InstallText">{{$t('Installation.steptwo')}}</label>
        <label class="InstallText">{{$t('Installation.stepthree')}}</label>
        <label class="InstallText">
          <a href="https://testflight.apple.com/join/sueJ20be" style="text-decoration:none">
            <span
              style="color:#01a1e6;text-decoration:underline"
            >https://testflight.apple.com/join/sueJ20be</span>
          </a>
        </label>
        <label class="InstallText">{{$t('Installation.stepfour')}}</label>
        <label class="InstallText">{{$t('Installation.setpfive')}}</label>
      </div>
      <div class="InstallationCell">
        <label class="InstallTitle">{{$t('Installation.android')}}</label>
        <label class="InstallText">{{$t('Installation.astepone')}}</label>
        <label class="InstallText">
          <a href="https://fir.im/ITCWallet" style="text-decoration:none">
            <span style="color:#01a1e6;text-decoration:underline">https://fir.im/ITCWallet</span>
          </a>
        </label>
        <label class="InstallText">{{$t('Installation.asteptwo')}}</label>
        <label class="InstallText">{{$t('Installation.astepthree')}}</label>
        <label class="InstallText">{{$t('Installation.astepfour')}}</label>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Guide",
  components: {
    Footer
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 768px) {
  @import "../less/GuidePC.less";
}

//mobile
@media screen and (max-width: 768px) {
  @import "../less/GuideMobile.less";
}
</style>



