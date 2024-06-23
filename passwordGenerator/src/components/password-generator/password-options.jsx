const PasswordOptions = ({ setPasswordLength, setConfig, passworldLength }) => {
  return (
    <div className="flex items-center justify-between flex-wrap my-4 pt-4 font-semibold text-orange-500">
      <div className="flex items-center gap-3">
        <input
          type="range"
          id="range"
          min="6"
          max="30"
          defaultValue={passworldLength}
          onChange={(event) => setPasswordLength(event.target.value)}
        />
        <label htmlFor="number"> {`Length (${passworldLength})`}</label>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="number"
          onChange={(event) => {
            setConfig((prev) => ({
              ...prev,
              isNumberAllowed: event.target.checked,
            }));
          }}
          className="scale-150 outline-none"
        />
        <label htmlFor="number"> Numbers</label>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="charecter"
          onChange={(event) => {
            setConfig((prev) => ({
              ...prev,
              isSpecialCharecterAllowed: event.target.checked,
            }));
          }}
          className="scale-150 outline-none"
        />{" "}
        <label htmlFor="charecter">Special Charecters</label>
      </div>
    </div>
  );
};

export default PasswordOptions;
