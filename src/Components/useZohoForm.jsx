import { useEffect } from "react";

const useZohoForm = (formRef) => {
  const validateForm = () => {
    const mndFileds = ["Last Name", "Email", "Phone", "Website", "LEADCF8"];
    const fldLangVal = ["Full Name", "Email", "Phone", "Website/App URL", "Brand Name"];

    for (let i = 0; i < mndFileds.length; i++) {
      const fieldObj = formRef.current[mndFileds[i]];
      if (fieldObj) {
        if (fieldObj.value.trim().length === 0) {
          return `${fldLangVal[i]} cannot be empty.`;
        } else if (fieldObj.nodeName === "SELECT") {
          if (fieldObj.options[fieldObj.selectedIndex].value === "-None-") {
            return `${fldLangVal[i]} cannot be none.`;
          }
        }
      }
    }
    return ""; // no error
  };

  // Hidden Zoho fields
  const ZohoHiddenFields = () => (
    <>
      <input type="hidden" name="xnQsjsdp" value="eff56b1081be5ca13589e92d5cfa0389afe45aa7c761a50d1a52774c05a15593" />
      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
      <input type="hidden" name="xmIwtLD" value="7ce71201f13f1b2d0d1e403d1ad255280e66b2af153f36e9e5493c1b90d4fd1df6dab979cc7ace67164bba464b03c046" />
      <input type="hidden" name="actionType" value="TGVhZHM=" />
      <input type="hidden" name="returnURL" value="https://www.digidarts.com/thank-you/" />
      <input type="hidden" id="ldeskuid" name="ldeskuid" />
      <input type="hidden" id="LDTuvid" name="LDTuvid" />
      <input type="hidden" name="aG9uZXlwb3Q" value="" />
      <input type="hidden" name="Lead Source" value="DareAISearch Landing Page" />
    </>
  );

  return { ZohoHiddenFields, validateForm };
};

export default useZohoForm;
