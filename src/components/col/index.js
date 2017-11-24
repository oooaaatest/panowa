import PnCol from './src/col'

PnCol.install = function(Vue) {
  Vue.component(PnCol.name, PnCol);
};

export default PnCol;