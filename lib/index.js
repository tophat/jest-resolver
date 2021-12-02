const pnpApi = require('pnpapi')

/**
 * Custom jest resolver that delegates to the PnP API.
 */
module.exports = (request, options) => {
    const { basedir, defaultResolver, extensions, conditions } = options
    try {
        const resolution = pnpApi.resolveRequest(request, `${basedir}/`, {
            extensions,
            conditions,
        })
        return resolution === null ? request : resolution
    } catch {
        return defaultResolver(request, options)
    }
}
