export const Validation = {
  email: {
    placeholder: 'メールを入力してください',
    required: 'メールは必要です',
    validation:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: '正しい形式で入力してください',
  },
  code: {
    placeholder: '認証コードを入力してください',
    required: '認証コードは必要です',
  },
  password: {
    placeholder: 'パスワードを入力してください',
    required: 'パスワードは必要です',
    minLength: {
      value: 5,
      message: '5文字以上のパスワードを入力してください',
    },
  },
  new_password: {
    placeholder: 'もう一度入力してください',
    required: '比較パスワードは必要です',
    minLength: {
      value: 5,
      message: '5文字以上のパスワードを入力してください',
    },
  },
};
