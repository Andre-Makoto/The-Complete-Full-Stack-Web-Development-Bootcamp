import React from "react";

function Footer () {
    const date = new Date();
    const yearDate = date.getFullYear();
    return(
        <div>
            <footer className="footer">
                <p>Copyright © {yearDate}</p>
            </footer>
        </div>
    )
}

export default Footer;