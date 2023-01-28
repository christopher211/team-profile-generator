export const emailValidation = async (input) => {
  const valid = input.toLowerCase().match(/^\S+@\S+\.\S+$/);
  if (valid) {
    return true;
  } else {
    console.log("\nInvalid email");
    return false;
  }
};
