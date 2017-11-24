export default {
    name: 'PnRow',

    components: 'PnRow',

    props: {
        tag: {
            type: String,
            default: 'div'
        },
        gutter: Number,
        type: String,
        justify: {
            type: String,
            default: 'start'
        },
        align: {
            type: String,
            default: 'top'
        }
    },

    computed: {
        style() {
            var ret = {};

            if(this.gutter) {
                ret.marginLeft = `-${this.gutter / 2}px`;
                ret.marginRight = ret.marginLeft
            }
        }
    }
}