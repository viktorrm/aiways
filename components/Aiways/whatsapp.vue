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
      return `https://${
        this.isMobile() ? "api" : "web"
      }.whatsapp.com/send?phone=+50688159919`;
    },
  },
  methods: {
    isMobile() {
      if (process.client) {
        let check = false;
        (function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            // eslint-disable-next-line no-useless-escape
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            // eslint-disable-next-line nonblock-statement-body-position
            check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);

        return check;
      }
    },
  },
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
    right: 1% !important;
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
  /* border-top: solid 1px lightgray; */
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
  right: 1% !important;

  transition: bottom 0.6s ease-in-out !important;
  @media (max-width: 575px) {
    bottom: 70px !important;
    right: 1%;
  }
}
</style>
