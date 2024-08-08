import { reactive } from "vue";

export const store = reactive({
  displayMenu: false,
  toggleMenu() {
    this.displayMenu = !this.displayMenu;
  },
});
