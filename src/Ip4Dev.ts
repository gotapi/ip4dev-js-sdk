import Ip4DevResponse from "./Ip4DevResponse";
import axios from "axios"
class Ip4Dev {
    public async myIp() :Promise<string> {
        let result = await axios.get("https://ip4.dev/myip", {});
        return result.data;
    }
    public async ipInfo(ip: string) :Promise<Ip4DevResponse> {
        let res = await axios.get("https://ip4.dev/location/" + ip, {});
        let obj =  res.data;
        let ip4DevResponse = new Ip4DevResponse()
        ip4DevResponse.ip = obj.ip;
        ip4DevResponse.asn = obj.asn;
        ip4DevResponse.tz = obj.tz;
        ip4DevResponse.city = obj.city;
        ip4DevResponse.region = obj.region;
        ip4DevResponse.continent_code = obj.continent_code;
        ip4DevResponse.country = obj.country;
        ip4DevResponse.country_code = obj.country_code
        ip4DevResponse.region_code = obj.region_code
        ip4DevResponse.country_code3 = obj.country_code3
        ip4DevResponse.longitude = obj.longitude
        ip4DevResponse.latitude = obj.latitude
        ip4DevResponse.organization = obj.organization
        return ip4DevResponse
    }
}
export default Ip4Dev