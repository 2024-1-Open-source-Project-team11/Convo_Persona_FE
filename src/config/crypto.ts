import CryptoJS from "crypto-js";

const secretKey = "your-secret-key";

// 암호화 함수
export function encryptMessage(message: string) {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
}

// 복호화 함수
export function decryptMessage(ciphertext: string) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
