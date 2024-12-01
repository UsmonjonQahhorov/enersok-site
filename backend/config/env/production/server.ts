/**
 * Defines the configuration for the production server.
 */
export default ({ env }) => ({
     host: env('HOST', '0.0.0.0'),
     port: env.int('PORT', 3014), // TODO: add right port
     url: 'http://api.enersok.uz',
     app: {
       keys: env.array('APP_KEYS'),
     },
     webhooks: {
       populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
     },
   });