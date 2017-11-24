

// basic layout
import PnCol from './components/col'
import PnRow from './components/row'


const components = [
    PnCol,
    PnRow

]

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    PnCol,
    PnRow
}