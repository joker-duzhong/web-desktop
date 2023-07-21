export class DesktopModel {
  public get shortcuts(): AppBaseInfo[] {
    return [
      {
        appid: "asd",
        icon: "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath fill='%23FFF' d='M0 40h39.852V0H0z' opacity='0'/%3E    %3Cpath fill='%236467F0' d='M35.377 17.678c-1.133 1.917-3.034 3.392-5.385 4.043-.064 0-.127.064-.19.065a3.24 3.24 0 0 1-1.081.197c-1.591.01-2.489-1.067-2.051-2.406.376-.957 1.262-1.79 2.405-2.178 1.778-.648 2.978-2.12 2.968-3.837-.014-2.291-2.253-4.123-4.99-4.107-2.736.017-4.952 1.876-4.938 4.167l.077 12.729c.019 3.055-1.747 5.738-4.41 7.282-1.46.837-3.175 1.356-4.956 1.367-5.22.032-9.443-3.825-9.472-8.534a7.68 7.68 0 0 1 1.184-4.144c1.134-1.917 3.098-3.393 5.385-4.043.381-.13.826-.196 1.208-.198 1.591-.01 2.489 1.067 2.052 2.406-.313.893-1.2 1.662-2.215 2.114-.127.064-.254.065-.381.13-1.715.646-2.788 2.053-2.778 3.708.014 2.29 2.253 4.123 4.99 4.106 2.736-.017 4.952-1.876 4.938-4.167L17.66 13.65c-.019-3.055 1.747-5.74 4.41-7.283C23.53 5.53 25.244 5.01 27.026 5c5.219-.031 9.443 3.825 9.472 8.535.009 1.527-.428 2.93-1.12 4.143'/%3E  %3C/g%3E%3C/svg%3E",
        name: "小程序",
      },
      {
        appid: "asd",
        icon: "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath fill='%23FFF' d='M0 40h39.852V0H0z' opacity='0'/%3E    %3Cpath fill='%2307C160' d='M15.382 23.872a1.11 1.11 0 0 1-1.47-.449l-.072-.159-3.034-6.658a.555.555 0 0 1 .835-.68l3.58 2.55a1.658 1.658 0 0 0 1.48.17L33.54 11.15c-3.018-3.558-7.989-5.883-13.614-5.883-9.205 0-16.666 6.218-16.666 13.89 0 4.184 2.244 7.952 5.758 10.499a1.108 1.108 0 0 1 .408 1.258c-.28 1.047-.73 2.723-.75 2.802-.036.131-.09.269-.09.406 0 .307.248.555.556.555a.62.62 0 0 0 .32-.103l3.65-2.107c.274-.158.564-.256.884-.256.171 0 .336.026.49.074 1.702.49 3.54.761 5.44.761 9.205 0 16.667-6.218 16.667-13.89 0-2.322-.688-4.51-1.898-6.435l-19.19 11.08-.122.07z'/%3E  %3C/g%3E%3C/svg%3E",
        name: "微信支付",
      },
      {
        appid: "asd",
        icon: "data:image/png;base64,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",
        name: "企业微信",
      },
      {
        appid: "asdasfasdfs",
        icon: "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath fill='%23FFF' d='M0 40h39.852V0H0z' opacity='0'/%3E    %3Cpath fill='%236467F0' d='M35.377 17.678c-1.133 1.917-3.034 3.392-5.385 4.043-.064 0-.127.064-.19.065a3.24 3.24 0 0 1-1.081.197c-1.591.01-2.489-1.067-2.051-2.406.376-.957 1.262-1.79 2.405-2.178 1.778-.648 2.978-2.12 2.968-3.837-.014-2.291-2.253-4.123-4.99-4.107-2.736.017-4.952 1.876-4.938 4.167l.077 12.729c.019 3.055-1.747 5.738-4.41 7.282-1.46.837-3.175 1.356-4.956 1.367-5.22.032-9.443-3.825-9.472-8.534a7.68 7.68 0 0 1 1.184-4.144c1.134-1.917 3.098-3.393 5.385-4.043.381-.13.826-.196 1.208-.198 1.591-.01 2.489 1.067 2.052 2.406-.313.893-1.2 1.662-2.215 2.114-.127.064-.254.065-.381.13-1.715.646-2.788 2.053-2.778 3.708.014 2.29 2.253 4.123 4.99 4.106 2.736-.017 4.952-1.876 4.938-4.167L17.66 13.65c-.019-3.055 1.747-5.74 4.41-7.283C23.53 5.53 25.244 5.01 27.026 5c5.219-.031 9.443 3.825 9.472 8.535.009 1.527-.428 2.93-1.12 4.143'/%3E  %3C/g%3E%3C/svg%3E",
        name: "小程序asd小程序23131小程序asd小程序23131",
      },
    ];
  }
}
