// Что за хуета, почему инверсия дерьма поела
export const validationFormFields = (value): boolean => {
  if (!value || value == "") {
    return false;
  }
  return true;
};
