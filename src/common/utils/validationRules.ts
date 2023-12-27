import { ValidateProps } from "../../common/types";

export default function validate(values: ValidateProps) {
  let errors = {} as ValidateProps;

  if (!values.name) {
    errors.name = "الاسم مطلوب";
  }



  if (!values.phone) {
    errors.phone = "رقم الهاتف مطلوب";
  }

  
  if (!values.address) {
    errors.address = "العنوان مطلوب";
  }

  

  if (!values.email) {
    errors.email = "البريد مطلوب";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "البريد غير صحيح";
  }




  if (!values.message) {
    errors.message = "الرساله مطلوبه";
  }
  return errors;
}
