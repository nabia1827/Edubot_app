import { getHoverColors, getActiveColors, gradientColors } from "../colors";
export const headerStyle = {
    textAlign: 'center',
    color: '#282A41',
    height: 64,
    backgroundColor: 'white',
};
export const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    color: '#fff',
    backgroundColor: '#F4F8FF',
    overflow:'auto'
};
export const siderStyle = {
    textAlign: 'center',
    color: '#fff',
    background: 'linear-gradient(to bottom, #5178FB, #47BAD8)',
};
export const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'white',
};
export const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    height: '100%'

};
export const chatBoxStyle = {
    width: '100%',
    paddingLeft: '2.5em',
    paddingRight: '2.5em',
    paddingTop: '1.0em',
    paddingBottom: '1.0em',
};

export const gradientButtonStyle = {
    components: {
        Button: {
            colorPrimary: `linear-gradient(135deg, ${gradientColors.join(', ')})`,
            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(gradientColors).join(', ')})`,
            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(gradientColors).join(', ')})`,
            lineWidth: 0,
        },
    }
};