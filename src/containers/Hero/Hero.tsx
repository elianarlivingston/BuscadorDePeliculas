import { Carousel } from 'antd';

const contentStyle: any = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Hero = () => {
    return (
        <Carousel autoplay>
        <div style={{ background: '#212121' }}>
            <h3 style={contentStyle}>1</h3>
        </div>
        <div style={{ background: '#212121' }}>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div style={{ background: '#212121' }}>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div style={{ background: '#212121' }}>
            <h3 style={contentStyle}>4</h3>
        </div>
  </Carousel>
    )
}

export default Hero