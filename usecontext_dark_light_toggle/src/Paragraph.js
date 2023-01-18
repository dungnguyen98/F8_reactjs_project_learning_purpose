import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Paragraph() {

    const { theme, toggleTheme } = useContext(ThemeContext)
    
    console.log(theme)

    return (
        <p className={theme}> Xin chao tat ca moi nguoi </p>
    )
}

export default Paragraph