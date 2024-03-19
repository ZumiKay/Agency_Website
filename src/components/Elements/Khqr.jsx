import Default from "../../assets/img/header-img.png";

export const Khqrcontainer = () => {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center gap-y-5">
      <img
        src={Default}
        alt="qr-code"
        className="w-[250px[ h-[400px] rounded-lg"
      />

      <h3 className="text-[11px] text-gray-500 text-center w-[250px] h-fit">
        {" "}
        Scan with Bakong App or Mobile Banking app that support KHQR
      </h3>
    </div>
  );
};
