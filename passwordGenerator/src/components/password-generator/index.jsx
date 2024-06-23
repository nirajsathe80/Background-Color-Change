import { useEffect, useState } from "react";
import PasswordOptions from "./password-options";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passworldLength, setPasswordLength] = useState(8);
  const [isCopyButtonClicked, setIsCopyButtonClicked] = useState(false);
  const [config, setConfig] = useState({
    isNumberAllowed: false,
    isSpecialCharecterAllowed: false,
    password: "",
  });
  const { isNumberAllowed, isSpecialCharecterAllowed } = config;

  useEffect(() => {
    const result = passworldGeneratorFunction();
    setPassword(result);
  }, [isNumberAllowed, isSpecialCharecterAllowed, passworldLength]);

  const passworldGeneratorFunction = () => {
    let randomLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) randomLetters += "0123456789";
    if (isSpecialCharecterAllowed) randomLetters += "{[]}@#$%&";

    let result = "";
    for (let i = 0; i < passworldLength; i++) {
      result += randomLetters.charAt(
        Math.floor(Math.random() * randomLetters.length)
      );
    }

    return result;
  };

  return (
    <div className="md:min-w-[600px] md:w-auto w-[90vw] rounded-lg px-4 py-6 bg-[#0C0C0C] font-serif">
      <div className="flex w-full h-[50px]">
        <div className="h-full rounded-[8px_0px_0px_8px] py-3 min-w-56 w-[80%] disabled bg-white font-bold text-orange-600 px-5">
          {password}
        </div>
        <button
          className="bg-blue-500 h-full rounded-[0px_8px_8px_0px] w-[20%] font-bold text-white text-base md:text-xl"
          onClick={() => {
            navigator.clipboard.writeText(password);
            setIsCopyButtonClicked(true);
            setTimeout(() => {
              setIsCopyButtonClicked(false);
            }, 1000);
          }}
        >
          Copy
        </button>
      </div>
      {isCopyButtonClicked ? (
        <div className="text-white mt-2">Text copied to clipboard</div>
      ) : (
        <></>
      )}
      <PasswordOptions
        setPasswordLength={setPasswordLength}
        setConfig={setConfig}
        passworldLength={passworldLength}
      />
    </div>
  );
};

export default PasswordGenerator;
