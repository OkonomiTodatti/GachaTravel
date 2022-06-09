export const Validation = {
  email: {
    placeholder: 'mail@tabi-gatya.com',
    required: 'メールを入力してください',
    validation:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: '正しい形式で入力してください',
  },
  code: {
    placeholder: '認証コードを入力してください',
    required: '認証コードは必要です',
  },
  password: {
    placeholder: '半角英数字で8文字以上',
    required: 'パスワードは必要です',
    minLength: {
      value: 5,
      message: '半角英数字で8文字以上で入力してください',
    },
  },
  confirmPassword: {
    placeholder: '半角英数字で8文字以上',
    required: 'もう一度入力してください',
    minLength: {
      value: 8,
      message: '半角英数字で8文字以上で入力してください',
    },
  },
  newPassword: {
    placeholder: '半角英数字で8文字以上',
    required: '半角英数字で8文字以上',
    minLength: {
      value: 8,
      message: '半角英数字で8文字以上で入力してください',
    },
  },
};
