import createSSRState from '@forrestjs/core/lib/create-ssr-state'
import app from './app.reducer'

const reducers = {
    app,
}

const features = [
    require('@forrestjs/feature-storage/client'),
    require('@forrestjs/feature-network/client'),
    require('@forrestjs/feature-storage'),
    // require('./features/feature-badge'),
    // require('./features/feature-overview'),
    // require('./features/feature-users'),
    // require('./features/feature-events-list'),
    // require('./features/feature-stacklayout'),
]

export const createState = createSSRState(reducers, features)
