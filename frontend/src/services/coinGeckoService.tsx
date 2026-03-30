
const base_url = "http://localhost:5000/"

async function fetchCoins() {

    const url = base_url + "api/coins/list/market?count=5&page=3&currency=usd";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch coins");
        }

        return response.json();
    } catch (error) {
        console.log(error);
    }

}

async function fetchCoinsWithChart() {

    const url = base_url + "api/coins/with-chart?count=3&page=2&currency=usd&days=0.16";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch coins");
        }

        return response.json();
    } catch (error) {
        console.log(error);
    }

}

export {fetchCoins,fetchCoinsWithChart};