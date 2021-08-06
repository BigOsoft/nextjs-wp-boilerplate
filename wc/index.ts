import keys from '../config/wc-config'

export const exampleRequest = async () => {
    try {
        const wc_response = await fetch (
            'https://cors-anywhere.herokuapp.com/https://cms.tejofficial.co/wp-json/wc/v3/products?per_page=25',
            {
                headers: {
                    'Authorization': `Basic ${Buffer.from(keys.WP_CONSUMER_KEY+':'+keys.WP_CONSUMER_SECRET).toString('base64')}`,
                    'wpAPI': 'true',
                    'Content-Type': 'application/json'
                }
            })
        const data = await wc_response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
