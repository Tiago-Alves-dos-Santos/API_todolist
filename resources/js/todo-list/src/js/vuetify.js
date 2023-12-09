import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

const vuetify = createVuetify({
    components,
    directives,
    labsComponents,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
});

export default vuetify;
