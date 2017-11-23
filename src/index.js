const components = [

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
    install
}