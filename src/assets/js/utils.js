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

    async getCanvas(url) {
        return await document.querySelector(url);
    },

    toHex(data) {
        const rgb = ((data[0] << 16) | (data[1] << 8) | (data[2])).toString(16);
        return ("00000000" + rgb).slice(-6);
    },

    toDec(hex) {
        return parseInt(hex, 16);
    },

    emitEvent(name, detail) {
        const event = new CustomEvent(name, { detail });
        document.dispatchEvent(event);
    } 
}

export default utils;