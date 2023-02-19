const utils = {
    async getPNG(url) {
        const img = new Image();
        img.src = url;
        await img.decode();
        return img;
    },

    async getJSON(url) {
        return await fetch(url).then((data) => data.json());
    },

    emitEvent(name, detail) {
        const event = new CustomEvent(name, { detail });
        document.dispatchEvent(event);
    } 
}

export default utils;