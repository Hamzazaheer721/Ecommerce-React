/* eslint-disable no-useless-escape */
// empty check
export const isEmpty = (value : string) => {
  if (!value) return true;
  return false;
};

// email check
export const isEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// company Check
export const validateCompany = (company_name : string) => {
  const re = /^[a-z A-Z1-9!@-]{3,30}$/;
  return re.test(company_name);
};

// name check
export const validateName = (name : string) => {
  const re = /^[a-z A-Z]{3,20}$/;
  return re.test(name);
};

// phone number check
export const validatePhoneNumber = (phone_number : string) => {
  if (phone_number.length < 10) return false;
  const re = /^[a-zA-Z0-9\-().\s]{10,15}$/;
  return re.test(phone_number);
};

// password check
export const validatePassword = (pass : string) => {
  const re = /^(?=(.*\d){1})(?=(.*[A-Z]){1})(?=(.*[a-z]){1})(?=(.*[!@#$%^&*]){1})[0-9a-zA-Z!@#$%^&*]{8,30}$/;
  return re.test(pass);
};

// validate Domain
export const validateDomain = (domain : string) => {
  // const re = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
  const re = /^[a-zA-Z0-9]{3,20}$/;
  return re.test(domain);
};
