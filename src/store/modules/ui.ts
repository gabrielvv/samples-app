import { Module } from 'vuex';
import vuetify from '@/plugins/vuetify';

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
    toggleMini: (state, mini) => {
      state.drawer.mini = mini || !state.drawer.mini;
      // console.log('toggleMini', state.drawer.open, state.drawer.mini);
    },
    toggleDrawer: (state, drawer) => {
      const breakpointName = (vuetify as unknown as { framework: any }).framework.breakpoint.name;
      switch (breakpointName) {
        case 'xs':
        case 'sm':
          state.drawer.open = drawer || !state.drawer.open;
          // disable mini-variant in small screens
          state.drawer.mini = false;
          break;
        case 'md':
        case 'lg':
        case 'xl':
        default:
          state.drawer.mini = !state.drawer.mini;
      }
    },

  },
};
