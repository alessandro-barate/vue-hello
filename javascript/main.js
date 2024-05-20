"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Folks!",
      imageSrc: this.imgFunction(),
    };
  },

  methods: {
    imgFunction: function () {
      this.imageSrc = "./img/cervino-by-night.jpg";
    },
  },
}).mount("#app");
