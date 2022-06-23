import { Carousel } from "antd";
import { SlideshowWrapper } from "./style";
const contentStyle = {
  height: "230px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#82b9c0"
};

const Slideshow = () => (
  <SlideshowWrapper>
    <Carousel autoplay effect="fade">
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </SlideshowWrapper>
);

export default Slideshow;
