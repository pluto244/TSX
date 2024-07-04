const EncodeToBase64 = {
  EmailAndCode(email: string, code: string) {
    return btoa(`${email}:${code}`);
  },
};
