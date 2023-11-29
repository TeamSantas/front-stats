import MemberService from "../MemberService";

export async function getLoggedMember() {
  try {
    const res = await MemberService.getLoggedMember();
    if (res.status === 200) {
      return res.data.data.member;
    }
  } catch (e) {
    return e;
  }
}

export async function getLoggedMemberRaw() {
  try {
    const res = await MemberService.getLoggedMember();
    if (res.status === 200) {
      return res.data.data;
    }
  } catch (e) {
    return e;
  }
}

/**
 * 로그인한 유저 조회 (서버)
 */
export async function getServerLoggedMember(token) {
  try {
    const res = await MemberService.getServerLoggedMember(token);
    return res;
  } catch (e) {
    console.log(e);
  }
}
// export async function usePutMemberInfo(
//     nickname : string,
//     profileImageURL: string,
//     statusMessage: string
// ) {
//     const putMemberData : PutMemberData {
//         nicknames : nickname,
// //     profileImageURL: profileImageURL,
// //     statusMessage: statusMessage
//     };
//     await MemberService.putLoggedMember(putMemberData)
// }

export async function logoutMember() {
  try {
    const res = await MemberService.logoutMember();
    return res.data.data;
  } catch (e) {
    return e;
  }
}
