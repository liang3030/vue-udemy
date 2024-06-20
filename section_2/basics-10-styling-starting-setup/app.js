const app = Vue.createApp({
  data() {
    return {
      selectBoxA: false,
      selectBoxB: false,
			selectBoxC: false,
			selectBoxD: false,
    };
	},
	computed: {
		boxDClasses() {
			return { active: this.selectBoxD };
		}
	},
  methods: {
    selectBox(box) {
      console.log('click');
      switch (box) {
        case 'A':
          this.selectBoxA = !this.selectBoxA;
          break;
        case 'B':
          this.selectBoxB = !this.selectBoxB;
          break;
        case 'C':
          this.selectBoxC = !this.selectBoxC;
					break;
				case 'D':
					this.selectBoxD = !this.selectBoxD;
					break;
        default:
          break;
      }
      return;
    },
  },
});
app.mount('#styling');
