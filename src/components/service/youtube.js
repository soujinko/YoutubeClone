import axios from 'axios';
class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    // this.key = key;
    // this.youtube = axios.create({
    //   baseURL: 'https://www.googleapis.com/youtube/v3',
    // });
  }

  async mostPopular() {
    // const response = await this.youtube.get('videos', {
    //   params: {
    //     part: 'snippet',
    //     chart: 'mostPopular',
    //     maxResults: 25,
    //     key: this.key,
    //   },
    // });
    // return response;
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: '25',
        q: query,
        type: 'video',
      },
    });
    return response.data.items;
    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result_1 = await response.json();
    // return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
