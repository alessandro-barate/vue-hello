"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Folks!",
      color: "",
      backgroundImage: "",
      display: "",
      alt: "",
    };
  },

  methods: {
    imgFunction: function () {
      this.color = "white-text";
      this.backgroundImage = "bg-image";
      this.display = "d-none";
      this.alt = "Cervino in a starry night";
    },
  },
}).mount("#app");
