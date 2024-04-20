class MarvelApiUtils{

    public getBasicUrlAuth(): String{
        return `ts=1&apikey=28982ff02187b31e318b0bb78b52c672&hash=9ff4ff78e85a47c10f2f2d3b71371ef7`;
    }
}

export default new MarvelApiUtils();