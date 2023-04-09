export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=x7SI2iBokakd6rC02DsLtcE88YJ34cbl&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(g => ({
        id: g.id,
        title: g.title,
        url: g.images.downsized_medium.url
    }));
    return gifs;
}