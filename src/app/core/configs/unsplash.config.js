/**
 * Unsplash config data
 */
import Vue from "vue";
import Unsplash from "unsplash-js";

const unsplashSdkConfig = {
  applicationId:
    "705b8c6bdc2447239dd01e022019ead8ca0b8053597229b2dda00190562b45cd",
  secret: "16d09a789d6dfd40e586a5c569665626cb44d3c373695fa613cc8dda074197cc"
};

/**
 * Unsplash SDK init
 */
const unsplash = new Unsplash(unsplashSdkConfig);
Vue.prototype.$unsplash = unsplash;
