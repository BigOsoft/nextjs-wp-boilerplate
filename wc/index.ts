import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "https://cms.tejofficial.co/wp-json/wc/v3/products?per_page=25",
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});

export const exampleRequest = async () => {
    api.get("products", {
        per_page: 20, // 20 products per page
    })
        .then((response) => {
            // Successful request
            console.log("Response Data:", response.data);
            console.log("Total of pages:", response.headers['x-wp-totalpages']);
            console.log("Total of items:", response.headers['x-wp-total']);
        })
        .catch((error) => {
            // Invalid request, for 4xx and 5xx statuses
            console.log("Response Status:", error.response.status);
            console.log("Response Headers:", error.response.headers);
            console.log("Response Data:", error.response.data);
        })
}