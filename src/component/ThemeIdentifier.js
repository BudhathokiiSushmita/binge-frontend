import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';

const ThemeIdentifier = () => {

    const setDarkMode = () => {
        console.log("darl");
        localStorage.setItem("binge-theme", "dark");
        document.querySelector("body").setAttribute("binge-theme", "dark");
    }

    const setLightMode = () => {
        localStorage.setItem("binge-theme", "light");
        document.querySelector("body").setAttribute("binge-theme", "light");
    }

    const toggle = (event) => {
        event.target.checked ? setDarkMode(event) : setLightMode(event);
    }

    useEffect(() => {
        checkTheme();
    }, [])

    const checkTheme = () => {
        console.log("here");
        const bingeTheme = localStorage.getItem("binge-theme");
        let isDark;
        if(bingeTheme) {
            document.querySelector("body").setAttribute("binge-theme", bingeTheme);
            isDark = (bingeTheme === 'dark') ? true : false;
        }
        const themeSelector = document.querySelector("#themeCheckbox");
        themeSelector.checked = isDark;
    }

    return (
        <Row>
            <Col>
                <div className='float-end'>
                    <label class="switch">
                        <input type="checkbox" onChange={toggle} id="themeCheckbox"/>
                        <span class="slider round"></span>
                    </label>
                </div>
            </Col>
        </Row>

    )
}

export default ThemeIdentifier
