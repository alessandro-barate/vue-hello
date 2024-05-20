"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Folks!",
      color: this.imgFunction(),
      backgroundImage: this.imgFunction(),
      display: this.imgFunction(),
    };
  },

  methods: {
    imgFunction: function () {
      this.color = "white-text";
      this.backgroundImage = "bg-image";
      this.display = "d-none";
    },
  },
}).mount("#app");
