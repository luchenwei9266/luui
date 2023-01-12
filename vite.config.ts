import { md } from "./plugins/md";
import { demo } from "./plugins/demo";
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [
    vue(), 
    demo(), 
    md(),
    Unocss({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        // ...custom presets
      ],
      rules:[]
    })],
};
