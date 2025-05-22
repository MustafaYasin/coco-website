const BackgroundSlider = ({ text }) => {
  return (
    <div className="overflow-hidden border-y-[5px] md:border-y-[8px] border-black relative z-50">
      <div className="loop-content-wrapper">
        <div className="content-item-100vw">
          <div className="divider-text">{text}</div>
        </div>
        <div className="content-item-100vw">
          <div className="divider-text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
