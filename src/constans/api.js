export const EndPoint = "http://wlp.howizbiz.com/api";
export const URL = "http://wlp.howizbiz.com";
const Api = {
  login: EndPoint + "/web-authenticate",
  apiMe: EndPoint + "/me",
  logout: EndPoint + "/logout",
  logo: URL + "/static/img/favicon.e4ca0e6e.png",
  apiLoai: EndPoint + "/species/",
  sach_do: EndPoint+"/danhmuccha?ma_danh_mucs[]=REDBOOK&ma_danh_mucs[]=IUCN",
  phan_loai_hoc: EndPoint + "/phanloaihoc?ranks[]=Kingdom&ranks[]=Phylum&ranks[]=Class&ranks[]=Order&ranks[]=",
  
};
export default Api;
