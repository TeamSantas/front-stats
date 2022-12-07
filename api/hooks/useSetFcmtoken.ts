// 실질적으로 api 당겨오는 로직을 처리하는 훅
import SettingService from "../SettingService";

export async function useSetFcmtoken(fcmtoken:string) {    
    return await SettingService.setFcmtoken(fcmtoken);
}