export const EndPoint = "http://wlp.howizbiz.com/api";
export const URL = "http://wlp.howizbiz.com";
const Api = {
  login: EndPoint + "/web-authenticate",
  apiMe: EndPoint + "/me",
  logout: EndPoint + "/logout",
  logo: URL + "/static/img/favicon.e4ca0e6e.png",
  apiLoai: EndPoint + "/species",
  sach_do: EndPoint + "/danhmuccha?ma_danh_mucs[]=REDBOOK&ma_danh_mucs[]=IUCN",
  phan_loai_hoc:
    EndPoint +
    "/phanloaihoc?ranks[]=Kingdom&ranks[]=Phylum&ranks[]=Class&ranks[]=Order&ranks[]=",
  red_book: EndPoint + "/danhmuccha?ma_danh_mucs[]=REDBOOK",
  iucn: EndPoint + "/danhmuccha?ma_danh_mucs[]=IUCN",
  kingdom: EndPoint + "/phanloaihoc?ranks[]=Kingdom",
  phylum: EndPoint + "/phanloaihoc?ranks[]=Phylum",
  CLASS: EndPoint + "/phanloaihoc?ranks[]=Class",
  order: EndPoint + "/phanloaihoc?ranks[]=Order",
  family: EndPoint + "/phanloaihoc?ranks[]=Family",
  genus: EndPoint + "/phanloaihoc?ranks[]=Genus",
};
export default Api;
