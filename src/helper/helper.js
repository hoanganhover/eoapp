export function getToken() {
    const token_store = localStorage.getItem('token_data') || JSON.stringify({
        PaymentMethods : [],
        Stores : []
    });
    return JSON.parse(token_store);
}