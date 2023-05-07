// * {
//     outline: 1px dotted red;
//     background-color: rgba(127, 0, 0, 0.1);
// }

const all = document.querySelectorAll('*');
const allArray = Array.from(all);

const allWithBackground = allArray.filter((el) => {
    const style = window.getComputedStyle(el);
    const bgColor = style.getPropertyValue('background-color');
    return bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
    }
);