import { makeRemotelyCallable } from 'src/util/webextensionRPC'
import analytics from '..'
import { updateLastActive } from '../utils'
import './periodic'

makeRemotelyCallable({
    trackEvent: (...args) => analytics.trackEvent(...args),
    updateLastActive,
})
