import ejs from "ejs";
import express from "express";

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    const today = new Date();
    const weekDay = today.getDay();

    let type = "a weekday";
    let adv = "It's time to work hard!";
    // console.log(weekDay);

    if (weekDay === 0 || weekDay === 6){
        type = "the weekend";
        adv = "It's time to have fun";
    }

    res.render(`index`, {
        dayType: type,
        advice: adv,
    });
})
app.listen(port, () => {
    console.log(`Server listening in port ${port}`)
})


