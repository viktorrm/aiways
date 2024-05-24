<template>
  <a
    :href="waUrl"
    target="_blank"
    :class="`floating ${slideTotop ? 'slideTotop' : ''}`"
  >
    <img
      src="https://raw.githubusercontent.com/cachac/webAssets/main/somosfactura_backgrounds/whatsApp.webp"
      alt="AiAways Costa Rica"
    />
  </a>
</template>

<script>
export default {
  data() {
    return {
      slideTotop: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        console.log("window.scrollY :>> ", window.scrollY);
        this.slideTotop = true;
      } else {
        this.slideTotop = false;
      }
    });
  },
  computed: {
    click() {
      $(document).click(function (e) {
        // check that your clicked
        // element has no id=info
        if (e.target.id != "info") {
          $("#info").hide();
        }
      });
    },
    waUrl() {
      return `https://wa.me/+50688159919`;
    },
  },
  methods: {},
  name: "MyNameComponent",
  components: {
    // modal,
  },
};
</script>
<style scoped>
@media (max-width: 575px) {
  .floating {
    bottom: 30px !important;
    right: 2.5% !important;
  }
}
.floating {
  position: fixed;
  width: 3erm;
  height: 3erm;
  bottom: 50px;
  right: 2.5%;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
  cursor: pointer;
  transition: 0.6s ease-in-out;
}
.floating img {
  height: 70px;
}

.fab-icon {
  margin-top: 16px;
}
.modal-header {
  background-color: #46c056;
}
.modal-header h1 {
  color: white;
}
.modal-content {
  border-radius: 10px;
}
.modal-dialog {
  bottom: -600px !important;
  right: -400px !important;
}
.modal-footer {
  align-items: left !important;
}
.footerModal {
  padding: 10px;
  background-color: lightgray;
}

/* The popup chat - hidden by default */
#myForm {
  display: none;
}
.chat-popup {
  border-radius: 20px !important;
  border: 1px white;
  z-index: 101;
  display: none;
  position: fixed;
  bottom: 180px;
  right: 15px;
}

/* Add styles to the form container */
.form-container {
  width: 300px;
  height: 150px;
  margin: 5px 0 22px 0;
  border: none;
  border-radius: 20px;
  background: #ddd;
  resize: none;
  min-height: 200px;
  color: #777;
  border: 1px solid white;
}
.whatsapp-header p {
  padding: 15px;
  color: white;
  font-size: 25px;
  font-weight: 20px;
}
.whatsapp-header {
  text-align: center;
  border-radius: 20px 20px 0px 0px;
  background-color: #46c056;
}

.slideTotop {
  bottom: 100px !important;
  right: 2.5% !important;

  transition: bottom 0.6s ease-in-out !important;
  @media (max-width: 575px) {
    bottom: 70px !important;
    /* right: 3%; */
  }
}
</style>
