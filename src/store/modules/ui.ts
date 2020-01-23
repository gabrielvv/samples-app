import { Module } from 'vuex';

export interface UiModuleState {
  drawer: {
    mini: Boolean,
    open: Boolean,
    items: Array<{
      to: string,
      title: string,
      icon: string
    }>
  }
}

export const uiModule: Module<UiModuleState, any> = {
  state: {
    drawer: {
      mini: true,
      open: true,
      items: [
        {
          to: '/',
          title: 'Home',
          icon: 'mdi-home',
        },
        {
          to: '/about',
          title: 'About',
          icon: 'mdi-contact-mail',
        },
      ],
    },
  },
  mutations: {
    toggleDrawer: (state) => {
      // state.drawer.open = !state.drawer.open;
      state.drawer.mini = !state.drawer.mini;
    },
  },
};
