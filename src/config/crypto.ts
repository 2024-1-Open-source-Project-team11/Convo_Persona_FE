import CryptoJS from "crypto-js";

const secretKey = CryptoJS.enc.Utf8.parse(
  import.meta.env.VITE_MESSAGE_SECRET_KEY
);
const iv = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_MESSAGE_IV);

// 암호화 함수 (CBC 모드, 고정된 IV)
export function encryptMessage(message: string) {
  const encrypted = CryptoJS.AES.encrypt(message, secretKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
  });
  return encrypted.toString();
}

// 복호화 함수 (CBC 모드, 고정된 IV)
export function decryptMessage(ciphertext: string) {
  const decrypted = CryptoJS.AES.decrypt(ciphertext, secretKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
