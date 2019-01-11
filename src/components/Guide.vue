<template>
  <div class="Guide">
    <div class="GuideFeatureContainer">
      <div class="GuideFeature">
        <div class="FeatureCell">
          <img class="FeatureCellIcon" src="../assets/feature1.png">
          <div class="FeatureDes">
            <label class="FeatureTitle">Security</label>
            <label
              class="FeatureValue"
            >Providing a secure and effective environment for transactions.</label>
          </div>
        </div>
        <div class="FeatureCell">
          <img class="FeatureCellIcon" src="../assets/feature2.png">
          <div class="FeatureDes">
            <label class="FeatureTitle">Fast Transactions</label>
            <label
              class="FeatureValue"
            >The service provides safe and fast transactions without revealing user's identities.</label>
          </div>
        </div>
        <div class="FeatureCell">
          <img class="FeatureCellIcon" src="../assets/feature3.png">
          <div class="FeatureDes">
            <label class="FeatureTitle">Market Cap</label>
            <label class="FeatureValue">Up-to-date the current market price of ITC.</label>
          </div>
        </div>
        <div class="FeatureCell">
          <img class="FeatureCellIcon" src="../assets/feature4.png">
          <div class="FeatureDes">
            <label class="FeatureTitle">Language support</label>
            <label
              class="FeatureValue"
            >We offer 7 languages support to customize your wallet experience,if your language is not supported,tell us through our app.</label>
          </div>
        </div>
      </div>
    </div>
    <div class="GuideInstallation">
      <div class="InstallationCell">
        <label class="InstallTitle">IOS Installation Guide</label>
        <label class="InstallText">
          1. Go to
          <a href="https://testflight.apple.com/join/sueJ20be" style="text-decoration:none">
            <span
              style="color:#01a1e6;text-decoration:underline"
            >https://testflight.apple.com/join/sueJ20be</span>
          </a>
        </label>
        <label class="InstallText">2. Download the TestFlight App</label>
        <label class="InstallText">3. Go back to</label>
        <label class="InstallText">
          <a href="https://testflight.apple.com/join/sueJ20be" style="text-decoration:none">
            <span
              style="color:#01a1e6;text-decoration:underline"
            >https://testflight.apple.com/join/sueJ20be</span>
          </a>
        </label>
        <label class="InstallText">and install the ITC wallet</label>
        <label class="InstallText">4. Create the wallet and submit feedback</label>
      </div>
      <div class="InstallationCell">
        <label class="InstallTitle">Android Installation Guide</label>
        <label class="InstallText">1. Click the link and open on the mobile browser:</label>
        <label class="InstallText">
          <a href="https://fir.im/ITCWallet" style="text-decoration:none">
            <span style="color:#01a1e6;text-decoration:underline">https://fir.im/ITCWallet</span>
          </a>
        </label>
        <label class="InstallText">2. Download the app</label>
        <label class="InstallText">3. Install the app</label>
        <label class="InstallText">4. Create the wallet and submit feedback</label>
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


