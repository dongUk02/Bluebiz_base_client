
/**
 * @description : 문자열의 첫글자를 대분자로 변경하는 함수
 * @param str : 'string'
 * @returns 'String'
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-07-01        이동욱       최초 생성
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}