"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Folks!",
      color: "",
      backgroundImage: "",
      display: "",
      alt: "Cervino in a starry night",
      displayNone: "d-none",
      button: "",
    };
  },

  methods: {
    imgFunction: function () {
      this.color = "white-text";
      this.backgroundImage = "bg-image";
      this.display = "d-none";
      this.displayNone = "x-button";
    },

    reset: function () {
      this.color = "";
      this.backgroundImage = "";
      this.display = "";
      this.displayNone = "d-none";
    },
  },
}).mount("#app");
