import axios from "axios";

const KEY = `AIzaSyBm_ktdI8blzthGhSrAj6zzUJzdEtuHDHE`;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
